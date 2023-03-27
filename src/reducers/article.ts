import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { Article } from "@/types/article";
import { FetchStatus } from "@/types/fetch";
import { createArticle } from "@/api/article/createArticle";
import { getAllArticles } from "@/api/article/getAllArticles";

type ArticleState = Readonly<{
  articles: Article[];
  status: FetchStatus;
  error: SerializedError | null;
}>;

const initialState: ArticleState = {
  articles: [],
  status: FetchStatus.INITIAL,
  error: null,
};

export const createArticleAction = createAsyncThunk(
  "article/createArticle",
  (dto: Article) => createArticle(dto)
);

export const getAllArticlesAction = createAsyncThunk(
  "article/getAllArticles",
  () => getAllArticles()
);

export const ArticleSlice = createSlice({
  name: "Article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createArticleAction.pending, (state) => {
        state.status = FetchStatus.PENDING;
        state.error = null;
      })
      .addCase(createArticleAction.rejected, (state, action) => {
        state.status = FetchStatus.REJECTED;
        state.error = action.error;
      })
      .addCase(
        createArticleAction.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.status = FetchStatus.FULFILLED;
          state.articles = [...state.articles, action.payload];
          state.error = null;
        }
      )

      // GET ALL
      .addCase(getAllArticlesAction.pending, (state) => {
        state.status = FetchStatus.PENDING;
        state.error = null;
      })
      .addCase(getAllArticlesAction.rejected, (state, action) => {
        state.status = FetchStatus.REJECTED;
        state.error = action.error;
      })
      .addCase(
        getAllArticlesAction.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.status = FetchStatus.FULFILLED;
          state.articles = action.payload;
          state.error = null;
        }
      );
  },
});

export default ArticleSlice.reducer;
