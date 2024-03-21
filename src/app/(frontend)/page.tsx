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
import TeaserVideo from "./components/TeaserVideo";
import ScrollAware from "./components/ScrollAware";
const LazyPledgeCounter = dynamic(() => import("./components/PledgeCounter"));
const LazyAchievement = dynamic(() => import("./components/Achievement"));
const LazyBanner = dynamic(() => import("./components/Banner"));
const LazySpinTheWheel = dynamic(() => import("./components/SpinTheWheel"));
const LazyMemeBank = dynamic(() => import("./components/MemeBank"));
const LazyThugTales = dynamic(() => import("./components/ThugTales"));
const LazyMediaCoverage = dynamic(() => import("./components/MediaCoverage"));
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
      {/* <TeaserVideo lang="hi" isMobile={isMobile} /> */}
      {/* <Suspense fallback={<div></div>}> */}
      <Header isMobile={isMobile} lang="hi" />
      {/* </Suspense> */}

      {/* <PledgeCounterComponent lang="hi" />
      <AchievementComponent title="हमारी उपलब्धियाँ" lang="hi" />
      <BannerComponent section_name="ctm" lang="hi" />
      <SpinTheWheelComponent lang="hi" />
      <BannerComponent section_name="quiz" lang="hi" />
      <MemeBankComponent lang="hi" />
      <ThugTalesComponent title="हमारी ठग की कहानियाँ" lang="hi" />
      <MediaCoverageComponent title="मीडिया कवरेज" lang="hi" /> */}

      <ScrollAware
        lazyComponent={<LazyPledgeCounter lang="hi" />}
        fallbackUI={<PledgeCounterSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyAchievement title="हमारी उपलब्धियाँ" lang="hi" />}
        fallbackUI={<AchievementSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyBanner section_name="ctm" lang="hi" />}
        fallbackUI={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}
      />
      <ScrollAware
        lazyComponent={<LazySpinTheWheel lang="hi" />}
        fallbackUI={<ChoosePMSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyBanner section_name="quiz" lang="hi" />}
        fallbackUI={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
      />
      <ScrollAware
        lazyComponent={<LazyMemeBank lang="hi" />}
        fallbackUI={<MemeSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyThugTales title="हमारी ठग की कहानियाँ" lang="hi" />}
        fallbackUI={<ThugTalesSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyMediaCoverage title="मीडिया कवरेज" lang="hi" />}
        fallbackUI={<MediaCoverageSkeleton />}
      />

      {/* {delay ? ( */}
      {/* <>
        <Suspense fallback={<PledgeCounterSkeleton />}>
          <PledgeCounterComponent lang="hi" />
        </Suspense>
        <Suspense fallback={<AchievementSkeleton />}>
          <AchievementComponent title="हमारी उपलब्धियाँ" lang="hi" />
        </Suspense>
        <Suspense fallback={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}>
          <BannerComponent section_name="ctm" lang="hi" />
        </Suspense>
        <Suspense fallback={<ChoosePMSkeleton />}>
          <SpinTheWheelComponent lang="hi" />
        </Suspense>
        <Suspense
          fallback={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
        >
          <BannerComponent section_name="quiz" lang="hi" />
        </Suspense>
        <Suspense fallback={<MemeSkeleton />}>
          <MemeBankComponent lang="hi" />
        </Suspense>
        <Suspense fallback={<ThugTalesSkeleton />}>
          <ThugTalesComponent title="हमारी ठग की कहानियाँ" lang="hi" />
        </Suspense>
        <Suspense fallback={<MediaCoverageSkeleton />}>
          <MediaCoverageComponent title="मीडिया कवरेज" lang="hi" />
        </Suspense>
      </> */}
      {/* ) : ( */}
      <>
        {/* <PledgeCounterSkeleton />
        <AchievementSkeleton />
        <BannerSkeleton src="/assets/skeleton/ctm.webp" />
        <ChoosePMSkeleton />
        <BannerSkeleton src="/assets/skeleton/quiz.webp" />
        <MemeSkeleton />
        <ThugTalesSkeleton />
        <MediaCoverageSkeleton /> */}
        {/* <FooterSkeleton /> */}
      </>
      {/* )} */}
    </>
  );
}
