import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ArticleForm } from "@/components/ArticleForm";
import { ArticleList } from "@/components/ArticleList";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledTitle = styled.h2`
  margin: 20px 0;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Article</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container>
          <Row>
            <StyledTitle>Articles</StyledTitle>
            <ArticleList></ArticleList>
          </Row>
          <Row>
            <StyledTitle>Add Article</StyledTitle>
            <ArticleForm></ArticleForm>
          </Row>
        </Container>
      </main>
    </>
  );
}
