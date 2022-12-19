/*
 * Helper functions for saving and retrieving data from local storage
 */

// Helper for hasRecentData; recent is 1 hour old
const dataIsRecent = (date) => {
  return Date.now() - date < 3600000; // 1 hour
};

// Given the server, faction, and object, save the data and the current timestamp
export const storeToLocal = (server, faction, obj) => {
  let timestamp = Date.now();
  let key = server + "-" + faction;
  let value = { date: timestamp, itemData: obj };
  localStorage.setItem(key, JSON.stringify(value));
};

// Retrieve data from local storage
export const getDataFromLocal = (server, faction) => {
  if (!localStorage) return null;
  let storedData = localStorage.getItem(server + "-" + faction);
  try {
    storedData = JSON.parse(storedData);
    if (dataIsRecent(storedData.date)) return storedData.itemData;
    return null;
  } catch {
    return null;
  }
};
