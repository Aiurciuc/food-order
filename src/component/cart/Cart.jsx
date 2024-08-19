import { forwardRef } from "react";
import Button from "../shared/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const Cart = forwardRef(function Cart(props, ref) {
  function handleClose() {
    ref.current.close();
  }
  // @ts-ignore
  const { cartItems, onQuantityChange } = props;

  return (
    <dialog
      className="backdrop:bg-gray-50/50 w-2/5 bg-slate-800 text-slate-200 p-4 h-1/3"
      ref={ref}
    >
      <section className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-normal uppercase text-yellow-500">
          Cart
        </h1>
        <Button inverted={true} onClick={handleClose}>
          <CloseIcon />
        </Button>
      </section>

      <ul className=" my-2">
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
                    onQuantityChange(meal.id, meal.numberOfItems + 1)
                  }
                >
                  <AddCircleOutlineOutlinedIcon />
                </Button>

                {meal.numberOfItems}

                <Button
                  className="mx-2"
                  inverted
                  onClick={() =>
                    onQuantityChange(meal.id, meal.numberOfItems - 1)
                  }
                >
                  <RemoveCircleOutlineOutlinedIcon />
                </Button>

                <Button inverted onClick={() => onQuantityChange(meal.id, 0)}>
                  <DeleteIcon />
                </Button>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <section className="flex gap-4 absolute bottom-6 right-6">
        <Button>Continue</Button>
        <Button>Clear  <DeleteIcon /></Button>
      </section>
    </dialog>
  );
});

export default Cart;
