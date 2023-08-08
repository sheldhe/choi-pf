import React, { useEffect } from "react";
import Modal from "react-modal";
import BarLoader from "react-spinners/BarLoader";
import SuccessForm from "components/modal/success-form";
import ErrorForm from "components/modal/erorr-form";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(107, 114, 128, 0.75)",
    zIndex: 60,
  },
  content: {
    width: 400,
    top: 400,
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: 0,
    marginRight: "-50%",
    backgroundColor: "transparent",
    border: "none",
    transform: "translate(-50%, -50%)",
  },
};

const CompleteModal = ({ isLoading, open, onOpen, onClose, isError }) => {
  function closeModal() {
    document.body.style.overflow = "auto";
    onClose();
  }
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
  }, [open]);
  function defaultFunction() {
    return false;
  }
  return (
    <Modal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={defaultFunction}
      style={customStyles}
      contentLabel="success Modal"
    >
      {isLoading ? (
        <div className="flex justify-center">
          <BarLoader color={"rgb(56 189 248)"} />
        </div>
      ) : isError ? (
        <ErrorForm closeModal={closeModal} />
      ) : (
        <SuccessForm closeModal={closeModal} />
      )}
    </Modal>
  );
};

export default CompleteModal;
