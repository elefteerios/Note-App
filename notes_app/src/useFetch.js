import { useState, useEffect } from "react";

const useFetch = (url, reGetData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not get the data from the server");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [reGetData]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
