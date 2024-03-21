"use client";
// import Image from "next/image";
// import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useAppContext } from "../../context/appContext";
import {
  AchievementSkeleton,
  BannerSkeleton,
  ChoosePMSkeleton,
  MediaCoverageSkeleton,
  MemeSkeleton,
  PledgeCounterSkeleton,
  ThugTalesSkeleton,
} from "../skeleton/Skeleton";
import Header from "../Header";
// import PledgeCounter from "../PledgeCounter";
import ScrollAware from "../ScrollAware";
// import React, { useEffect, useState } from "react";
import PledgeCounter from "../PledgeCounter";
import Achievement from "../Achievement";
import MediaCoverage from "../MediaCoverage";
import ThugTales from "../ThugTales";
import MemeBank from "../MemeBank";
import Banner from "../Banner";
import SpinTheWheel from "../SpinTheWheel";
export default function EnglishPage() {
  const { isMobile } = useAppContext();

  // const Header = dynamic(() => import("../Header"));
  const LazyPledgeCounter = dynamic(() => import("../PledgeCounter"));
  const LazyAchievement = dynamic(() => import("../Achievement"));
  const LazyBanner = dynamic(() => import("../Banner"));
  const LazySpinTheWheel = dynamic(() => import("../SpinTheWheel"));
  const LazyMemeBank = dynamic(() => import("../MemeBank"));
  const LazyThugTales = dynamic(() => import("../ThugTales"));
  const LazyMediaCoverage = dynamic(() => import("../MediaCoverage"));
  // const [delay, setDelay] = useState(false);
  // useEffect(() => {
  //   // if (window.screen.width <= 640) {
  //   //   setIsMobile(true);
  //   // } else {
  //   //   setIsMobile(false);
  //   // }

  //   setTimeout(() => {
  //     setDelay(true);
  //   }, 100);
  // }, []);

  return (
    <>
      <Header isMobile={isMobile} lang="en" />
      {/* <PledgeCounter lang="en" />

      <Achievement title="OUR ACHIEVEMENTS" lang="en" />
      <Banner section_name="ctm" lang="en" />
      <SpinTheWheel lang="en" />
      <Banner section_name="quiz" lang="en" />
      <MemeBank lang="en" />
      <ThugTales title="OUR THUG TALES" lang="en" />
      <MediaCoverage title="MEDIA COVERAGE" lang="en" /> */}

      {/* {delay && (
      <>
        
      </>
     )} */}
      {/* decrease first load size from 155kb - 106kb */}
      {/* <LazyPledgeCounter lang="en" />
      <LazyAchievement title="OUR ACHIEVEMENTS" lang="en" />
      <LazyBanner section_name="ctm" lang="en" />
      <LazySpinTheWheel lang="en" />
      <LazyBanner section_name="quiz" lang="en" />
      <LazyMemeBank lang="en" />
      <LazyThugTales title="OUR THUG TALES" lang="en" />
      <LazyMediaCoverage title="MEDIA COVERAGE" lang="en" /> */}

      <ScrollAware
        lazyComponent={<LazyPledgeCounter lang="en" />}
        fallbackUI={<PledgeCounterSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyAchievement title="OUR ACHIEVEMENTS" lang="en" />}
        fallbackUI={<AchievementSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyBanner section_name="ctm" lang="en" />}
        fallbackUI={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}
      />
      <ScrollAware
        lazyComponent={<LazySpinTheWheel lang="en" />}
        fallbackUI={<ChoosePMSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyBanner section_name="quiz" lang="en" />}
        fallbackUI={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
      />
      <ScrollAware
        lazyComponent={<LazyMemeBank lang="en" />}
        fallbackUI={<MemeSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyThugTales title="OUR THUG TALES" lang="en" />}
        fallbackUI={<ThugTalesSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyMediaCoverage title="Media Coverage" lang="en" />}
        fallbackUI={<MediaCoverageSkeleton />}
      />
    </>
  );
}

// <>
//   <Header isMobile={isMobile} lang="en" />
{
  /* <PledgeCounter lang="en" /> */
}
{
  /* <ScrollAware
        lazyComponent={<LazyPledgeCounter lang="en" />}
        fallbackUI={<PledgeCounterSkeleton />}
      /> */
}
{
  /* <ScrollAware
        lazyComponent={<LazyAchievement title="OUR ACHIEVEMENTS" lang="en" />}
        fallbackUI={<AchievementSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyBanner section_name="ctm" lang="en" />}
        fallbackUI={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}
      />
      <ScrollAware
        lazyComponent={<LazySpinTheWheel lang="en" />}
        fallbackUI={<ChoosePMSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyBanner section_name="quiz" lang="en" />}
        fallbackUI={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
      />
      <ScrollAware
        lazyComponent={<LazyMemeBank lang="en" />}
        fallbackUI={<MemeSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyThugTales title="OUR THUG TALES" lang="en" />}
        fallbackUI={<ThugTalesSkeleton />}
      />
      <ScrollAware
        lazyComponent={<LazyMediaCoverage title="Media Coverage" lang="en" />}
        fallbackUI={<MediaCoverageSkeleton />}
      />
    </> */
}
{
  /* <> */
}
{
  /* <Suspense
        fallback={
          <div>
            <Image
              width={0}
              height={0}
              src="/assets/skeleton/poster_hd.webp"
              alt="skeleton"
            />
          </div>
        }
      > */
}
{
  /* <Header isMobile={isMobile} lang="en" /> */
}
{
  /* </Suspense> */
}
{
  /* {delay ? (
        <>
          <Suspense fallback={<PledgeCounterSkeleton />}>
            <LazyPledgeCounter lang="en" />
          </Suspense>
          <Suspense fallback={<AchievementSkeleton />}>
            <LazyAchievement title="OUR ACHIEVEMENTS" lang="en" />
          </Suspense>
          <Suspense
            fallback={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}
          >
            <LazyBanner section_name="ctm" lang="en" />
          </Suspense>
          <Suspense fallback={<ChoosePMSkeleton />}>
            <LazySpinTheWheel lang="en" />
          </Suspense>
          <Suspense
            fallback={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
          >
            <LazyBanner section_name="quiz" lang="en" />
          </Suspense>
          <Suspense fallback={<MemeSkeleton />}>
            <LazyMemeBank lang="en" />
          </Suspense>

          <Suspense fallback={<ThugTalesSkeleton />}>
            <LazyThugTales title="OUR THUG TALES" lang="en" />
          </Suspense>
          <Suspense fallback={<MediaCoverageSkeleton />}>
            <LazyMediaCoverage title="Media Coverage" lang="en" />
          </Suspense>
        </>
      ) : (
        <>
          <PledgeCounterSkeleton />
          <AchievementSkeleton />
          <BannerSkeleton src="/assets/skeleton/ctm.webp" />
          <ChoosePMSkeleton />
          <BannerSkeleton src="/assets/skeleton/quiz.webp" />
          <MemeSkeleton />
          <ThugTalesSkeleton />
          <MediaCoverageSkeleton />
        </>
      )}
    </> */
}
