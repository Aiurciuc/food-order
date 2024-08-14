import CartButton from "./CartButton";
import Logo from "./Logo";
import Title from "./Title";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2 py-1 bg-slate-900">
      <Title>
        <Logo />
        Order App
      </Title>

      <CartButton/>
    </header>
  );
}
