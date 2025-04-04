import FeaturesSectionServer from "@/components/FeaturesSectionServer";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default async function Home() {
  
  return (
    <main className="flex flex-col gap-[68px] pt-[100px]">
      <section>
        <p className="text-2xl font-normal leading-[130%] text-center">
          Key features
        </p>
        <h1 className="text-5xl font-normal leading-[110%] tracking-[0%] mt-4 text-center mx-auto max-w-[600px]">
          CognifyNow doesn&rsquo;t just teach, it thinks with you
        </h1>
      </section>

      <Suspense fallback={<Loading />}>
        <FeaturesSectionServer />
      </Suspense>
    </main>
  );
}
