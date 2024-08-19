
import Button from "../shared/Button";
import Logo from "./Logo";
import Title from "./Title";

export default function Header({numberOfItems, handleCartClick}) {
  return (
    <header className="flex justify-between items-center px-2 py-1 bg-slate-900">
      <Title>
        <Logo />
        Order App
      </Title>

      <Button onClick={handleCartClick} inverted={true}>Cart ({numberOfItems})</Button>
    </header>
  );
}
