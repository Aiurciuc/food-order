import { forwardRef } from "react";
import Button from "../shared/Button";
import CloseIcon from "@mui/icons-material/Close";

const ModalRoot = forwardRef(function ModalRoot(props, ref) {

  const { children, className, ...allProps } = props;
  return (
    <dialog
      className={`backdrop:bg-black/50 animate-upTranslate w-2/5 bg-slate-800 text-slate-200 p-4 rounded-3xl open:grid grid-rows-6 ${className}`}
      ref={ref}
      {...allProps}
    >
      {children}
    </dialog>
  );
});

function ModalHeader({ title, handleClose }) {
  return (
    <section className="flex justify-between items-center  row-span-1">
      <h1 className="text-2xl font-semibold tracking-normal uppercase text-yellow-500">
        {title}
      </h1>
      <Button inverted={true} onClick={handleClose}>
        <CloseIcon />
      </Button>
    </section>
  );
}

function ModalBody({ children, className }) {
  return <section className={`overflow-auto row-span-4 ${className}`}>{children}</section>;
}

function ModalFooter({ children }) {
  return  <section className="flex justify-end items-center gap-4 py-2 row-span-1">
    {children}
  </section>;
}

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
}
