import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "./Home";

const Links = () => {
  const params = useParams();
  const getData = async () => {
    const res = await instance.get(`/links/${params.shortId}`);
    window.location.replace(res.data.data.url);
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
};

export default Links;
