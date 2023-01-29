import { useState, useEffect } from "react";
import reduceData from "../utils/reduceData";
import { storeToLocal, getDataFromLocal } from "../utils/objectStorage";

// URLs for GET requests from NexusHub API
const NEXUS_API_ITEMS = "https://api.nexushub.co/wow-classic/v1/items/";
const NEXUS_API_CRAFTING = "https://api.nexushub.co/wow-classic/v1/crafting/";

/*
 * Fetch data from API for given server, faction, and item id
 * URL can be NEXUS_API_ITEMS or NEXUS_API_CRAFTING
 * This method is called repeatedly by getData() below to fill the item list
 */
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
      throw error;
    })
    .finally(() => {});
}

// A custom hook that returns data about items for given server and faction
const useDataFetcher = (server, faction, itemGroup) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (server === null || faction === null) return setItems([]);
    // If local storage has recent data for server and faction,
    //  return it so we don't spam NexusHub
    const localData = getDataFromLocal(server, faction);
    if (localData != null) {
      setItems(localData);
      return;
    }

    // No stored data, so fetch new data
    // Clear the array of items and start fresh

    /*
     * For each requested item, query the item data and crafting data from NexusHub,
     *   and then merge them into a single object with helper function reduceData()
     */
    async function getData() {
      setItems([]);
      setLoading(true);
      let fetchedData = [];
      try {
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
            fetchedData = [...fetchedData, combinedObj];
            setItems(fetchedData);
          }
        }

        // Save the retrieved data
        if (fetchedData.length > 0) storeToLocal(server, faction, fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        if (error.status >= 500 && error.status < 600)
          setError("There was a problem connecting to NexusHub.co.");
        else setError("There was a problem fetching the data.");
      }
      setLoading(false);
    }
    getData();
  }, [server, faction, itemGroup]);

  return { items, loading, error };
};
export default useDataFetcher;
