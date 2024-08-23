export default function Title({ children }) {
  return (
    <h1 className="flex gap-4 items-center cursor-default text-2xl font-semibold tracking-normal uppercase text-yellow-500">
      {children}
    </h1>
  );
}
