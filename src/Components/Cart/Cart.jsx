import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  //   let message;
  //   if (cart.length === 0) {
  //     message = <p>Please add some product</p>;
  //   }
  return (
    <div>
      <h2>Order Summary : {cart.length}</h2>
      {/* {message} */}
      {/* {cart.length === 0 ? "Please add some product" : ""} */}
      {cart.length === 0 && "Please add some product"}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

// 1. Conditional Rendering
// use if else to set a variable that will contain an element,components
// 2. ternary : condition ? true:false
// 3. logical && give only true
// 4. logical || give only false
