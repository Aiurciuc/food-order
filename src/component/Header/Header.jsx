
import useCartValue from "../../hooks/useCartValue";
import Button from "../shared/Button";
import Logo from "./Logo";
import Title from "./Title";

export default function Header({ handleCartClick}) {

  const {cart}=useCartValue()

  const quantity = Object.values(cart ?? {}).reduce(
    (sum, itemNumber) => (sum += itemNumber.quantity),
    0
  );

  return (
    <header className="flex justify-between items-center px-2 py-1 bg-slate-900">
      <Title>
        <Logo />
        Order App
      </Title>

      <Button onClick={handleCartClick} inverted={true}>Cart ({quantity})</Button>
    </header>
  );
}
