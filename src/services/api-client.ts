import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "32c94277929d481fa7b45c89b7a248a9",
  },
});
