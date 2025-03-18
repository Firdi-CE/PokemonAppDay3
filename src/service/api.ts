import axios from "axios";


let bearerToken = "";

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig: any) => {
  axiosConfig.baseURL = "https://pokeapi.co/api/v2";
  //axiosConfig.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQ2NzE1ZTBjMmJhNGI1OGE4OWUzZmUzNGYwZWZiMSIsIm5iZiI6MTc0MTc0NjQ0MC41MjMsInN1YiI6IjY3ZDBmMTA4MjdjMzk2MGMyZDFlMTEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mgFkShOyyRo-Fo777Z-cF1Eb6Jc0i3AQbHpExRAISCA"

  return axiosConfig
});

export default axiosWithConfig;
