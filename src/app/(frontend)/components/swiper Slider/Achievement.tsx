import Image from "next/image";

// now this comp become server comp and async add keyword and use async/await not use cliend side things like hooks
export default async function Achievement({
  isMobile,
  src,
  base64,
}: {
  isMobile: boolean;
  src: string;
  base64: string;
}) {
  return (
    <Image
      loading="lazy"
      className="w-full h-fit max-h-[100vh] object-cover"
      width={isMobile ? 500 : 1920}
      height={isMobile ? 1080 : 700}
      src={src}
      alt="Achievement image"
      quality={10}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
