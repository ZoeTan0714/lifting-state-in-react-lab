// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, onAdd}) => {
  return (
    <>
    <ul>
      {availableIngredients.map((item, index) => (
        <div key={index} className="itemBox">
            <p>{item.name}</p>
            <button onClick={() => onAdd(item)}>+</button>
        </div>
      ))}
    </ul>
    </>
  )
}


export default IngredientList
