import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "pages/Layout";
import Article from "pages/Article";
import ArticleList from "pages/ArticlesList";
import * as ROUTES from "constants/routes";
import "./App.css";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={ROUTES.ARTICLES_LIST} element={<Layout />}>
          <Route index element={<ArticleList />} />
          <Route path={ROUTES.ARTICLE} element={<Article />} />
        </Route>
        <Route
          path="*"
          element={<Navigate replace to={ROUTES.ARTICLES_LIST} />}
        />
      </Routes>
    </QueryClientProvider>
  );
}
export default App;
