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
import Features from "@/components/features";
import { ReturnResponse } from "@/types";
import Image from "next/image";

export default async function Home() {
  const response = await fetch(
    "http://localhost:3000/api/cognify/key-features",
    { method: "GET" }
  );
  const data: ReturnResponse = await response.json();
  console.log(data);
  return (
    <>
      <main className="flex flex-col gap-[68px] pt-[100px]">
        <section>
          <p className="text-2xl font-normal leading-[130%] text-center ">
            Key features
          </p>
          <h1 className="text-5xl font-normal leading-[110%] tracking-[0%] mt-4 text-center  mx-auto max-w-[600px]  ">
            CognifyNow doesn&rsquo;t just teach, it thinks with you
          </h1>
        </section>
        <section className="flex justify-center">
          <div className="flex flex-col justify-between relative">
            <div className=" flex svg-paragraph max-w-[320px] ">
              <Image src={Cognitive} alt="loading cognitive image" />
              <p className="paragraph-text ">{data.features.cognitive.title}</p>
            </div>

            <TopLeft className="absolute top-[220px] right-0 fill-blue-500 " />
            <BottomLeft className="absolute bottom-[220px] right-0 fill-blue-500 " />

            <div className="svg-paragraph max-w-[270px]">
              <Image src={Ai} alt="loading Ai image" className="fill-red-700" />
              <p className="paragraph-text ">
                {data.features.ai_problem_solving.title}
              </p>
            </div>
          </div>
          <Image
            src={Skull}
            alt="loading skull image"
            width={669}
            className="relative"
          />
          <div className="flex flex-col justify-between relative ">
            <div className="svg-paragraph max-w-[270px]  items-end">
              <Image src={Dynamic} alt="loading dynamic image" />
              <p className="paragraph-text text-end ">
                {data.features.dynamic_paths.title}
              </p>
            </div>
            <TopRight className="absolute top-[220px] left-0 fill-[#E7E7E7]" />
            <BottomRight className="absolute bottom-[220px] left-0 fill-[#E7E7E7]" />

            <div className="svg-paragraph max-w-[270px] items-end">
              <Image src={Evolving} alt="loading skull image" />
              <p className="paragraph-text text-end">
                {data.features.ai_mentor.title}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
