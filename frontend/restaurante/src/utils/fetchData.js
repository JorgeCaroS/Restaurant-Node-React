export const fetchDataFromApi = async (item) => {
  let fetchRestaurants = await fetch(`http://localhost:3000/api/${item}/list`, {
    method: "get",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let response = await fetchRestaurants.json();
  response = response.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.name === value.name)
  );
  return response;
};

export const getResponse = async (styleSelected, mealSelected) => {
  let style;
  let meal;
  let customBody = [];
  if (styleSelected != null) {
    style = styleSelected;
    customBody.push({ name: "style", style: style });
  }
  if (mealSelected != null) {
    meal = mealSelected;
    customBody.push({ name: "meal", meal: meal });
  }
  let fetchRestaurants = await fetch(
    `http://localhost:3000/api/restaurants/query`,
    {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customBody),
    }
  );
  let response = await fetchRestaurants.json();
  return response;
};
