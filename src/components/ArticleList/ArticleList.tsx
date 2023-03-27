import React, { useEffect } from "react";
import { Article } from "@/components/Article";
import { ArticleListProps } from "./ArticleList.types";
import { useAppDispatch, useAppSelector } from "@/store";
import { getAllArticlesAction } from "@/reducers/article";

export const ArticleList: React.FC<ArticleListProps> = () => {
  const dispatch = useAppDispatch();

  const { articles } = useAppSelector((store) => store.article);
  console.log(articles);

  useEffect(() => void dispatch(getAllArticlesAction()), [dispatch]);

  return (
    <div>
      <div>List</div>
      {articles?.map((article, i) => (
        <Article
          key={article.title + i}
          title={article.title}
          text={article.text}
        ></Article>
      ))}
    </div>
  );
};
