<template>
<div>
  <ion-tabs>
    <!-- https://ionicframework.com/docs/api/tabs#usage -->
    <!-- Match by an array of route names -->
    <!-- <ion-tab tab="map" :routes="['app.map', 'app.other.route']">
      <Map />
    </ion-tab> -->
    <!-- must match a route defined in router/index.js -->
    <ion-tab tab="schedule" :routes="['todos', 'todos-add']">
      <ion-vue-router name="session"></ion-vue-router>
    </ion-tab>

    <ion-tab tab="speakers" :routes="['speakers', 'speaker-detail', 'speaker-session-detail']">
      <ion-vue-router name="speaker"></ion-vue-router>
    </ion-tab>

    <ion-tab tab="map">
      <ion-vue-router name="map"></ion-vue-router>
    </ion-tab>

    <ion-tab tab="about">
      <ion-vue-router name="about"></ion-vue-router>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule">
        <ion-label>Schedule</ion-label>
        <ion-icon name="calendar" />
      </ion-tab-button>

      <ion-tab-button tab="speakers">
        <ion-icon name="contacts" />
        <ion-label>Speakers</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="map">
        <ion-icon name="map" />
        <ion-label>Map</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about">
        <ion-icon name="information-circle" />
        <ion-label>About</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</div>
</template>

<script>
export default {}
</script>
