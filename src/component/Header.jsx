import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2 py-1 bg-slate-900">
      <h1 className="flex gap-4 items-center text-2xl font-semibold tracking-normal uppercase text-yellow-500">
        <img
          className="w-16 h-16 object-contain rounded-full border-2 border-solid border-yellow-500"
          src={logo}
        ></img>
        Order App
      </h1>
    </header>
  );
}
