import { forwardRef } from "react";

import Button from "../shared/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Modal } from "../shared/Modal";

const Cart = forwardRef(function Cart(props, ref) {
  function handleClose() {
    ref.current.close();
  }
  // @ts-ignore
  const { cartItems, onQuantityChange, onClearCart } = props;

  return (
    <Modal.Root ref={ref}>
      <Modal.Header title="Cart" handleClose={handleClose} />
      <Modal.Body>
        <ul className="my-2">
          {Object.values(cartItems).map((meal) => (
            <div key={meal.id} className="my-1">
              <li className="flex justify-between items-center">
                <span>
                  {meal.name} - {meal.price} $
                </span>

                <div className="flex items-center">
                  <Button
                    className="mx-2"
                    inverted
                    onClick={() =>
                      onQuantityChange(meal.id, meal.numberOfItems - 1)
                    }
                  >
                    <RemoveCircleOutlineOutlinedIcon />
                  </Button>

                  {meal.numberOfItems}

                  <Button
                    className="mx-2"
                    inverted
                    onClick={() =>
                      onQuantityChange(meal.id, meal.numberOfItems + 1)
                    }
                  >
                    <AddCircleOutlineOutlinedIcon />
                  </Button>

                  <Button inverted onClick={() => onQuantityChange(meal.id, 0)}>
                    <DeleteIcon />
                  </Button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </Modal.Body>

      <Modal.Footer>
        <Button>Continue</Button>
        <Button onClick={onClearCart}>
          Clear <DeleteIcon />
        </Button>
      </Modal.Footer>
    </Modal.Root>
  );
});

export default Cart;
