import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Erro ao tentar se comunicar ao Endpoint");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fatch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 300);

    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
