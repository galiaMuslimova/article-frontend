import { ArticleForm } from "@/components/ArticleForm";
import { ArticleList } from "@/components/ArticleList";
import React from "react";

export default function ArticlePage() {
  return (
    <div>
      <ArticleForm></ArticleForm>
      <ArticleList></ArticleList>
    </div>
  );
}
