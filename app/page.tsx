import { Suspense } from "react";
import FeaturesSectionServer from "@/components/features-section-server";
import FeaturesSectionSkeleton from "@/components/features-section-skeleton";

export default function Home() {
  return (
    <main className="flex flex-col gap-[88px] py-[128px]">
      <section>
        <p className="text-2xl font-normal tracking-[0%] leading-[130%] text-center">
          Key features
        </p>
        <h1 className="text-5xl font-normal tracking-[0%] leading-[110%]  mt-4 text-center mx-auto max-w-[600px]">
          CognifyNow doesn&rsquo;t just teach, it thinks with you
        </h1>
      </section>

      <Suspense fallback={<FeaturesSectionSkeleton />}>
        <FeaturesSectionServer />
      </Suspense>
    </main>
  );
}
