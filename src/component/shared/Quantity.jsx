import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function QuantityRoot({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

function QuantityMinus({ onQuantityChange }) {
  return (
    <Button className="mx-2" inverted onClick={onQuantityChange}>
      <RemoveCircleOutlineOutlinedIcon />
    </Button>
  );
}

function QuantityPlus({ onQuantityChange }) {
  return (
    <Button className="mx-2" inverted onClick={onQuantityChange}>
      <AddCircleOutlineOutlinedIcon />
    </Button>
  );
}

function QuantityValue({ quantity }) {
  return <>{quantity}</>;
}

function QuantityReset({ onQuantityChange }) {
  return (
    <Button inverted onClick={onQuantityChange}>
      <DeleteIcon />
    </Button>
  );
}

export const Quantity = {
  Root: QuantityRoot,
  Minus: QuantityMinus,
  Plus: QuantityPlus,
  Value: QuantityValue,
  Reset: QuantityReset,
};
