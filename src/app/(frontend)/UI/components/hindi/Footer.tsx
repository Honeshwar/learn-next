import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="flex w-full sm:hidden h-[100vw] flex-col mt-7 ">
        <div className="relative w-full h-1/2   top-[-2vw]">
          <Image
            width={1920}
            height={1080}
            className="absolute w-[25vw] left-[27vw] top-[-8vw]"
            src="/assets/footer/hindi/Layer-1.webp"
            alt="maha"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[20vw] right-[28vw] top-[-12vw] "
            src="/assets/footer/Layer 809.webp"
            alt="akhel"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[35vw] left-[20vw] top-[3vw] z-[1] -rotate-12"
            src="/assets/footer/hindi/thug-2.webp"
            alt="thug"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute  w-[35vw] right-[20vw] top-[2.5vw] z-[1]"
            src="/assets/footer/hindi/Layer-11.webp"
            alt="bandhan"
          />

          {/* <!-- wire left --> */}
          <Image
            width={1920}
            height={1080}
            className="absolute  w-[31.5vw] top-[10.5vw] left-0 z-[0]"
            src="/assets/footer/hindi/Layer 4 copy 4.webp"
            alt="wire left"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[10vw] left-[24.5vw] top-[10vw] z-[2]  "
            src="/assets/footer/hindi/Layer 821.webp"
            alt="wire left2"
          />

          {/* <!-- center wire --> */}
          <Image
            width={1920}
            height={1080}
            className="absolute w-[12vw] left-[40.5vw] top-[11vw] z-[2] rotate-[20deg]"
            src="/assets/footer/hindi/Layer 15 copy 2.webp"
            alt="center"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[12vw] left-[40.5vw] top-[8.5vw] z-[0] opacity-50 rotate-[20deg]"
            src="/assets/footer/hindi/Layer 15 copy 2.webp"
            alt="back center"
          />

          {/* <!-- wire right --> */}
          <Image
            width={1920}
            height={1080}
            className="absolute w-[26vw] right-0 top-[10vw] z-[2]"
            src="/assets/footer/hindi/Layer 4 copy 3.webp"
            alt="wire right"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[10vw] right-[14vw] top-[9.7vw] rotate-6  "
            src="/assets/footer/hindi/Layer 15 copy.webp"
            alt="r2"
          />
        </div>

        <div
          className="w-full h-[100%] bg-cover   flex flex-col justify-between pb-2 relative  "
          style={{ backgroundImage: "url('/assets/footer/Bg Footer.webp')" }}
        >
          <div className="w-full h-full flex gap-5 justify-center items-end px-[7vw]   relative  ">
            <div
              className="w-fit  flex flex-col gap-0 justify-center items-center pb-[10vw] relative z-[1]"
              style={{ textShadow: "0 0 2px black" }}
            >
              {/* <!-- <p className=" font-thin text-white text-[3.5vw]">
                    <a className="hover:text-blue-500"  href=""> गोपनीयता नीति  </a>
                    |
                    <a className="hover:text-blue-500"  href=""> अस्वीकरण</a>
                    |
                    <a className="hover:text-blue-500"  href=""> संपर्क करें</a>
                </p>
                --> */}
              <p className="text-[3.5vw] font-thin  text-[rgb(255,255,255)]">
                कॉपीराइट सी 2024{" "}
                <span className="font-extrabold text-[4vw] ">महाठगबंधन</span>
              </p>
              <ul className="flex gap-3 pt-[1vw]">
                {/* <!-- <li>
                    <a className="hover:text-blue-500" href="">
                        <Image
                          width={1920}
                          height={1080}
                        className="w-[6vw] h-[6vw] object-cover"
                        src="/assets/footer/whatsapp Icon.webp"
                        alt=""
                        />
                    </a>
                    </li> --> */}
                <li>
                  <a
                    className="hover:text-blue-500"
                    href="https://www.instagram.com/mahathugbandhan_2019/"
                  >
                    <Image
                      width={1920}
                      height={1080}
                      className="w-[6vw] h-[6vw] object-cover"
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
                      width={1920}
                      height={1080}
                      className="w-[6vw] h-[6vw] object-cover"
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
                      width={1920}
                      height={1080}
                      className="w-[6vw] h-[6vw] object-cover"
                      src="/assets/footer/facebook icon.webp"
                      alt="facebook icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- images --> */}
            <Image
              width={1920}
              height={1080}
              className="absolute w-[27vw] left-[1.82vw] top-[30vw]"
              src="/assets/footer/Layer 808.webp"
              alt="lalu son"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[30vw] left-[20vw] top-[-10vw]"
              src="/assets/footer/Layer 810.webp"
              alt="Rahul gandhi"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[25vw] right-[3vw] top-[50vw]"
              src="/assets/footer/Layer 806.webp"
              alt="stalin"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[22vw] right-[20vw]  top-[0vw]"
              src="/assets/footer/Layer 803.webp"
              alt="Soni gandhi"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[15vw] right-[2vw] top-[18vw]"
              src="/assets/footer/Mamata44 copy.webp"
              alt="Mamata44"
            />
          </div>
        </div>
      </footer>
      {/* <!-- footer for other devices, bg-contain --> */}
      <footer className="hidden w-full sm:flex h-[45vw] flex-col mt-7  ">
        <div className="relative w-full h-1/2   top-[-2vw]">
          <Image
            width={1920}
            height={1080}
            className="absolute w-[15vw] left-[33vw] top-[-3vw]"
            src="/assets/footer/hindi/Layer-1.webp"
            alt="maha"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[11vw] right-[40vw] top-[-5vw] "
            src="/assets/footer/Layer 809.webp"
            alt="akhel"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[20vw] left-[30vw] top-[3vw] z-[1] -rotate-12"
            src="/assets/footer/hindi/thug-2.webp"
            alt="thug"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute  w-[20vw] right-[35vw] top-[2.5vw] z-[1]"
            src="/assets/footer/hindi/Layer-11.webp"
            alt="bandhan"
          />

          {/* <!-- wire left --> */}
          <Image
            width={1920}
            height={1080}
            className="absolute  w-[38.5vw] top-[7vw] left-0 z-[0]"
            src="/assets/footer/hindi/Layer 4 copy 4.webp"
            alt="wire left"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[10vw] left-[28.5vw] top-[7vw] z-[2]  "
            src="/assets/footer/hindi/Layer 821.webp"
            alt="wire left2"
          />

          {/* <!-- center wire --> */}
          <Image
            width={1920}
            height={1080}
            className="absolute w-[6vw] left-[42vw] top-[8vw] z-[2] rotate-[20deg]"
            src="/assets/footer/hindi/Layer 15 copy 2.webp"
            alt="center"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[6vw] left-[42vw] top-[6.5vw] z-[0] opacity-50 rotate-[20deg]"
            src="/assets/footer/hindi/Layer 15 copy 2.webp"
            alt="back center"
          />

          {/* <!-- wire right --> */}
          <Image
            width={1920}
            height={1080}
            className="absolute w-[39vw] right-0 top-[6vw] z-[2]"
            src="/assets/footer/hindi/Layer 4 copy 3.webp"
            alt="wire right"
          />
          <Image
            width={1920}
            height={1080}
            className="absolute w-[10vw] right-[28vw] top-[6.7vw] rotate-6  "
            src="/assets/footer/hindi/Layer 15 copy.webp"
            alt="r2"
          />
        </div>
        <div
          className="w-full h-[100%] bg-contain   flex flex-col justify-between pb-2 relative   "
          style={{ backgroundImage: "url('/assets/footer/Bg Footer.webp')" }}
        >
          <div className="w-full h-full flex gap-5 justify-between items-end px-[7vw]   relative mt-[2vw]  ">
            <div className="w-full flex gap-5 justify-between items-end px-[7vw]   relative pb-[1vw]  ">
              {/* <!-- footer left  --> */}
              <div className="flex flex-col"></div>

              {/* <!-- footer right  --> */}
              <div className="flex flex-col gap-3 items-center justify-center">
                <h2 className="text-[1.5vw] font-bold text-white">
                  हमारे साथ जुड़ें
                </h2>
                <ul className="flex gap-5">
                  <li>
                    <a
                      className="hover:text-blue-500"
                      href="https://www.instagram.com/mahathugbandhan_2019/"
                    >
                      <Image
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
              width={1920}
              height={1080}
              className="absolute w-[10vw] left-[30vw] top-[8vw]"
              src="/assets/footer/Layer 808.webp"
              alt="lalu son"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[11vw] left-[40.5vw] top-[-3vw]"
              src="/assets/footer/Layer 810.webp"
              alt="Rahul gandhi"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[9vw] left-0 right-0 mx-auto top-[14vw]"
              src="/assets/footer/Layer 806.webp"
              alt="stalin"
            />
            <Image
              width={1920}
              height={1080}
              className="absolute w-[9vw] right-[37vw]  top-[0vw]"
              src="/assets/footer/Layer 803.webp"
              alt="Soni gandhi"
            />
            <Image
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
            कॉपीराइट सी 2024{" "}
            <span className="font-extrabold text-[1.5vw] ">महाठगबंधन</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
