import Image from "next/image";
import Link from "next/link";
type bannerData = {
  id: string;
  href: string;
  src: string;
  alt: string;
};
function Banner({ bannerData }: { bannerData: bannerData }) {
  // let data:Object;
  // switch(name){
  //     case "ctm":
  //         data = {
  //             id: "corruption-teller-machine",
  //             href: "./ctm",
  //             src:`/assets/banner/ctm hindi banner.webp`,
  //             alt:"corruption teller machine banner"
  //         }
  //         break;
  //     case "quiz":
  //         data = {
  //             id: "quiz",
  //             href: "./quiz",
  //             src:`/assets/banner/quiz hindi banner.webp`,
  //             alt:"quiz banner"

  //         }
  //         break;
  //     default:
  //         console.log("error while swi")
  // }
  return (
    <section id={bannerData.id} className="w-full">
      <Link href={bannerData.href} className="w-full h-full">
        <Image
          className="w-full h-full "
          src={bannerData.src}
          alt={bannerData.alt}
          style={{ background: "transparent" }}
          width={1920}
          height={1500}
        />
      </Link>
    </section>
  );
}

export default Banner;
