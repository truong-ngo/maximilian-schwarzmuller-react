import * as http from "../utils/http";

export const getMeals = async (apiEndpoint) => {
  const res = await http.get(apiEndpoint);
  let results = [];
  for (const key in res) {
    results.push({
      id: key,
      name: res[key].name,
      desctiption: res[key].desctiption,
      price: res[key].price,
    });
  }
  return results;
};
