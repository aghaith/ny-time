import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
const Article = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { reset } = useForm();
  const handleBack = () => {
    navigate(ROUTES.ARTICLES_LIST);
  };
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <div>abstract: {state?.data?.abstract}</div>
      <div>adx keywords: {state?.data?.adx_keywords}</div>
      <div>asset id: {state?.data?.asset_id}</div>
      <div>byline: {state?.data?.byline}</div>
      <div>column: {state?.data?.column}</div>
      <div>
        des_facet:{" "}
        {state?.data?.des_facet?.map((str, index) => (
          <div key={index}>{str}</div>
        ))}
      </div>
      <div>eta_id: {state?.data?.eta_id}</div>
      <div>
        geo_facet:{" "}
        {state?.data?.geo_facet?.map((str, index) => (
          <div key={index}>{str}</div>
        ))}
      </div>
      <div>id: {state?.data?.id}</div>
      <div>nytdsection: {state?.data?.nytdsection}</div>
      <div>
        per_facet:{" "}
        {state?.data?.per_facet?.map((str, index) => (
          <div key={index}>{str}</div>
        ))}
      </div>
      <div>
        org_facet:{" "}
        {state?.data?.org_facet?.map((str, index) => (
          <div key={index}>{str}</div>
        ))}
      </div>
      <div>published_date: {state?.data?.published_date}</div>
      <div>section: {state?.data?.section}</div>
      <div>source: {state?.data?.source}</div>
      <div>subsection: {state?.data?.subsection}</div>
      <div>title: {state?.data?.title}</div>
      <div>type: {state?.data?.type}</div>
      <div>updated: {state?.data?.updated}</div>
      <div>uri: {state?.data?.uri}</div>
      <div>url: {state?.data?.url}</div>
      <div>
        {state?.data?.media?.map((item, index) => (
          <div key={index}>
            <p>type: {item?.type}</p>
            <p>subtype: {item?.subtype}</p>
            <h2>caption: {item?.caption}</h2>
            <p>copyright: {item?.copyright}</p>
            <p>approved_for_syndication: {item?.approved_for_syndication}</p>
            {item["media-metadata"]?.map((metadata, i) => (
              <div key={i}>
                <img src={metadata?.url} alt={item?.caption} />
                <p>Format: {metadata?.format}</p>
                <p>Height: {metadata?.height}</p>
                <p>Width: {metadata?.width}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Article;
