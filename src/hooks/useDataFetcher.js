import { useState, useEffect } from "react";
import reduceData from "../utils/reduceData";

const NEXUS_API_ITEMS = "https://api.nexushub.co/wow-classic/v1/items/";
const NEXUS_API_CRAFTING = "https://api.nexushub.co/wow-classic/v1/crafting/";

const useDataFetcher = (server, faction, itemGroup) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setItems([]);
    if (server === null || faction === null) return;
    setLoading(true);

    async function getFromNexus(URL, server, faction, item) {
      // Get Item Data
      return fetch(URL + server + "-" + faction + "/" + item)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    async function getData() {
      for (let item in itemGroup) {
        const fetchedItem = await getFromNexus(
          NEXUS_API_ITEMS,
          server,
          faction,
          itemGroup[item]
        );
        const fetchedCraft = await getFromNexus(
          NEXUS_API_CRAFTING,
          server,
          faction,
          itemGroup[item]
        );
        if (fetchedItem != null && fetchedCraft != null) {
          let combinedObj = reduceData(fetchedItem, fetchedCraft);
          setItems((prevItems) => [...prevItems, combinedObj]);
        }
      }
    }
    getData();
  }, [server, faction, itemGroup]);

  //console.log("Items fetched: ", items);
  return { items, loading, error };
};
export default useDataFetcher;
