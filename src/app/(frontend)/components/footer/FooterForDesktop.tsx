import clsx from "clsx";
import Image from "next/image";

export default function FooterForDesktop({ lang = "hi" }: { lang: string }) {
  return (
    <footer className="hidden w-full sm:flex h-[45vw] flex-col mt-7  ">
      {lang === "hi" ? (
        <div className="relative w-full h-1/2   top-[-2vw]">
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[15vw] left-[33vw] top-[-3vw]"
            src="/assets/footer/hi/Layer-1.webp"
            alt="maha"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[11vw] right-[40vw] top-[-5vw] "
            src="/assets/footer/Layer 809.webp"
            alt="akhel"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[20vw] left-[30vw] top-[3vw] z-[1] -rotate-12"
            src="/assets/footer/hi/thug-2.webp"
            alt="thug"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute  w-[20vw] right-[35vw] top-[2.5vw] z-[1]"
            src="/assets/footer/hi/Layer-11.webp"
            alt="bandhan"
          />

          {/* <!-- wire left --> */}
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute  w-[38.5vw] top-[7vw] left-0 z-[0]"
            src="/assets/footer/hi/Layer 4 copy 4.webp"
            alt="wire left"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[10vw] left-[28.5vw] top-[7vw] z-[2]  "
            src="/assets/footer/hi/Layer 821.webp"
            alt="wire left2"
          />

          {/* <!-- center wire --> */}
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[6vw] left-[42vw] top-[8vw] z-[2] rotate-[20deg]"
            src="/assets/footer/hi/Layer 15 copy 2.webp"
            alt="center"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[6vw] left-[42vw] top-[6.5vw] z-[0] opacity-50 rotate-[20deg]"
            src="/assets/footer/hi/Layer 15 copy 2.webp"
            alt="back center"
          />

          {/* <!-- wire right --> */}
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[39vw] right-0 top-[6vw] z-[2]"
            src="/assets/footer/hi/Layer 4 copy 3.webp"
            alt="wire right"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[10vw] right-[28vw] top-[6.7vw] rotate-6  "
            src="/assets/footer/hi/Layer 15 copy.webp"
            alt="r2"
          />
        </div>
      ) : (
        <div className="relative w-full h-1/2   top-[2vw]">
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute h-fit w-[10vw] left-[38vw] top-[1.2vw]"
            src="/assets/footer/en/Edition-1.webp"
            alt="maha"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute h-fit w-[10vw] right-[41vw] top-[-2vw] "
            src="/assets/footer/Layer 809.webp"
            alt="akhel"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute h-fit w-[10vw] left-[38vw] top-[5.5vw] z-[1]"
            src="/assets/footer/en/Edition.webp"
            alt="thug"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute h-fit  w-[16vw] right-[36.5vw] top-[4.5vw] z-[1]"
            src="/assets/footer/en/Edition copy.webp"
            alt="bandhan"
          />

          {/* <!-- wire left -- /> */}
          <Image
            priority={true}
            width={700}
            height={120}
            className="absolute h-fit  w-[40.5vw] top-[7.3vw] left-0 z-[2]"
            src="/assets/footer/en/Layer 4 copy 4.webp"
            alt="wire left"
            quality={100}
          />
          <Image
            priority={true}
            width={120}
            height={1080}
            className="absolute  h-fit w-[5vw] left-[35vw] top-[7vw]  "
            src="/assets/footer/en/Layer 15 copy 3.webp"
            alt="wire left2"
          />

          {/* <!-- center wire -- /> */}
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute h-fit w-[3vw] left-[46.5vw] top-[7.5vw] z-[2] "
            src="/assets/footer/en/Layer 15 copy 2.webp"
            alt="center"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute h-fit w-[3vw] left-[46.2vw] top-[6.9vw] z-[0] opacity-50 "
            src="/assets/footer/en/Layer 15 copy 2.webp"
            alt="back center"
          />

          {/* <!-- wire right -- /> */}
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute  h-fit w-[40vw] right-0 top-[7.5vw] z-[2]"
            src="/assets/footer/en/Layer 4 copy 3.webp"
            alt="wire right"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute  h-fit w-[7vw] right-[32vw] top-[8.5vw] rotate-12 "
            src="/assets/footer/en/Layer 15 copy.webp"
            alt="r2"
          />
        </div>
      )}
      <div
        className="w-full h-[100%] bg-cover   flex flex-col justify-between  relative   "
        // style={{ backgroundImage: "url('/assets/footer/Bg Footer.web')" }}
      >
        <Image
          priority={true}
          width={900}
          height={300}
          src="/assets/footer/Bg Footer.webp"
          alt="media coverage"
          className="w-full h-full object-cover absolute "
        />
        {/* pb-2 */}
        <Image
          priority={true}
          width={1920}
          height={1080}
          className="w-full h-[100%]   flex flex-col justify-between pb-0 absolute z-0"
          src="/assets/footer/Bg Footer.webp"
          alt="bg"
        />
        <div className="w-full h-full flex gap-5 justify-between items-end px-[7vw]   relative mt-[2vw]  z-10">
          <div className="w-full flex gap-5 justify-between items-end px-[7vw]   relative pb-[1vw]  ">
            {/* <!-- footer left  --> */}
            <div className="flex flex-col"></div>

            {/* <!-- footer right  --> */}
            <div className="flex flex-col gap-3 items-center justify-center">
              <h2 className="text-[1.5vw] font-bold text-white">
                {lang === "hi" ? "हमारे साथ जुड़ें" : "Connect with Us"}
              </h2>
              <ul className="flex gap-5">
                <li>
                  <a
                    className="hover:text-blue-500"
                    href="https://www.instagram.com/mahathugbandhan_2019/"
                  >
                    <Image
                      priority={true}
                      width={1920}
                      height={1080}
                      className="w-[3vw] h-[3vw] object-cover"
                      src="/assets/footer/instagram Icon.webp"
                      alt=" Icon.webp"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-500"
                    href="https://www.youtube.com/@mahathugbandhan-3259/featured"
                  >
                    <Image
                      priority={true}
                      width={1920}
                      height={1080}
                      className="w-[3vw] h-[3vw] object-cover"
                      src="/assets/footer/youtube Icon.webp"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-500"
                    href="https://www.facebook.com/mahaTHUGbandhan2019/"
                  >
                    <Image
                      priority={true}
                      width={1920}
                      height={1080}
                      className="w-[3vw] h-[3vw] object-cover"
                      src="/assets/footer/facebook icon.webp"
                      alt="facebook icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- images --> */}
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[10vw] left-[30vw] top-[8vw]"
            src="/assets/footer/Layer 808.webp"
            alt="lalu son"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[11vw] left-[40.5vw] top-[-3vw]"
            src="/assets/footer/Layer 810.webp"
            alt="Rahul gandhi"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[9vw] left-0 right-0 mx-auto top-[14vw]"
            src="/assets/footer/Layer 806.webp"
            alt="stalin"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[9vw] right-[37vw]  top-[0vw]"
            src="/assets/footer/Layer 803.webp"
            alt="Soni gandhi"
          />
          <Image
            priority={true}
            width={1920}
            height={1080}
            className="absolute w-[7vw] right-[15vw] top-[6vw]"
            src="/assets/footer/Mamata44 copy.webp"
            alt="Mamata44"
          />
        </div>
      </div>

      <div className="w-full bg-yellow-500 py-[5px]">
        <p className="text-[1.2vw] font-thin float-end mr-[10vw] text-[rgb(0,0,255)]">
          {lang === "hi" ? "कॉपीराइट सी 2024" : "Copyright C 2024"}
          <span className="font-extrabold text-[1.5vw] ">
            {" "}
            {lang === "hi" ? "महाठगबंधन" : "MAHATHUGBANDHAN"}
          </span>
        </p>
      </div>
    </footer>
  );
}
