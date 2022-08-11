import { useRef, useState } from "react";

const AddProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="form-inline" onSubmit={submitHandler}>
      <div className="form-group mb-2">
        <input
          className="col-sm-2 float-end"
          type="text"
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />

        <button
          name="submit"
          type="submit"
          className="btn btn-primary col-sm-6 mx-2 mb-2 float-end"
        >
          Add to Cart
        </button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
};

export default AddProductForm;
