// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
        {props.burgurstack.map((eachStack, index) => (
        <li key={index}>{eachStack}</li>
        ))}
    </ul>

    <button>X</button>
)};

export default BurgerStack;
