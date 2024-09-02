import { forwardRef } from "react";
import Button from "../shared/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "../shared/Modal";
import CartItem from "./CartItem";
import useCartValue from "../../hooks/useCartValue";

const Cart = forwardRef(function Cart(props, ref) {
  const { cart, handleClearCart } = useCartValue();

  const { handleOpenCheckout } = props;

  function handleClose() {
    ref.current.close();
  }

  const total = Object.values(cart ?? {})
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const cartIsEmpty = !Object.values(cart ?? {}).length;

  return (
    <Modal.Root ref={ref}>
      <Modal.Header title="Cart" handleClose={handleClose} />
      <Modal.Body className={cartIsEmpty && "flex items-center justify-center"}>
        {!cartIsEmpty && (
          <>
            <ul className="my-2">
              {Object.values(cart).map((meal) => (
                <CartItem meal={meal} key={meal.id} />
              ))}
            </ul>

            <span className="float-end mt-3">
              <b>Total: ${total}</b>
            </span>
          </>
        )}
        {cartIsEmpty && <p className=" opacity-50"> Cart is empty </p>}
      </Modal.Body>

      <Modal.Footer>
        <Button inverted onClick={handleClose}>
          Close
        </Button>

        <Button disabled={cartIsEmpty} onClick={handleOpenCheckout}>
          Checkout
        </Button>
        <Button disabled={cartIsEmpty} onClick={handleClearCart}>
          Clear <DeleteIcon />
        </Button>
      </Modal.Footer>
    </Modal.Root>
  );
});

export default Cart;
