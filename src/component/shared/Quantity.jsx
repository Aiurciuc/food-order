import Button from "./Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function QuantityRoot({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

function QuantityMinus({ onQuantityChange, fontSize='medium' }) {
  return (
    <Button className="mx-2" inverted onClick={onQuantityChange}>
      <RemoveCircleOutlineOutlinedIcon fontSize={fontSize} />
    </Button>
  );
}

function QuantityPlus({ onQuantityChange, fontSize='medium' }) {
  return (
    <Button className="mx-2" inverted onClick={onQuantityChange}>
      <AddCircleOutlineOutlinedIcon fontSize={fontSize}/>
    </Button>
  );
}

function QuantityValue({ quantity, ...props}) {
  return <span {...props}>{quantity}</span>;
}

function QuantityReset({ onQuantityChange, fontSize='medium' }) {
  return (
    <Button inverted onClick={onQuantityChange}>
      <DeleteIcon fontSize={fontSize} />
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
