import { createArticleAction } from "@/reducers/article";
import { useAppDispatch } from "@/store";
import React, { FormEvent, useCallback } from "react";
import { Button, Form } from "react-bootstrap";

export const ArticleForm: React.FC = () => {
  const dispacth = useAppDispatch();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      dispacth(
        createArticleAction({
          title: event.target.title.value as string,
          text: event.target.text.value as string,
        })
      );
    },
    [dispacth]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Text</Form.Label>
        <Form.Control
          name="text"
          as="textarea"
          rows={3}
          placeholder="Enter text"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
