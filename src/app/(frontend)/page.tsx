"use client";
// import Banner from "./UI/components/Banner";
// import Achievement from "./UI/components/hindi/Achievement";
import { Suspense, useState, useEffect } from "react";
import Header from "./UI/components/hindi/Header";
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
} from "./UI/components/skeleton/Skeleton";

// const HeaderComponent = dynamic(() => import('./UI/components/hindi/Header'), {
//   loading: () => <p>Loading...</p>,
//  });

const PledgeCounterComponent = dynamic(
  () => import("./UI/components/hindi/PledgeCounter"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const AchievementComponent = dynamic(
  () => import("./UI/components/hindi/Achievement"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const BannerComponent = dynamic(() => import("./UI/components/Banner"), {
  // loading: () => <p>Loading...</p>,
});
const SpinTheWheelComponent = dynamic(
  () => import("./UI/components/hindi/SpinTheWheel"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const MemeBankComponent = dynamic(
  () => import("./UI/components/hindi/MemeBank"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const MediaCoverageComponent = dynamic(
  () => import("./UI/components/hindi/MediaCoverage"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const ThugTalesComponent = dynamic(
  () => import("./UI/components/hindi/ThugTales"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
export default function HindiPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    if (window.screen.width <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    setTimeout(() => {
      setDelay(true);
    }, 1000);
  }, []);
  console.log("isMobile", isMobile);
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Header isMobile={isMobile} />
      </Suspense>

      {delay ? (
        <>
          <Suspense fallback={<PledgeCounterSkeleton />}>
            <PledgeCounterComponent />
          </Suspense>
          <Suspense fallback={<AchievementSkeleton />}>
            <AchievementComponent />
          </Suspense>
          <Suspense
            fallback={<BannerSkeleton src="/assets/skeleton/ctm.webp" />}
          >
            <BannerComponent
              bannerData={{
                id: "corruption-teller-machine",
                href: "./ctm",
                src: "/assets/banner/ctm hindi banner.webp",
                alt: "corruption teller machine banner",
              }}
            />
          </Suspense>
          <Suspense fallback={<ChoosePMSkeleton />}>
            <SpinTheWheelComponent />
          </Suspense>
          <Suspense
            fallback={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}
          >
            <BannerComponent
              bannerData={{
                id: "quiz",
                href: "./quiz",
                src: "/assets/banner/quiz hindi banner.webp",
                alt: "quiz banner",
              }}
            />
          </Suspense>
          <Suspense fallback={<MemeSkeleton />}>
            <MemeBankComponent title="मीम बैंक" />
          </Suspense>
          <Suspense fallback={<ThugTalesSkeleton />}>
            <ThugTalesComponent title="हमारी ठग की कहानियाँ" lang="hindi" />
          </Suspense>
          <Suspense fallback={<MediaCoverageSkeleton />}>
            <MediaCoverageComponent title="मीडिया कवरेज" lang="hindi" />
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
          {/* <FooterSkeleton /> */}
        </>
      )}
    </>
  );
}
