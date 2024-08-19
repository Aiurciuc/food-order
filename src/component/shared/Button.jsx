export default function Button({inverted=false, className="", children, ...props  }) {
  let classes;
  if(inverted){
    classes = `text-yellow-500 ${className}`
  } else {
    classes = `bg-yellow-500 text-slate-950 p-2 rounded-xl ${className}`;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
