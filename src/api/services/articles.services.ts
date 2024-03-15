import api from "api/api";
import { ArticleData } from "interfaces/articles.model";

const apiKey = process.env.REACT_APP_API_KEY;

export const getMostPopularArticles = async (
  period
): Promise<ArticleData[]> => {
  const response = await api.get<ArticleData[]>(
    `${period?.queryKey[0]}.json?api-key=${apiKey}`
  );
  return response.data;
};
