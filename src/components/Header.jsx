import { useContext, useRef } from "react";

import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header() {
  const cartCxt = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = cartCxt.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cartCxt.items}
        onUpdateCartItemQuantity={cartCxt.updateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
