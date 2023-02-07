import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetch(endPoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}${endPoint}`)
      .then((response) => {
        if (response.data.length == 0) {
          setError("No data to show.");
        } else {
          setData(response.data);
        }
      })
      .catch(() => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
