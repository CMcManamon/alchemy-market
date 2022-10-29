import { useState, useEffect } from "react";
import { Flasks } from "../data/flasks";

const useDataFetcher = (server, faction) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (server === null || faction === null) return;
    setItems([]);
    setLoading(true);
    for (let flask in Flasks) {
      fetch(
        "https://api.nexushub.co/wow-classic/v1/items/" +
          server +
          "-" +
          faction +
          "/" +
          Flasks[flask]
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setItems((prevItems) => [...prevItems, data]);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [server, faction]);

  return { items, loading, error };
};
export default useDataFetcher;
