<template>
  <v-app-bar :elevation="10">

    <v-app-bar-title>
      <v-btn variant="text" to="/movieboard">Veriflix</v-btn>
    </v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn 
        icon
        v-if="!user" 
        :to="'/login'">
        <v-icon>mdi-account</v-icon>
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
