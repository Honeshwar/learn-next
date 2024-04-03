import clsx from "clsx";
import Image from "next/image";
import { useAppContext } from "../context/appContext";
import dynamic from "next/dynamic";
import FooterForMobile from "./footer/FooterForMobile";
import FooterForDesktop from "./footer/FooterForDesktop";

const LazyFooterForMobile = dynamic(() => import("./footer/FooterForMobile"), {
  ssr: false,
});
const LazyFooterForDesktop = dynamic(
  () => import("./footer/FooterForDesktop"),
  { ssr: false }
);
function Footer({ lang }: { lang: string }) {
  const { isMobile } = useAppContext();
  return (
    <>
      {/* for Mobile */}
      {isMobile && <FooterForMobile lang={lang} />}
      {/* <!-- footer for other devices, bg-contain --> */}
      {isMobile === false && <FooterForDesktop lang={lang} />}
    </>
  );
}

export default Footer;
