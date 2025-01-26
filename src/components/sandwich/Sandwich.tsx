import { useState } from "react";
import "./sandwich.css";

function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Sandwich constructor: ");

  function handleAddBread(): void {
    setSandwich(`${sandwich} Bread🍞`);
  }

  function handleAddCheese(): void {
    setSandwich(`${sandwich} Cheese🧀`);
  }

  function handleAddSalami(): void {
    setSandwich(`${sandwich} Salami🍖`);
  }

  function handleAddSalad(): void {
    setSandwich(`${sandwich} Salad🥬`);
  }

  function handleEat(): void {
    setSandwich(`Sandwich constructor:`)
  }

  // Состояние - может быть чем угодно: строкой, числом, массивом и т.д.
  // и с ним можно работать как с любой другой переменной,
  // но изменять только с помощью функции изменения состояния.
  // Если делать через обычную переменную без useState, то нужен будет слушатель событий
  //  и значение на странице не будет обновляться, а useState отлавливает изменение
  // и отрисовывает на странице

  return (
    <div className="containerSandwich">
      <h2 className="h2Sandwich">Sandwich</h2>
      <img className="imgSandwich"
        src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg"
        alt=""
      />
      <p>{sandwich}</p>
      <div className="btnSandwichContainer">
        <button className="btnSandwich" type="button" onClick={handleAddBread}>
          Add Bread🍞
        </button>
        <button className="btnSandwich" type="button" onClick={handleAddCheese}>
          Add Cheese🧀
        </button>
        <button className="btnSandwich" type="button" onClick={handleAddSalami}>
          Add Salami🍖
        </button>
        <button className="btnSandwich" type="button" onClick={handleAddSalad}>
          Add Salad🥬
        </button>
        <button className="btnSandwich" type="button" onClick={handleEat}>
          EAT EM ALL
        </button>
        
      </div>
    </div>
  );
}

export default Sandwich;
