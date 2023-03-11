import Modal from "react-modal";
import {ReactNode} from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    maxWidth: "100%",
    height: "600px",
    maxHeight: "100%",
    borderRadius: "12px",
    boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.04)",
    padding: "40px 40px 32px",
    overflow: "auto",
    "&:focus-visible": {
      outline: "none",
    },
  },
};

type Props = {
  isOpen: boolean;
  children: ReactNode;
};
export const ModalContainer = (
  {isOpen, children}: Props,
) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};