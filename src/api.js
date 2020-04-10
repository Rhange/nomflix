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

/* "/tv/popular"가 아닌 "tv/popular"로 쓴다. 'baseURL' 맨 뒤에 '/'가 존재함. '/'를 앞에 써주는 것은 절대경로를 의미 */
api.get("tv/popular");

export default api;
