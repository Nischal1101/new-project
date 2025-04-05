import Image from "next/image";
import {
  Ai,
  BottomLeft,
  BottomRight,
  Cognitive,
  Dynamic,
  Evolving,
  Skull,
  TopLeft,
  TopRight,
} from "@/assets";

export default function FeaturesSectionSkeleton() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-between relative">
        <div className="flex svg-paragraph w-[350px]">
          <Image src={Cognitive} alt="cognitive image" priority />
          <div className="ml-3 h-6 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="ml-3 h-6 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>

        <TopLeft
          selected={false}
          className="absolute top-[220px] right-0 fill-[#E7E7E7]"
        />
        <BottomLeft
          selected={false}
          className="absolute bottom-[220px] right-0 fill-[#E7E7E7]"
        />

        <div className="svg-paragraph w-[270px]">
          <Image src={Ai} alt="AI image" priority />
          <div className=" h-6 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className=" h-6 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="relative ">
        <Image src={Skull} alt="skull image" width={669} priority />
      </div>

      <div className="flex flex-col justify-between relative">
        <div className="svg-paragraph w-[270px] items-end">
          <Image src={Dynamic} alt="dynamic image" priority />
          <div className=" h-6 w-full bg-gray-200 rounded animate-pulse fill-[#E7E7E7]"></div>
          <div className=" h-6 w-full bg-gray-200 rounded animate-pulse fill-[#E7E7E7]"></div>
        </div>

        <TopRight
          selected={false}
          className="absolute top-[220px] left-0 fill-[#E7E7E7]"
        />
        <BottomRight
          selected={false}
          className="absolute bottom-[220px] left-0 fill-[#E7E7E7]"
        />

        <div className="svg-paragraph w-[270px] items-end">
          <Image src={Evolving} alt="evolving image" priority />
          <div className=" h-6 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className=" h-6 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
