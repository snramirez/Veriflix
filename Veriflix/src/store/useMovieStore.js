import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useGetData } from "../utils/getData";
import axios from "axios";

export const useMovieStore = defineStore("useMovieStore", () => {
  //Data
  const moviePreferences = ref([
    {
      s: 'fight',
      title: '¡Accion Pelea!'
    },
    {
      s: 'romance',
      title: 'Para ver en pareja'
    },
    {
      s: 'funny',
      title: 'Una de risa'
    },
    {
      s: 'chase',
      title: '¡Que no se escape!'
    },
    {
      s: 'west',
      title: 'El lejano Oeste te llama'
    },
    {
      s: 'taken',
      title: 'A very particular set of skills'
    },
    {
      s: 'gun',
      title: 'Second Amendment'
    },
  ]);

  //Methods
  const getMoviePreferences = async () => {
    try {
      //Call to the server for the user preferences
      // moviePreferences = [
      //   {
      //     s: 'fight',
      //     title: '¡Accion Pelea!'
      //   },
      //   {
      //     s: 'romace',
      //     title: 'Para ver en pareja'
      //   },
      //   {
      //     s: 'funny',
      //     title: 'Una de risa'
      //   },
      //   {
      //     s: 'chase',
      //     title: '¡Que no se escape!'
      //   },
      //   {
      //     s: 'west',
      //     title: 'El lejano Oeste te llama'
      //   },
      //   {
      //     s: 'taken',
      //     title: 'A very particular set of skills'
      //   },
      //   {
      //     s: 'gun',
      //     title: 'Second Amendment'
      //   },
      // ];
      console.log(moviePreferences)
    } 
    catch (error) {
      console.log(error);
    }
  };

  //Computed
  

  return {
    moviePreferences,
    getMoviePreferences,
  };
});
