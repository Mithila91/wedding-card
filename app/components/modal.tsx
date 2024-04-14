import { CircleCheckBig, CircleAlert } from "lucide-react";
type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSuccess: boolean;
};

function Modal({ isOpen, setIsOpen, isSuccess }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed px-4 left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center">
          <div className="bg-white m-auto p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              {isSuccess ? (
                <span className="flex  items-center ">
                  <CircleCheckBig color="green" size={48} />
                  <p>Email sent successfully!</p>
                </span>
              ) : (
                <span className="flex justify-center items-center">
                  <CircleAlert className="pr-4" color="red" size={48} />
                  <p>Error sending email. Please try again.</p>
                </span>
              )}
              <br />
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="bg-red-500 text-black p-2"
              >
                Close X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
