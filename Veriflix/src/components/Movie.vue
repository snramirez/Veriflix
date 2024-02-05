<template>
  <v-container>
    <v-sheet v-if="movies" >
      <v-row>
        <v-col cols="4">
          <v-img :src="movies.Poster"></v-img>
        </v-col>

        <v-col cols="8">
          <v-row>
            <v-card width="90%">
              <v-card-title>
                {{ movies.Title }}
              </v-card-title>

              <v-card-text>
                {{ movies.Plot }}
              </v-card-text>

              <v-card-text v-if="movies">
                <div
                  class="text-center pt-4"
                  v-for="rating in movies.Ratings"
                  :key="rating"
                >
                  <p>{{ rating.Source }}</p>
                  <v-rating
                    :model-value="rating.Value"
                    length="10"
                    size="18"
                    half-increments
                    readonly
                    >
                  </v-rating>
                  <pre>{{ rating.Value }}</pre>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="mt-2" width="90%">
              <v-card-text>
                <p>Año: {{ movies.Year }}</p>
                <p>Duración: {{ movies.Runtime }}</p>
                <p>Director: {{ movies.Director }}</p>
                <p>Escritores: {{ movies.Writer }}</p>
                <p>Actores: {{ movies.Actors }}</p>
                <p>Award: {{ movies.Awards }}</p>
                <p>Genero: {{ movies.Genre }}</p>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
  </template>

<script setup>
import { ref } from "vue";
import { useGetData } from "../utils/getData";

const { movies, getData } = useGetData();
const props = defineProps(['imdbID'])
const model = ref(true);

getData({
  method: "GET",
  params: {
    i: props.imdbID,
  },
});

</script>

<style></style>
