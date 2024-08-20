import { memo } from "react";

const Button =  memo(function Button({inverted=false, className="", disabled=false, children, ...props  }) {
  let classes;
  if(inverted){
    classes = `text-yellow-500 ${className}`
  } else {
    classes = `hover:bg-yellow-300 bg-yellow-500 text-slate-950 p-2 rounded-xl ${className}`;
  }

  if (disabled) {
    classes = `disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed ${classes}`
  }

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
})

export default Button;
