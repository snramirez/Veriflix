<template>
    <v-row v-if="moviePreferences" >
      <v-container fluid v-for="preference in moviePreferences" :key="preference">
        <MovieDrawer :preference="preference" />
      </v-container>
    </v-row>
</template>

<script setup>
import MovieDrawer from "../components/MovieDrawer.vue";
import { useMovieStore } from "@/store/useMovieStore";
import { storeToRefs } from "pinia";

const useMovie = useMovieStore();
const { moviePreferences } = storeToRefs(useMovie);
const { getMoviePreferences } = useMovie;
getMoviePreferences();
console.log('aaaa',moviePreferences.value);
</script>

<style></style>
