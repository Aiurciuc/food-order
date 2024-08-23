import { useState } from "react"

export default function useFormInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  const [touched,setTouched] = useState(false);


  function handleOnBlur(){
    setTouched(true);
  }

  function handleOnValueChange(event) {
    setValue(event.target.value);
    setTouched(false)
  }

  return {
    value,
    touched,
    handleOnBlur,
    handleOnValueChange
  }
}