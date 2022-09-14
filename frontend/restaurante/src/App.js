import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/form/Form";
import { fetchDataFromApi, getResponse } from "./utils/fetchData";
import { ColorRing } from "react-loader-spinner";
import { Store } from "../src/Context/Store";
import Background from "../src/images/background.webp";
import Banner1 from "../src/images/Banner1.jpg";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [meals, setMeals] = useState([]);
  const [styles, setStyles] = useState([]);
  const [styleSelected, setStyleSelected] = useState(null);
  const [mealSelected, setMealSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      let fetchMeals = await fetchDataFromApi("meals");
      let fetchStyles = await fetchDataFromApi("style");
      setMeals(fetchMeals);
      setStyles(fetchStyles);
    })();
  }, [restaurants]);

  const handleClick = async () => {
    setLoading(true);
    if (styleSelected === null && mealSelected === null) {
      setLoading(false);
      return alert("Elige alguno de los campos");
    }
    let fetchRestaurants = await getResponse(styleSelected, mealSelected);

    setTimeout(function () {
      setLoading(false);
    }, 3000);

    setRestaurants(
      fetchRestaurants[Math.floor(Math.random() * fetchRestaurants.length)].name
    );
  };

  return (
    <Store.Provider
      value={{
        styleSelected,
        setStyleSelected,
        mealSelected,
        setMealSelected,
      }}
    >
      <div className="App">
        <div className="AppHeader">
          {/* <img src={Banner1} className="BackgroundImage" /> */}
          <h1>INICIO</h1>
          <p>Obtiene Recomendaciones de Restaurantes</p>
          <h1>UBICACIONES</h1>
        </div>
        <img src={Banner1} className="BackgroundImage" />
        <p>Restaurante</p>
        <Form meals={meals} styles={styles} />
        <button onClick={handleClick} className="AppButton">
          {" "}
          Obtener Recomendación{" "}
        </button>
        {loading ? (
          <div className="Result">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <div className="Result">{restaurants ? restaurants : "Hola"}</div>
        )}
      </div>
    </Store.Provider>
  );
};

export default App;
