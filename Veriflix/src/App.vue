<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <v-app>
    <div class="appl">
      <header class="nav">
        <Navigation/>
      </header>
      <v-main>
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <router-view/>
        </v-parallax>
      </v-main>
    </div>
  </v-app>
</template>

<style>

</style>
