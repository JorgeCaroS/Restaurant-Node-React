import "../../App.css";
import { useContext } from "react";
import { Store } from "../../../src/Context/Store";

const Form = (props) => {
  const { styleSelected, setStyleSelected } = useContext(Store);
  const { mealSelected, setMealSelected } = useContext(Store);

  const handleStyle = (e) => {
    setStyleSelected(e.target.value);
  };

  const handleMeal = (e) => {
    setMealSelected(e.target.value);
  };
  return (
    <div className="Form">
      <label>Estilo Restaurantes</label>
      <select onChange={handleStyle}>
        <option></option>
        {props.styles.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>

      <label>Preferencias de comidas</label>
      <select onChange={handleMeal}>
        <option></option>
        {props.meals.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Form;
