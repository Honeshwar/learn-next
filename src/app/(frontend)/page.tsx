"use client";
// import Banner from "./components/Banner";
// import Achievement from "./components/hindi/Achievement";
import { Suspense, useState, useEffect } from "react";
import Header from "./components/hindi/Header";
// import MediaCoverage from "./components/hindi/MediaCoverage";
// import MemeBank from "./components/hindi/MemeBank";
// import PledgeCounter from "./components/hindi/PledgeCounter";
// import SpinTheWheel from "./components/hindi/SpinTheWheel";
// import ThugTales from "./components/hindi/ThugTales";

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

// const HeaderComponent = dynamic(() => import('./components/hindi/Header'), {
//   loading: () => <p>Loading...</p>,
//  });

const PledgeCounterComponent = dynamic(
  () => import("./components/hindi/PledgeCounter"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const AchievementComponent = dynamic(
  () => import("./components/hindi/Achievement"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const BannerComponent = dynamic(() => import("./components/Banner"), {
  // loading: () => <p>Loading...</p>,
});
const SpinTheWheelComponent = dynamic(
  () => import("./components/hindi/SpinTheWheel"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const MemeBankComponent = dynamic(() => import("./components/hindi/MemeBank"), {
  // loading: () => <p>Loading...</p>,
});
const MediaCoverageComponent = dynamic(
  () => import("./components/hindi/MediaCoverage"),
  {
    // loading: () => <p>Loading...</p>,
  }
);
const ThugTalesComponent = dynamic(
  () => import("./components/hindi/ThugTales"),
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
    }, 0);
  }, []);
  console.log("isMobile", isMobile);
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Header isMobile={isMobile} />
      </Suspense>

      {delay ? (
        <>
          <Suspense fallback={<div></div>}>
            <PledgeCounterComponent />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
            <AchievementComponent />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
            <BannerComponent
              bannerData={{
                id: "corruption-teller-machine",
                href: "./ctm",
                src: "/assets/banner/ctm hindi banner.webp",
                alt: "corruption teller machine banner",
              }}
            />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
            <SpinTheWheelComponent />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
            <BannerComponent
              bannerData={{
                id: "quiz",
                href: "./quiz",
                src: "/assets/banner/quiz hindi banner.webp",
                alt: "quiz banner",
              }}
            />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
            <MemeBankComponent title="मीम बैंक" />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
            <ThugTalesComponent title="हमारी ठग की कहानियाँ" lang="hindi" />
          </Suspense>
          <Suspense fallback={<div className="h-[50vh] bg-gray-400"></div>}>
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
