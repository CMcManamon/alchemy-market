/*
 * Takes two fetched objects from useDataFetcher and returns a reduced object containing only the required data
 * Obj 1 = item query (see https://nexushub.co/developers/api/Wow-Classic-Items/items)
 * Obj 2 = crafting query (see https://nexushub.co/developers/api/Wow-Classic-Crafting/crafting)

 */

function reduceData(itemData, craftData) {
  if (itemData === null || craftData === null) return {};
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

/*
var testObjItem = {
  server: "benediction-alliance",
  itemId: 46376,
  name: "Flask of the Frost Wyrm",
  uniqueName: "flask-of-the-frost-wyrm",
  icon: "https://wow.zamimg.com/images/wow/icons/large/inv_alchemy_endlessflask_04.jpg",
  tags: ["Common", "Consumable"],
  requiredLevel: 75,
  itemLevel: 85,
  sellPrice: 2500,
  vendorPrice: null,
  tooltip: [
    { label: "Flask of the Frost Wyrm", format: "Common" },
    { label: "Item Level 85", format: "Misc" },
    { label: "Requires Level 75" },
    {
      label:
        "Use: Increases spell power by 125 for 1 hour. Counts as both a Battle and Guardian elixir.  This effect persists through death. (3 Sec Cooldown)",
      format: "Uncommon",
    },
    { label: "Max Stack: 20" },
    { label: "Sell Price:" },
  ],
  itemLink: "|cffffffff|Hitem:46376::::::::::0|h[Flask of the Frost Wyrm]|h|r",
  stats: {
    lastUpdated: "2022-10-26T17:27:49.000Z",
    current: {
      historicalValue: 143643,
      marketValue: 87458,
      minBuyout: 81999,
      numAuctions: 2470,
      quantity: 8699,
    },
    previous: {
      marketValue: 87464,
      minBuyout: 81998,
      numAuctions: 2319,
      quantity: 8757,
      historicalValue: 148711,
    },
  },
};
var testObjCraft = {
  itemId: 46376,
  name: "Flask of the Frost Wyrm",
  uniqueName: "flask-of-the-frost-wyrm",
  slug: "benediction-alliance",
  createdBy: [
    {
      amount: [2, 2],
      requiredSkill: 435,
      category: "Alchemy",
      reagents: [
        {
          itemId: 36906,
          amount: 5,
          name: "Icethorn",
          uniqueName: "icethorn",
          icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_icethorn.jpg",
          marketValue: 13505,
          vendorPrice: null,
        },
        {
          itemId: 36905,
          amount: 5,
          name: "Lichbloom",
          uniqueName: "lichbloom",
          icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_whispervine.jpg",
          marketValue: 15067,
          vendorPrice: null,
        },
        {
          itemId: 36908,
          amount: 1,
          name: "Frost Lotus",
          uniqueName: "frost-lotus",
          icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_herb_frostlotus.jpg",
          marketValue: 11432,
          vendorPrice: null,
        },
        {
          itemId: 40411,
          amount: 1,
          name: "Enchanted Vial",
          uniqueName: "enchanted-vial",
          icon: "https://wow.zamimg.com/images/wow/icons/large/inv_alchemy_enchantedvial.jpg",
          marketValue: 18700,
          vendorPrice: 9943,
        },
      ],
      recipes: [],
    },
  ],
  reagentFor: [],
};
*/
