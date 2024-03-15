import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMostPopularArticles } from "api/services/articles.services";
import { useQuery } from "react-query";
import { ArticleData, Results } from "interfaces/articles.model";
import Select from "react-select";
const ArticlesList = () => {
  const [articles, setArticles] = useState<Results[]>([]);
  const [period, setPeriod] = useState<number>(1);
  const { error: errorArticles, data: articlesList } = useQuery<ArticleData[]>(
    [period],
    getMostPopularArticles,
    {
      enabled: period !== undefined ? true : false,
    }
  );
  useEffect(() => {
    if (errorArticles) {
      console.log(errorArticles);
    }
  }, [errorArticles]);
  useEffect(() => {
    if (articlesList) {
      setArticles(articlesList["results"]);
    }
  }, [period, articlesList]);
  const options = [
    { value: 1, label: "Last 24 hours" },
    { value: 7, label: "Last 7 days" },
    { value: 30, label: "Last 30 days" },
  ];
  return (
    <div>
      <h1>Most Popular Articles</h1>
      <Select
        options={options}
        value={options.find((opt) => opt.value === period)}
        onChange={(selectedOption) => setPeriod(selectedOption.value)}
      />
      <ul>
        {articles?.map((article) => (
          <li key={article.id}>
            <Link
              to={`/articles/${article.id}`}
              state={{
                data: article,
              }}
            >
              {article?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticlesList;
