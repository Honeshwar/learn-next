"use client";
// import Banner from "./UI/components/Banner";
// import Achievement from "./UI/components/hindi/Achievement";
import { Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
// import MediaCoverage from "./UI/components/hindi/MediaCoverage";
// import MemeBank from "./UI/components/hindi/MemeBank";
// import PledgeCounter from "./UI/components/hindi/PledgeCounter";
// import SpinTheWheel from "./UI/components/hindi/SpinTheWheel";
// import ThugTales from "./UI/components/hindi/ThugTales";

import dynamic from "next/dynamic";
import {
  AchievementSkeleton,
  BannerSkeleton,
  ChoosePMSkeleton,
  // FooterSkeleton,
  MediaCoverageSkeleton,
  MemeSkeleton,
  PledgeCounterSkeleton,
  ThugTalesSkeleton,
} from "./components/skeleton/Skeleton";
import { useAppContext } from "./context/appContext";

// const HeaderComponent = dynamic(() => import('./UI/components/hindi/Header'), {
//   loading: () => <p>Loading...</p>,
//  });

const PledgeCounterComponent = dynamic(
  () => import("./components/PledgeCounter"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const AchievementComponent = dynamic(() => import("./components/Achievement"), {
  // loading: () => <p>Loading...</p>,
});
const BannerComponent = dynamic(() => import("./components/Banner"), {
  // loading: () => <p>Loading...</p>,
});
const SpinTheWheelComponent = dynamic(
  () => import("./components/SpinTheWheel"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const MemeBankComponent = dynamic(() => import("./components/MemeBank"), {
  // loading: () => <p>Loading...</p>,
});
const MediaCoverageComponent = dynamic(
  () => import("./components/MediaCoverage"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const ThugTalesComponent = dynamic(() => import("./components/ThugTales"), {
  // loading: () => <p>Loading...</p>,
});
export default function HindiPage() {
  const { isMobile } = useAppContext();
  // const [isMobile, setIsMobile] = useState(false);
  // const [delay, setDelay] = useState(false);
  // useEffect(() => {
  //   // if (window.screen.width <= 640) {
  //   //   setIsMobile(true);
  //   // } else {
  //   //   setIsMobile(false);
  //   // }

  //   setTimeout(() => {
  //     setDelay(true);
  //   }, 3000);
  // }, []);
  console.log("isMobile", isMobile);
  return (
    <>
      {/* <Suspense fallback={<div></div>}> */}
      <Header isMobile={isMobile} lang="hi" />
      {/* </Suspense> */}

      {/* {delay ? ( */}
      <>
        {/* <Suspense fallback={<PledgeCounterSkeleton />}> */}
        <PledgeCounterComponent lang="hi" key={"counter"} />
        {/* </Suspense> */}
        {/* <Suspense fallback={<AchievementSkeleton />}> */}
        <AchievementComponent title="हमारी उपलब्धियाँ" lang="hi" />
        {/* </Suspense> */}
        {/* <Suspense fallback={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}> */}
        <BannerComponent section_name="ctm" lang="hi" />
        {/* </Suspense> */}
        {/* <Suspense fallback={<ChoosePMSkeleton />}> */}
        <SpinTheWheelComponent lang="hi" />
        {/* </Suspense> */}
        {/* <Suspense
          fallback={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
        > */}
        <BannerComponent section_name="quiz" lang="hi" />
        {/* </Suspense> */}
        {/* <Suspense fallback={<MemeSkeleton />}> */}
        <MemeBankComponent lang="hi" />
        {/* </Suspense> */}
        {/* <Suspense fallback={<ThugTalesSkeleton />}> */}
        <ThugTalesComponent title="हमारी ठग की कहानियाँ" lang="hi" />
        {/* </Suspense> */}
        {/* <Suspense fallback={<MediaCoverageSkeleton />}> */}
        <MediaCoverageComponent title="मीडिया कवरेज" lang="hi" />
        {/* </Suspense> */}
      </>
      {/* ) : ( */}
      <>
        <PledgeCounterSkeleton />
        <AchievementSkeleton />
        <BannerSkeleton src="/assets/skeleton/ctm.webp" />
        <ChoosePMSkeleton />
        <BannerSkeleton src="/assets/skeleton/quiz.webp" />
        <MemeSkeleton />
        <ThugTalesSkeleton />
        <MediaCoverageSkeleton />
        {/* <FooterSkeleton /> */}
      </>
      {/* )} */}
    </>
  );
}
