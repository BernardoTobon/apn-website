import { useState } from "react";

const Accordion = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="border-4 border-F-G w-[95vw] rounded-lg">
        <div className="flex justify-end" onClick={() => setIsOpen(!isOpen)}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`${isOpen ? "rotate-180" : "rotate-0"}
    w-8 h-8 text-D-G transition-transform duration-500 ease-in-out`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? "max-h-[500px]" : "max-h-[0px]"}
        overflow-auto transition-all duration-500 ease-in-out`}>
            <div className="flex justify-center mb-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
