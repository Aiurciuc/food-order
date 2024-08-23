export default function TextArea({ id, label, invalid, ...props }) {


  return (
    <div>
      <label
        className="block text-slate-100 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`${invalid && 'border-red-600'}  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...props}
      ></textarea>
      { invalid && <p className="text-red-500 transition ease-out duration-700 "> Input invalid !</p>}
    </div>
  );
}
