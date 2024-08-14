import logo from "../../assets/logo.jpg";

export default function Logo() {
  return (
    <img
      className="w-16 h-16 object-contain rounded-full border-2 border-solid border-yellow-500"
      src={logo}
    ></img>
  );
}
