import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6ae83c5c3b844b79b5b6347eefc530b8",
  },
});
