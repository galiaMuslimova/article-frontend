import { Article } from "@/types/article";
import { axiosInstance } from "@/api/axios";
import { AxiosError, AxiosResponse } from "axios";

export const createArticle = async (params: Article): Promise<Article> => {
  return axiosInstance
    .post<Promise<Article>, AxiosResponse<Article>>(`/article`, params)
    .then((res) => res?.data)
    .catch((err: AxiosError<Record<string, string>>) => {
      throw JSON.stringify(err.response?.data);
    });
};
