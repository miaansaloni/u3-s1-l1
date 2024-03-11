const Button = function (props) {
  // il parametro di un componente a funzione, dove riceveremo TUTTE le props, è sempre UN OGGETTO
  // props.nameToGreet
  return (
    <div>
      <button>{props.btnText}</button>
    </div>
  );
};

export default Button;
