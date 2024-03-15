import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import ArticlesList from "./ArticlesList";
test("renders ArticlesList component", () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <ArticlesList />
    </QueryClientProvider>
  );
});
