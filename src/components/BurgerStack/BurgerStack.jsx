// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <>
    <ul>
        {stack.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <button onClick={() => onRemove(index)}>X</button>
          </div>
        ))}
    </ul>
    </>
)};

export default BurgerStack;