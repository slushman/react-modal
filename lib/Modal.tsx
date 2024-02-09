import { KeyboardEvent, PropsWithChildren, useEffect, useRef } from "react";
import "css.gg/icons/css/close.css";

type Classes = {
  dialog?: string;
  wrapper?: string;
  header?: string;
  title?: string;
  button?: string;
  closeIcon?: string;
};

interface ModalProps {
  classes?: Classes;
  closeButtonAriaLabel?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  type?: "full" | "confirmation" | "standard";
}

export const Modal = ({
  children,
  classes,
  isOpen,
  closeButtonAriaLabel = "Close",
  onClose,
  title = "",
  type = "standard",
}: PropsWithChildren<ModalProps>) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      className={`
        absolute
        backdrop:bg-modal-bg
        border
        duration-200
        ease-in
        flex
        flex-col
        hover:duration-75
        inset-0
        items-center
        justify-center
        ${isOpen ? "opacity-1" : "opacity-0"}
        overflow-hidden
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
        rounded-lg
        text-white
        transition-opacity
        z-50
        ${type === "full" ? "h-screen" : ""}
        ${type === "full" ? "w-screen" : ""}
        ${classes?.dialog}
      `}
      onKeyDown={handleKeyDown}
      ref={modalRef}
    >
      <div
        className={`flex flex-col text-left py-6 px-8 overflow-auto max-w-prose h-full w-full ${classes?.wrapper}`}
      >
        <div
          className={`flex justify-between items-center mb-6 ${classes?.header}`}
        >
          <h1 className={`m-0 ${classes?.title}`}>{title}</h1>
          <button
            autoFocus
            className={`text-3xl flex justify-center items-center p-1 w-11 h-11 ${classes?.button}`}
            onClick={handleCloseModal}
          >
            <i
              aria-hidden="true"
              className={`gg-close align-baseline ${classes?.closeIcon}`}
            />
            <span className="hidden">{closeButtonAriaLabel}</span>
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
};
