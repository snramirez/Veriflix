<template>
  <v-app-bar :elevation="10">

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Veriflix</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn 
        icon
        v-if="!user" 
        :to="'/login'">
        <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn>
        <v-switch label="Daltonico" color="orange"></v-switch>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useAuthStore } from "@/store/useAuthStore";
import { storeToRefs } from "pinia";

const useAuth = useAuthStore();
const { user } = storeToRefs(useAuth);
</script>

<style></style>
