import Image from "next/image";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";

export default function MemeImage({
  image,
}: // setSlideChanged,
{
  image: any;
  // setSlideChanged: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // not use this because we do generate links onclick
  // useEffect(() => {
  //   if (slideChanged) {
  //     generateShareLinks();
  //     setSlideChanged(false);
  //   }
  // }, [slideChanged]);
  const { isMobile } = useAppContext();
  return (
    <>
      <Image
        loading="lazy"
        className="w-full h-full "
        width={isMobile ? 300 : 400}
        height={isMobile ? 400 : 500}
        src={image.src}
        alt="meme card"
        data-url={image["data-url"]}
        placeholder="blur"
        blurDataURL={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII="
        }
      />
    </>
  );
}
