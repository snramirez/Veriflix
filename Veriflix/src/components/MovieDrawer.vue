<template>
  <div>
    <v-sheet class="mx-4" elevation="8">
      <h2 class="mx-2 px-2 pt-2">{{ props.preference.title }}</h2>

      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrow
        selected-class="grey-darken-3"
        v-if="movies"
      >
        <v-slide-group-item
          v-for="movie in movies.Search"
          :key="movie"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            color="grey-darken-4"
            :class="['ma-4', selectedClass]"
            width="250"
            @click="toggle"
            hover
          >
            <v-img cover :src="movie.Poster">
              <v-card
                class="d-flex flex-column"
                outlined
                height="100%"
                width="100%"
                v-if="isSelected"
                color="rgb(0, 0, 0, 0.7)"
              >
                <v-card-title>
                  {{ movie.Title }}
                </v-card-title>
                <v-card-text>
                  {{ movie.Year }}
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn variant="outlined" @click="movieView(movie.imdbID)">
                    Ver Mas
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <v-dialog v-model="fullViewMovie" max-width="70%">
      <v-card>
          <Movie :imdbID="imdbID" />
          <v-card-actions>
              <v-btn block @click="fullViewMovie = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGetData } from "../utils/getData";
import Movie from "./Movie.vue";

const { movies, getData } = useGetData();
let fullViewMovie = ref(false);
let imdbID = ref("");
const model = ref(null);
const props = defineProps(['preference'])

getData({
  method: "GET",
  params: {
    s: props.preference.s,
  },
});
const movieView = (id) => {
  imdbID = id;
  fullViewMovie.value = true;
};
</script>

<style></style>
