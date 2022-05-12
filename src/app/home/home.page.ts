	import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
	import MapView from '@arcgis/core/views/MapView';
	import Graphic from '@arcgis/core/Graphic';
	import Point from '@arcgis/core/geometry/Point';
	import WebMap from '@arcgis/core/WebMap';
	import { Geolocation } from 'sparkjs-will/geolocation';


	@Component({
	  selector: 'app-home',
	  templateUrl: 'home.page.html',
	  styleUrls: ['home.page.scss'],
	})
	export class HomePage implements OnInit, OnDestroy {
	  @ViewChild('mapViewNode', {static: true}) private mapViewEl!: ElementRef;
	  public view: any = null;
	  mapView: MapView;
	  userLocationGraphic: Graphic;
	  watchCoordinate: any;
	  watchId: any;
	  latitude: number;
	  longitude: number;
	  options = {
	    timeout: 10000,
	    enableHighAccuracy: true,
	    maximumAge: 3600
	  };
	  constructor(
	    private zone: NgZone)
	   {}

	  initializeMap(): Promise<any> {
	    const container = this.mapViewEl.nativeElement;

	    const webmap = new WebMap({
	      portalItem: {
	        id: '5215a0d222564a92ab57b5896e0a6ccd',
	      },
	    });

	    const view = new MapView({
	      container,
	      map: webmap,

	    });
	    this.view = view;
      return this.view.when();

	   }

	   public async ngOnInit(): Promise<any> {
	    // Initialize MapView and return an instance of MapView
	    this.initializeMap().then(() => {
	      // The map has been initialized
	        console.log('The map is ready.');
	    });
	    await this.updateUserLocation();
	    this.view.center = this.userLocationGraphic.geometry as Point;
	    setInterval(this.updateUserLocation.bind(this), 10000);
	  }

    async getLocationService(): Promise<number[]> {
      const permissions = await Geolocation.checkPermissions();
      if(permissions.location.length) {
         return new Promise((resolve, reject)=> {
        Geolocation.getCurrentPosition().then(data => {
          resolve([data.coords.latitude, data.coords.longitude]);
      });
    });
      }
    }
	      //need to implement
	      watchPosition() {
	        try {
	          this.watchId = Geolocation.watchPosition({}, (position, err) => {
	            console.log('Watch', position);
	            this.zone.run(() => {
	              this.watchCoordinate = {
	                latitude: position.coords.latitude,
	                longitude: position.coords.longitude,
	              };
	            });
	          });
	        } catch (e) {
	          console.error(e);
	        }
	      }
	      //need to implement
	      clearWatch() {
	        if (this.watchId != null) {
	          Geolocation.clearWatch({ id: this.watchId });
        }
	      }

	     async updateUserLocation(){
	       const latLng = await this.getLocationService();
	       const geom = new Point({latitude: latLng[0], longitude: latLng[1]});
	       const markerSymbol = {
	        type: 'simple-marker',
	        size: '16px',
	        color: [10, 132, 255],
          outline: {
	          color: '#efefef',
	          width:'2px'
	        }
	      };
	       if (this.userLocationGraphic) {
	         this.userLocationGraphic.geometry = geom;
	       } else {
	         this.userLocationGraphic = new Graphic({
	            symbol: markerSymbol,
	            geometry: geom
	         });
	         this.view.graphics.add(this.userLocationGraphic);
	       }
	     }
	     ngOnDestroy(): void {
	      if (this.view) {
	        // destroy the map view
	        this.view.destroy();
	      }
	    }
	  }
