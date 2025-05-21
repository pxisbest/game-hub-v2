// 优化：不从后段fetch genres数据，而是直接从本地的data文件中引入
//用useQuery从后段获取genres
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 hours
    initialData: genres, 
    //可以直接引入staticdata，不用显示spinner了
  });

export default useGenres;
