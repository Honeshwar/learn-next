"use client";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../context/appContext";
type bannerData = {
  id: string;
  href: string;
  src: string;
  alt: string;
};
function Banner({
  section_name,
  lang = "hi",
}: {
  section_name: string;
  lang: string;
}) {
  let bannerData: bannerData = { id: "", href: "", src: "", alt: "" };
  switch (section_name) {
    case "ctm":
      bannerData = {
        id: "corruption-teller-machine",
        href: lang === "hi" ? "/ctm" : "/en/ctm",
        src: `/assets/banner/ctm_${lang}.webp`,
        alt: "corruption teller machine banner",
      };
      break;
    case "quiz":
      bannerData = {
        id: "quiz",
        href: lang === "hi" ? "/quiz" : "/en/quiz",
        src: `/assets/banner/quiz_${lang}.webp`,
        alt: "quiz banner",
      };
      break;
    default:
      console.log("error while swi");
  }

  const { isMobile } = useAppContext();
  return (
    <section id={bannerData.id} className="w-full h-fit">
      <Link href={bannerData.href} className="w-full h-full">
        <Image
          className="w-full h-fit "
          src={bannerData.src}
          alt={bannerData.alt}
          style={{ background: "transparent" }}
          width={isMobile ? 500 : 1920}
          height={isMobile ? 150 : 400}
          placeholder="blur"
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII="
          }
        />
      </Link>
    </section>
  );
}

export default Banner;
