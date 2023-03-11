import Modal from "react-modal";
import {ReactNode} from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  width?: number;
  height?: number;
};
export const ModalContainer = (
  {isOpen, children, width, height}: Props,
) => {
  width = width ? width : 800;
  height = height ? height : 600;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: width,
      maxWidth: "100%",
      height: height,
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