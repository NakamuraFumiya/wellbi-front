import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Props = {
  isOpen: boolean;
};
export const ModalContainer = (
  {isOpen}: Props,
) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>Modalです</h2>
    </Modal>
  );
};