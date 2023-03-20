import React from "react";
import { ArticleProps } from "./Article.types";

export const Article: React.FC<ArticleProps> = ({ title, text }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};
