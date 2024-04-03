import React, { useState } from "react";
import { upload_count } from "../../utils/common-functions";
import dynamic from "next/dynamic";
import clsx from "clsx";

export default function UploadModal({
  lang,
  setopenUploadMemeModal,
  setOpenThankYouModal,
}: {
  lang: string;
  setopenUploadMemeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenThankYouModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [uploadfileName, setUploadfileName] = useState(
    lang === "en" ? "Click Here to Upload" : "फ़ाइल चयन करें"
  );
  const [uploadFileError, setUploadFileError] = useState(false);
  const previewFile = (e: any) => {
    setUploadFileError(false);
    console.log("preview", e.target.files[0]);
    setUploadfileName(e.target.files[0].name);
  };

  const uploadMeme = (e: any) => {
    e.preventDefault();
    console.log("ip", e.target[0].files, e.target[0].files.length === 0);
    if (e.target[0].files.length === 0) {
      //error
      setUploadFileError(true);
      return;
    }

    let body = new FormData();
    body.append("image", e.target[0].files[0]);
    fetch("https://mahathugbandhan.com/api/v1/upload_image/", {
      method: "POST",
      body,
    })
      .then((r) => r.json())
      .then((d) => {
        console.log("uploaded", d);
        if (d.status === 200) {
          upload_count();
          setopenUploadMemeModal(false);
          setOpenThankYouModal(true);
          // uploadfileName.innerText =
          //   lang === "en" ? "Click Here to Upload" : "फ़ाइल चयन करें";
          setUploadfileName(
            lang === "en" ? "Click Here to Upload" : "फ़ाइल चयन करें"
          );
          e.target[0].value = "";
        }
      });
  };

  return (
    <>
      <div
        id="upload-meme-modal"
        className=" flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
        style={{ backgroundColor: "#181844c0" }}
      >
        <div tabIndex={-1} className="h-full flex justify-center items-center">
          <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
            <div className="relative bg-yellow-600 rounded-lg shadow ">
              <div className="p-10 md:p-20 text-center flex gap-2 md:gap-5 flex-col items-center">
                <h3
                  className={clsx(" text-[2rem]  text-white", {
                    "font-yatra": lang === "hi",
                    "font-dangerous": lang === "en",
                  })}
                >
                  {lang === "en" ? "Upload Meme" : "अपलोड मीम्स"}
                </h3>

                <form
                  onSubmit={uploadMeme}
                  id=""
                  className="flex flex-col gap-5 justify-center items-center flex-wrap pb-0 md:pb-9"
                >
                  {/* <!-- <input className="block w-full  max-w-[300px] text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="large_size" type="file" required placeholder="फ़ाइल चयन करें"> --> */}
                  <div className="w-full">
                    <label
                      htmlFor="upload-file"
                      id="upload-file-name"
                      className="text-black bg-white font-yatra text-center border-2 py-4 border-blue-500 rounded-md flex flex-col gap-3 justify-center items-center px-2"
                    >
                      <span className="material-symbols-outlined text-blue-600">
                        cloud_upload
                      </span>
                      <span className="text-blue-600" id="file-name">
                        {/* फ़ाइल चयन करें */}
                        {uploadfileName}
                      </span>
                    </label>
                    <input
                      id="upload-file"
                      style={{ display: "none" }}
                      type="file"
                      onChange={previewFile}
                    />
                  </div>
                  <div
                    style={{
                      display: " flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {uploadFileError && (
                      <p
                        id="upload-file-error"
                        style={{
                          display: "block",
                          color: "red",
                          textAlign: "center",
                          marginBlock: "-5px 5px",
                        }}
                      >
                        {lang === "en"
                          ? "Please select a file"
                          : "एक छवि चुनें"}
                      </p>
                    )}
                    <button
                      type="submit"
                      className={clsx(
                        "max-w-[250px] px-3 pl-2 py-1 pt-[6px] sm:w-fit sm:px-5 bg-blue-950 text-yellow-500 flex justify-center items-center gap-2 font-bold  rounded-md cursor-pointer  text-[1.2rem] sm:text-[1.5rem] text-center ",
                        {
                          "font-yatra ": lang === "hi",
                          "text-[1rem] sm:text-[1.3rem]": lang === "en",
                        }
                      )}
                    >
                      {lang === "en" ? "Upload" : " अपने मीम्स अपलोड करें"}
                    </button>
                  </div>
                </form>
                {/* <!-- <button
                onclick="closeUploadMemeModal(event)"
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-3"
              >
              बंद करें
              </button> --> */}
                <span
                  onClick={() => setopenUploadMemeModal(false)}
                  className="material-symbols-outlined text-red-700 text-[7vw]   sm:text-[4vw] md:text-[2.5rem] absolute right-5 top-5 cursor-pointer"
                >
                  cancel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
