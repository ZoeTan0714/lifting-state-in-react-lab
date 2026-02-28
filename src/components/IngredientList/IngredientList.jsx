// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({onAdd}) => {
  return (
    <>
    <ul>
      {ingredient.map((ingredient, index) => (
        <div key={index}>
            <p>{item.name}</p>
            <button onClick={() => onAdd(ingredient)}>+</button>
        </div>
      ))}
    </ul>
    </>
  )
}

export default IngredientList;
