import { forwardRef } from "react";
import Button from "../shared/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "../shared/Modal";
import CartItem from "./CartItem";

const Cart = forwardRef(function Cart(props, ref) {
  function handleClose() {
    ref.current.close();
  }
  // @ts-ignore
  const { cartItems, onQuantityChange, onClearCart } = props;

  const total = Object.values(cartItems)
    .reduce((acc, item) => acc + item.numberOfItems * item.price, 0)
    .toFixed(2);

  const cartIsEmpty = !Object.values(cartItems).length;

  return (
    <Modal.Root ref={ref}>
      <Modal.Header title="Cart" handleClose={handleClose} />
      <Modal.Body className={cartIsEmpty && "flex items-center justify-center"}>
        {!cartIsEmpty && (
          <>
            <ul className="my-2">
              {Object.values(cartItems).map((meal) => (
                <CartItem meal={meal} key={meal.id} onQuantityChange={onQuantityChange} />
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
        <Button disabled={cartIsEmpty}>Continue</Button>
        <Button disabled={cartIsEmpty} onClick={onClearCart}>
          Clear <DeleteIcon />
        </Button>
      </Modal.Footer>
    </Modal.Root>
  );
});

export default Cart;
