import Image from "next/image"; //image api import png(1mb)-->compress and webp convert
import { useEffect, useState } from "react";

export default function PledgeCounter() {
  const [pledgeCount, setPledgeCount] = useState([]);
  useEffect(() => {
    async function getCount() {
      // Fetch data from an external API
      const res = await fetch(
        "https://mahathugbandhan.com/api/v1/user/get_count"
      );
      const resData = await res.json();

      // Or fetch data from your Next.js API route
      // const res = await fetch('http://localhost:3000/api/users');
      // const users = await res.json();

      // Pass data to the page via props
      const count = resData.total_user;
      console.log(count);
      const countArr = (count + 6_50_00).toString().split("");

      setPledgeCount(countArr);
    }
    getCount();
  }, []);
  return (
    <section id="pledge" className=" overflow-hidden  sm:overflow-visible">
      {/* <!-- Pledge Counter --> */}
      <div
        className="w-full h-fit bg-[#12129e]  pt-[4rem] sm:pt-[5vw]"
        style={{ backgroundColor: "#12129e" }}
      >
        <div className="flex justify-center items-center w-full h-full ">
          <div className="w-[70%] sm:w-fit h-full flex justify-center items-center sm:items-start relative mb-[26px] mt-3 sm:mb-1 sm:mt-4 counter-container">
            <Image
              width={100}
              height={120}
              className="w-fit h-[120px] sm:h-[210px] absolute left-[-53px] sm:left-[-0px] top-[-35px] sm:top-[-65px] z-[10] sm:absolute"
              src="/assets/counter/yadev.webp"
              alt="akhilesh yadev"
            />
            <Image
              width={150}
              height={56}
              className="w-fit h-[56px] sm:h-[100px] absolute left-[35%] sm:left-[40%] top-[-45px] sm:top-[-80px] z-[9]  "
              src="/assets/counter/stalin2.webp"
              alt="stalin"
            />
            {/* <!-- counter --> */}
            <div
              id="counter"
              className="flex items-center w-[100%] sm:w-[70%] h-fit "
            >
              {pledgeCount.map((number, index) => (
                <>
                  {/* box 1 */}
                  <div
                    key={index}
                    className="w-[65px] sm:w-[120px] h-[70px] sm:h-[120px] flex justify-center items-center p-1 mr-[-2px]"
                  >
                    <div className="w-full h-full">
                      <div className="w-full h-full relative">
                        {/* <!-- most outer body  --> */}
                        <Image
                          width={120}
                          height={120}
                          className="w-full h-full"
                          src="/assets/counter/Asset 2.png"
                          alt="container"
                        />
                        <Image
                          width={100}
                          height={100}
                          className="w-full h-full absolute top-[0px] left-[-2px]"
                          src="/assets/counter/Asset 4.png"
                          alt="left top line"
                        />
                        <Image
                          width={100}
                          height={120}
                          className="w-full h-full absolute bottom-[-1px] right-[-2px]"
                          src="/assets/counter/Asset 3.png"
                          alt="right bottom line"
                        />

                        {/* <!-- 2 big piece --> */}
                        <Image
                          width={100}
                          height={120}
                          className=" h-fit absolute z-[4] top-[40%] sm:top-[35.5%] left-[-3px] w-[7%] sm:w-[9%]"
                          src="/assets/counter/Asset 6.png"
                          alt="big joint "
                        />
                        <Image
                          width={100}
                          height={120}
                          className="h-fit absolute z-[4] top-[40%] sm:top-[35.5%] right-[-3px] w-[7%] sm:w-[9%]"
                          src="/assets/counter/Asset 6.png"
                          alt="big joint"
                        />

                        {/* <!-- 2 small picec --> */}
                        <Image
                          width={100}
                          height={120}
                          className="h-fit absolute z-[4] top-[48%] sm:top-[44%] left-1 sm:left-2 w-[7%] sm:w-[10%]"
                          src="/assets/counter/Asset 7.png"
                          alt="down bg"
                        />
                        <Image
                          width={100}
                          height={120}
                          className="h-fit absolute z-[4] top-[48%] right-1 w-[6%] sm:top-[44%] sm:right-2 sm:w-[10%]"
                          src="/assets/counter/Asset 7.png"
                          alt="down bg"
                        />

                        {/* <!-- two red bg --> */}
                        <div className="absolute top-0 h-full w-full p-[2px] pt-[3px] sm:p-1">
                          <div className="relative w-full h-1/2 mb-[.7px]">
                            <Image
                              width={100}
                              height={120}
                              className="w-full absolute z-1 top-0 h-full"
                              src="/assets/counter/Asset 5.png"
                              alt="down bg"
                            />
                          </div>
                          <div className="relative w-full h-1/2">
                            <Image
                              width={100}
                              height={120}
                              className="w-full absolute bottom-0 z-1 h-full"
                              src="/assets/counter/Asset 1.png"
                              alt="red background top"
                            />
                          </div>
                        </div>

                        {/* <!-- number --> */}
                        <div className="absolute w-full h-full z-[1] overflow-hidden flex justify-center items-center top-0 rounded-lg">
                          <span className="counter-text absolute top-[-8.7px] text-[3rem] sm:text-[5rem] sm:top-[-10px] rounded-lg text-white pt-[3px] sm:pt-[5px]">
                            {number}
                          </span>
                        </div>
                        {/* <!-- black line --> */}
                        <Image
                          width={100}
                          height={120}
                          className="absolute z-[3] h-[2px] bg-[#1a1515] w-full top-[50%] sm:h-[3px]"
                          src="/assets/counter/Asset 9.png"
                          alt="red background bottom"
                        />
                        {/* <!-- white line --> */}
                        <div className="absolute overflow-hidden w-full h-full top-0">
                          <Image
                            width={100}
                            height={120}
                            className="absolute top-[-40px] h-[120px] w-full object-cover z-[1] sm:h-[210px] sm:top-[-70px]"
                            src="/assets/counter/Asset 8.png"
                            alt="two white line to set shadow top"
                          />
                          <Image
                            width={100}
                            height={120}
                            className="absolute top-[-40px] h-[120px] w-full object-cover z-[1] sm:h-[210px] sm:top-[-70px]"
                            src="/assets/counter/Asset 8.png"
                            alt="two white line to set shadow center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <Image
              width={100}
              height={100}
              className="w-fit h-[100px] sm:h-[200px] absolute right-[-60px] top-[-10px] z-[10]  sm:top-[-67px] sm:right-[-23px] sm:absolute"
              src="/assets/counter/mamata.webp"
              alt="mamata banerji"
            />
          </div>
        </div>
        {/* <!-- pledge band --> */}
        <div className="h-[25vw] sm:h-auto sm:mt-[1vw] w-full bg-transparent sm:px-[2vw]   ">
          <div className="flex flex-col  justify-center items-center relative h-full w-full ">
            <div className="h-fit w-fit">
              <h1 className="h-fit font-yatra text-[white] text-[10vw] sm:text-[3vw] pt-[1vw]">
                संकल्प लिए जा चुके हैं
              </h1>
            </div>
            <div className="relative flex justify-center items-center py-[2vw] mt-[-20px]">
              <Image
                width={100}
                height={120}
                className="w-fit h-[18vw] sm:h-[11vw] object-cover  bottom-[0vw] left-[.5vw] sm:bottom-[0vw] sm:left-[14.4vw]"
                src="/assets/counter/Sonia1.webp"
                alt="Sonia Gandhi"
              />
              <Image
                width={100}
                height={120}
                className="w-fit h-[18vw] sm:h-[11vw] object-cover  bottom-[0vw] left-[.5vw] sm:bottom-[0vw] sm:left-[14.4vw]"
                src="/assets/counter/Akhilesh1.webp"
                alt="Akhilesh Yadev"
              />
              <Image
                width={100}
                height={120}
                className="w-fit h-[14vw] sm:h-[11vw] object-cover  bottom-[0vw] left-[.5vw] sm:bottom-[0vw] sm:left-[14.4vw]"
                src="/assets/counter/Sharad yadav1.webp"
                alt="Sharad Pawar"
              />
              <Image
                width={100}
                height={120}
                className="w-fit h-[15vw] sm:h-[9vw]  bottom-[0vw] left-[13vw] sm:bottom-[-.2vw] sm:left-[24vw] "
                style={{ transform: "rotateY(180deg)" }}
                src="/assets/counter/Rahul17.webp"
                alt="Rahul Gandhi"
              />
              {/* <!-- <Image 
                  width={100}
                  height={120}
                className="h-[14vw] sm:h-[8vw]  bottom-[.5vw] right-[15vw] sm:bottom-[.4vw] sm:right-[26vw]"
                src="./MTB Main Website Code/Desktop/1 Page Till Pledge counter/WebP/Mamata44.webp"
                alt="mamata"
                /> --> */}
              <Image
                width={100}
                height={120}
                className="w-fit h-[14vw] sm:h-[8vw]  bottom-[.2vw] right-[2vw] sm:bottom-[0vw] sm:right-[15vw]"
                src="/assets/counter/Kejriwal3.webp"
                alt="kejriwal"
              />
              <Image
                width={100}
                height={120}
                className="w-fit h-[14vw] sm:h-[8vw]  bottom-[.5vw] right-[15vw] sm:bottom-[.4vw] sm:right-[26vw]"
                src="/assets/counter/Laloo3.webp"
                alt="laloo yadev"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
