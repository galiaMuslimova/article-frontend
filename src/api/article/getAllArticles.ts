import { Article } from "@/types/article";
import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "@/api/axios";

export const getAllArticles = async (): Promise<Article[]> =>
  axiosInstance
    .get<Promise<Article[]>, AxiosResponse<Article[]>>(`/article`)
    .then((res) => res?.data)
    .catch((err: AxiosError<Record<string, string>>) => {
      throw JSON.stringify(err.response?.data);
    });
