import { forwardRef } from "react";
import Button from "../shared/Button";
import CloseIcon from "@mui/icons-material/Close";

const ModalRoot = forwardRef(function ModalRoot(props, ref) {
  // @ts-ignore
  const { children, className, ...allProps } = props;
  return (
    <dialog
      className={`backdrop:bg-gray-50/50 w-2/5 bg-slate-800 text-slate-200 p-4 pb-0 h-2/3 rounded-3xl open:grid grid-rows-12 ${className}`}
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

function ModalBody({ children }) {
  return <section className=" overflow-auto row-span-10">{children}</section>;
}

function ModalFooter({ children }) {
  return  <section className="flex justify-end gap-4 py-2 row-span-1">
    {children}
  </section>;
}

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
}
