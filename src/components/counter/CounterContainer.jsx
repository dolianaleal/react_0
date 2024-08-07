import { useState } from "react";
import { Counter } from "./Counter";

const counterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial); // [undefined, function]

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock Maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default counterContainer;
