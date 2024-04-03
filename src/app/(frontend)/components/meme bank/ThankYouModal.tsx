import React from "react";

export default function ThankYouModal({ lang, setOpenThankYouModal }: any) {
  return (
    <div
      id="thank-you-meme-modal"
      className=" flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
      style={{ backgroundColor: "#181844c0" }}
    >
      <div tabIndex={-1} className="h-full flex justify-center items-center">
        <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
          <div className="relative bg-yellow-600 rounded-lg shadow -mt-20 ">
            <div className="p-10 md:p-20 text-center flex gap-5 flex-col items-center relative ">
              <h3 className="text-[1.5rem] sm:text-[2.5rem] font-yatra text-white">
                {lang === "hi"
                  ? "इमेज अपलोड करने के लिए धन्यवाद"
                  : "Thanks for uploading The Meme"}
              </h3>
              <span
                onClick={() => {
                  setOpenThankYouModal(false);
                }}
                className="material-symbols-outlined text-red-700 text-[7vw]   sm:text-[4vw] md:text-[2.5rem] absolute right-5 top-5 cursor-pointer"
              >
                cancel
              </span>
              {/* <!-- <button
        onclick="closeThankYouMemeModal(event)"
        data-modal-hide="popup-modal"
        type="button"
        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-3"
      >
      Close
      </button> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
