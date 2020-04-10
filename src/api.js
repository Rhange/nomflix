import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "add7b186c34e8b73ae87d16ec81780bf";
  config.params["language"] = "en-US";
  return config;
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular")
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today")
};
