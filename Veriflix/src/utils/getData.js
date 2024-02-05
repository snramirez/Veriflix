import axios from "axios";
import { ref } from "vue";
import apiData from '../assets/api.json'
axios.defaults.baseURL = apiData.API_BASE_URL;

export const useGetData = () => {
  const movies = ref(null);

  const getData = async (url) => {
    url.params.apikey = apiData.API_KEY
    url.params.type = apiData.PARAM_TYPE
    url.params.plot = apiData.PLOT
    try {
      const res = await axios(url);
      movies.value = res.data;
    } 
    catch (error) {
      console.log(error);
    } 
  };

  return {
    getData,
    movies,
  };
};
