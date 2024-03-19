"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
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

export default function EnglishPage() {
  const { isMobile } = useAppContext();

  // const HeaderComponent = dynamic(() => import("../Header"));
  const PledgeCounterComponent = dynamic(() => import("../PledgeCounter"));
  const AchievementComponent = dynamic(() => import("../Achievement"));
  const BannerComponent = dynamic(() => import("../Banner"), {
    ssr: false,
  });
  const SpinTheWheelComponent = dynamic(() => import("../SpinTheWheel"));
  const MemeBankComponent = dynamic(() => import("../MemeBank"), {
    ssr: false,
  });
  const ThugTalesComponent = dynamic(() => import("../ThugTales"));
  const MediaCoverageComponent = dynamic(() => import("../MediaCoverage"));
  // const [delay, setDelay] = useState(false);
  // useEffect(() => {
  //   // if (window.screen.width <= 640) {
  //   //   setIsMobile(true);
  //   // } else {
  //   //   setIsMobile(false);
  //   // }

  //   setTimeout(() => {
  //     setDelay(true);
  //   }, 0);
  // }, []);
  return (
    <>
      {/* <Suspense
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
      > */}
      <Header isMobile={isMobile} lang="en" />
      {/* </Suspense> */}
      {/* {delay ? ( */}
      <>
        <Suspense fallback={<PledgeCounterSkeleton />}>
          <PledgeCounterComponent lang="en" />
        </Suspense>
        <Suspense fallback={<AchievementSkeleton />}>
          <AchievementComponent title="OUR ACHIEVEMENTS" lang="en" />
        </Suspense>
        <Suspense fallback={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}>
          <BannerComponent section_name="ctm" lang="en" />
        </Suspense>
        <Suspense fallback={<ChoosePMSkeleton />}>
          <SpinTheWheelComponent lang="en" />
        </Suspense>
        <Suspense
          fallback={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
        >
          <BannerComponent section_name="quiz" lang="en" />
        </Suspense>
        <Suspense fallback={<MemeSkeleton />}>
          <MemeBankComponent lang="en" />
        </Suspense>

        <Suspense fallback={<ThugTalesSkeleton />}>
          <ThugTalesComponent title="OUR THUG TALES" lang="en" />
        </Suspense>
        <Suspense fallback={<MediaCoverageSkeleton />}>
          <MediaCoverageComponent title="Media Coverage" lang="en" />
        </Suspense>
      </>
      {/* ) : (
        <>
          <PledgeCounterSkeleton />
          <AchievementSkeleton />
          <BannerSkeleton src="/assets/skeleton/ctm.webp" />
          <ChoosePMSkeleton />
          <BannerSkeleton src="/assets/skeleton/quiz.webp" />
          <MemeSkeleton />
          <ThugTalesSkeleton />
          <MediaCoverageSkeleton />
        </> */}
      {/* )} */}
    </>
  );
}
