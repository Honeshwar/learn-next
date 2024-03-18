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

export default function EnglishPage() {
  const { isMobile } = useAppContext();

  const HeaderComponent = dynamic(
    () => import("../../components/hindi/Header")
  );
  const PledgeCounterComponent = dynamic(
    () => import("../../components/hindi/PledgeCounter")
  );
  const AchievementComponent = dynamic(
    () => import("../../components/hindi/Achievement")
  );
  const BannerComponent = dynamic(() => import("../../components/Banner"), {
    ssr: false,
  });
  const SpinTheWheelComponent = dynamic(
    () => import("../../components/hindi/SpinTheWheel")
  );
  const MemeBankComponent = dynamic(
    () => import("../../components/hindi/MemeBank"),
    {
      ssr: false,
    }
  );
  const ThugTalesComponent = dynamic(
    () => import("../../components/hindi/ThugTales")
  );
  const MediaCoverageComponent = dynamic(
    () => import("../../components/hindi/MediaCoverage")
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
      <Suspense fallback={<BannerSkeleton src="/assets/skeleton/quiz.webp" />}>
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
  );
}
