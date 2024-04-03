import clsx from "clsx";
import Image from "next/image";
import { image_share_count } from "../../utils/common-functions";
import { useEffect, useState } from "react";

export default function ShareModal({
  lang,
  generateLink,
  setOpenShareModal,
  setGenerateLink,
}: {
  lang: string;
  generateLink: boolean;
  setGenerateLink: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenShareModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [whatsapp_link, setWhatsapp_link] = useState("");
  const [facebook_link, setFacebook_link] = useState("");
  const [twitter_link, setTwitter_link] = useState("");
  const generateShareLinks = () => {
    const imgElement = document.querySelector(
      ".meme-bazar-swiper .swiper-slide-active > img"
    ) as HTMLImageElement;
    const imageUrl = imgElement.getAttribute("data-url");
    console.log(imgElement, imgElement.getAttribute("data-url"));

    let l =
      "https://mahathugbandhan.com/api/v1/image_metamaker?name=" + imageUrl;
    console.log("url", l);
    let link = encodeURIComponent(l);
    let text = "";
    if (lang === "hi") {
      let first = encodeURIComponent("ये देखने के बाद आप भी हंस पड़ेंगे! 😂 ");
      text =
        first +
        link +
        `\n` +
        " पुरी " +
        "https://mahathugbandhan.com/" +
        " देखें!";
    } else {
      let first = encodeURIComponent("This is hilarious! 😂 ");
      let second = encodeURIComponent(" Check out ");
      text = first + link + `\n` + second + "https://mahathugbandhan.com/"; //%0A
    }
    console.log(text);

    // shares links
    let twitter_link =
      "https://twitter.com/intent/tweet?url=" + link + "&text=" + text;
    let facebook_link =
      "http://www.facebook.com/sharer/sharer.php?u=" + link + "&text=" + text;

    let whatsapp_link = "";
    if (screen.width > 750)
      whatsapp_link =
        "https://web.whatsapp.com/send?url=" + link + "&text=" + text;
    else whatsapp_link = "https://wa.me/?url=" + link + "&text=" + text;

    setTwitter_link(twitter_link);
    setFacebook_link(facebook_link);
    setWhatsapp_link(whatsapp_link);

    // setSlideChanged(false);
  };

  useEffect(() => {
    if (generateLink) {
      console.log("share links generated", generateLink);
      generateShareLinks();
      setGenerateLink(false);
    }
  }, [generateLink]);
  return (
    <div
      id="share-modal"
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
      style={{ backgroundColor: "#181844c0" }}
    >
      <div tabIndex={-1}>
        <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
          <div className="relative bg-yellow-600 rounded-lg shadow ">
            <div className="p-10 px-16 md:p-20 text-center">
              <h3
                className={clsx("mb-5 text-[2rem]  text-white", {
                  "font-yatra": lang === "hi",
                  "font-dangerous": lang === "en",
                })}
              >
                {lang === "hi" ? "शेयर" : "Share"}
              </h3>

              <div
                id="share"
                className="flex gap-5 sm:gap-[3vw] justify-center items-center flex-wrap pb-9"
              >
                <div
                  id="result-card-share"
                  className="text-white flex justify-center items-center gap-4 sm:gap-5"
                >
                  <a
                    onClick={image_share_count}
                    className="flex flex-col justify-center items-center gap-2"
                    href={whatsapp_link}
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    <Image
                      width={50}
                      height={50}
                      className="w-fit h-[10vw] sm:h-[50px]"
                      src="/assets/svg/whatsapp.svg"
                      alt="whatsapp logo"
                      placeholder="blur"
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII="
                      }
                    />
                    {/* <span className="text-white font-yatra text-xl">
                  Whatsapp{" "}
                </span> */}
                  </a>
                  <a
                    onClick={image_share_count}
                    className="flex flex-col justify-center items-center gap-2"
                    href={twitter_link}
                    style={{ color: "black" }}
                    target="_blank"
                  >
                    <Image
                      width={100}
                      height={50}
                      className="w-fit h-[10vw] sm:h-[50px]"
                      src="/assets/svg/twt-x-logo.svg"
                      alt="twitter logo"
                      style={{
                        backgroundColor: "black",
                        padding: "3px",
                        borderRadius: "50%",
                      }}
                      placeholder="blur"
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII="
                      }
                    />
                    {/* <span className="text-white font-yatra text-xl">
                  Twitter
                </span> */}
                  </a>
                  <a
                    onClick={image_share_count}
                    className="flex flex-col justify-center items-center gap-2"
                    href={facebook_link}
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    <Image
                      width={100}
                      height={50}
                      className="w-fit h-[10vw] sm:h-[50px]"
                      src="/assets/svg/fb.svg"
                      alt="facebook logo"
                      placeholder="blur"
                      blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII="
                      }
                    />
                    {/* <span className="text-white font-yatra text-xl">
                  Facebook
                </span> */}
                  </a>
                </div>
              </div>
              <button
                onClick={() => setOpenShareModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                className={clsx(
                  "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-base inline-flex items-center px-5  text-center me-2  font-book",
                  {
                    "font-yatra py-1 pt-2": lang === "hi",
                    "font-book py-2": lang === "en",
                  }
                )}
              >
                {lang === "hi" ? "बंद करें" : "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
