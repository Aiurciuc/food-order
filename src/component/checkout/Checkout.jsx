import { forwardRef, useMemo, useState } from "react";
import { Modal } from "../shared/Modal";
import useCartValue from "../../hooks/useCartValue";
import useFormInput from "../../hooks/useFormInput";

import Button from "../shared/Button";
import FormInput from "../shared/FormInput";
import TextArea from "../shared/TextArea";

const Checkout = forwardRef(function Checkout(_, ref) {
  const { cart } = useCartValue();
  const [formError, setFormError] = useState('');

  const total = useMemo( () => Object.values(cart ?? {})
  .reduce((acc, item) => acc + item.quantity * item.price, 0)
  .toFixed(2),
  [cart]
);


  const {
    value: nameValue,
    touched: nameTouched,
    handleOnBlur: handleNameOnBlur,
    handleOnValueChange: handleOnNameValueChange,
  } = useFormInput("");
  const {
    value: emailValue,
    touched: emailTouched,
    handleOnBlur: handleEmailOnBlur,
    handleOnValueChange: handleOnEmailValueChange,
  } = useFormInput("");
  const {
    value: addressValue,
    touched: addressTouched,
    handleOnBlur: handleAddressOnBlur,
    handleOnValueChange: handleOnAddressValueChange,
  } = useFormInput("");
  const {
    value: cityValue,
    touched: cityTouched,
    handleOnBlur: handleCityOnBlur,
    handleOnValueChange: handleOnCityValueChange,
  } = useFormInput("");

  function handleClose() {
    ref.current.close();
  }

  async function handleSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const customer = Object.fromEntries(formData.entries());
    const order = {
      customer,
      order: cart
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST", 
      body: JSON.stringify({order}),
      headers: myHeaders
    })
    const data = await response.json();
    if(response.ok) {
      ref.current.close();
    } else {
      setFormError(data.message);
    }
    
  }

  const formInvalid = !nameValue || !emailValue || !emailValue.includes("@") || !addressValue || !cityValue;

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Root ref={ref}>
        <Modal.Header title="Checkout" handleClose={handleClose} />
        <Modal.Body>
          <div className=" flex flex-col gap-4">
            <FormInput
              label="Name"
              id="name"
              name="name"
              type="text"
              invalid={nameTouched && !nameValue}
              onBlur={handleNameOnBlur}
              onChange={handleOnNameValueChange}
              autoComplete="name"
            />
            <FormInput
              label="Email"
              id="email"
              name="email"
              type="email"
              onBlur={handleEmailOnBlur}
              invalid={emailTouched && (!emailValue || !emailValue.includes("@"))}
              onChange={handleOnEmailValueChange}
              autoComplete="email"
            />
            <div className="flex gap-2">
              <FormInput
                label="Street Address"
                id="address"
                name="address"
                type="text"
                onBlur={handleAddressOnBlur}
                onChange={handleOnAddressValueChange}
                invalid={addressTouched && !addressValue}
                autoComplete="shipping street-address address-line1"
              />
              <FormInput
                label="City"
                id="city"
                name="city"
                type="text"
                onBlur={handleCityOnBlur}
                onChange={handleOnCityValueChange}
                invalid={cityTouched && !cityValue}
                autoComplete="shipping street-address address-line2"
              />
            </div>

            <TextArea
              label="Other notes"
              id="notes"
              name="notes"
              type="text"
            />
          </div>
          <span className="text-yellow-500">Total: ${total}</span>
          {formError && <span className="text-red-500">{formError}</span>}
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" inverted onClick={handleClose}>
            Close
          </Button>

          <Button disabled={formInvalid}> Submit </Button>
        </Modal.Footer>
      </Modal.Root>
    </form>
  );
});

export default Checkout;
