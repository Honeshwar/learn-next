"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function EnglishPage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.screen.width <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const HeaderComponent = dynamic(
    () => import("../../components/hindi/Header")
  );
  return (
    <>
      <Suspense
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
      >
        <HeaderComponent isMobile={isMobile} lang="en" />
      </Suspense>
      {/* <Suspense fallback={<PledgeCounterSkeleton />}>
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
        </Suspense> */}
    </>
  );
}
