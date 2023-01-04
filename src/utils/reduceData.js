/*
 * Takes two fetched objects from useDataFetcher and returns a reduced object containing only the required data
 * Obj 1 = item query (see https://nexushub.co/developers/api/Wow-Classic-Items/items)
 * Obj 2 = crafting query (see https://nexushub.co/developers/api/Wow-Classic-Crafting/crafting)

 */

function reduceData(itemData, craftData) {
  if (itemData === null || craftData === null) return null;
  if (itemData.stats.current === null) return defaultData(itemData);
  let item = {
    itemId: itemData.itemId,
    name: itemData.name,
    icon: itemData.icon,
    marketValue: itemData.stats.current.marketValue,
    amount: craftData.createdBy[0].amount[0],
  };

  let reagents = [];
  let reagentsMarketValue = 0;

  craftData.createdBy[0].reagents.forEach((element) => {
    let reagent = {
      itemId: element.itemId,
      name: element.name,
      amount: element.amount,
      icoN: element.icon,
      marketValue: element.marketValue,
      vendorPrice: element.vendorPrice,
    };
    if (reagent.vendorPrice === null && reagent.marketValue != null) {
      reagentsMarketValue += reagent.amount * reagent.marketValue;
    } else reagentsMarketValue += reagent.amount * reagent.vendorPrice;
    reagents.push(reagent);
  });

  item.reagents = reagents;
  item.craftCost = reagentsMarketValue;
  return item;
}
export default reduceData;

function defaultData(itemData) {
  let item = {
    itemId: itemData.itemId,
    name: itemData.name,
    icon: itemData.icon,
    marketValue: null,
    amount: null,
  };

  return item;
}
