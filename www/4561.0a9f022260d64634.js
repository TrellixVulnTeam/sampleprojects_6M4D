"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4561],{64561:(l,a,i)=>{i.r(a),i.d(a,{GeolocationWeb:()=>s,Geolocation:()=>u});var t=i(15861),c=i(47423);class s extends c.Uw{getCurrentPosition(n){return(0,t.Z)(function*(){return new Promise((e,r)=>{navigator.geolocation.getCurrentPosition(o=>{e(o)},o=>{r(o)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},n))})})()}watchPosition(n,e){return(0,t.Z)(function*(){return`${navigator.geolocation.watchPosition(o=>{e(o)},o=>{e(null,o)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},n))}`})()}clearWatch(n){return(0,t.Z)(function*(){window.navigator.geolocation.clearWatch(parseInt(n.id,10))})()}checkPermissions(){var n=this;return(0,t.Z)(function*(){if("undefined"==typeof navigator||!navigator.permissions)throw n.unavailable("Permissions API not available in this browser");const e=yield window.navigator.permissions.query({name:"geolocation"});return{location:e.state,coarseLocation:e.state}})()}requestPermissions(){var n=this;return(0,t.Z)(function*(){throw n.unimplemented("Not implemented on web.")})()}}const u=new s}}]);