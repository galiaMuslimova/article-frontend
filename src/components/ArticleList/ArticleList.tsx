import React, { useEffect } from "react";
import { ArticleListProps } from "./ArticleList.types";
import { useAppDispatch, useAppSelector } from "@/store";
import { getAllArticlesAction } from "@/reducers/article";
import { Accordion } from "react-bootstrap";

export const ArticleList: React.FC<ArticleListProps> = () => {
  const dispatch = useAppDispatch();

  const { articles } = useAppSelector((store) => store.article);

  useEffect(() => void dispatch(getAllArticlesAction()), [dispatch]);

  return (
    <Accordion defaultActiveKey="0">
      {articles?.map((article, i) => (
        <Accordion.Item eventKey={i.toString()} key={article.title + i}>
          <Accordion.Header>{article.title}</Accordion.Header>
          <Accordion.Body>{article.text}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
