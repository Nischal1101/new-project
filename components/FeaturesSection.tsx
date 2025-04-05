"use client";

import { ReturnResponse } from "@/types";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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

export default function FeaturesSection({ data }: { data: ReturnResponse }) {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setSelectedFeature(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="flex justify-center ">
      <div className="flex flex-col justify-between relative">
        <div
          className="flex svg-paragraph w-[320px] cursor-pointer"
          onClick={() => setSelectedFeature("cognitive")}
        >
          <Image src={Cognitive} alt="loading cognitive image" />
          <p className="paragraph-text">{data.features.cognitive.title}</p>
        </div>

        <TopLeft
          className={`absolute top-[220px] right-0 ${
            selectedFeature === "cognitive" ? "fill-blue-500" : "fill-gray-300"
          }`}
        />
        <BottomLeft
          className={`absolute bottom-[220px] right-0 ${
            selectedFeature === "ai_problem_solving"
              ? "fill-blue-500"
              : "fill-gray-300"
          }`}
        />

        <div
          className="svg-paragraph w-[270px] cursor-pointer"
          onClick={() => setSelectedFeature("ai_problem_solving")}
        >
          <Image src={Ai} alt="loading Ai image" className="fill-red-700" />
          <p className="paragraph-text">
            {data.features.ai_problem_solving.title}
          </p>
        </div>
      </div>

      <div className="relative">
        <Image src={Skull} alt="loading skull image" width={669} height={669} />
        {selectedFeature && (
          <div
            ref={cardRef}
            className={`absolute p-6 rounded-xl font-secondary shadow-lg max-w-[500px] w-full bg-white/80 backdrop-blur-sm
              ${selectedFeature === "cognitive" ? "top-[15%] right-[20%]" : ""}
              ${
                selectedFeature === "ai_problem_solving"
                  ? "bottom-[15%] right-[20%]"
                  : ""
              }
              ${
                selectedFeature === "dynamic_paths"
                  ? "top-[15%] left-[20%]"
                  : ""
              }
              ${
                selectedFeature === "ai_mentor" ? "bottom-[15%] left-[20%]" : ""
              }
            `}
          >
            <ul className="space-y-[8px] p-[24px]">
              {data.features[
                selectedFeature as keyof typeof data.features
              ].points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-2xl font-normal leading-[130%] tracking-[0%] "
                >
                  <span className="text-black">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between relative">
        <div
          className="svg-paragraph w-[270px] items-end cursor-pointer"
          onClick={() => setSelectedFeature("dynamic_paths")}
        >
          <Image src={Dynamic} alt="loading dynamic image" />
          <p className="paragraph-text text-end">
            {data.features.dynamic_paths.title}
          </p>
        </div>

        <TopRight
          className={`absolute top-[220px] left-0 ${
            selectedFeature === "dynamic_paths"
              ? "fill-blue-500"
              : "fill-[#E7E7E7]"
          }`}
        />
        <BottomRight
          className={`absolute bottom-[220px] left-0 ${
            selectedFeature === "ai_mentor" ? "fill-blue-500" : "fill-[#E7E7E7]"
          }`}
        />

        <div
          className="svg-paragraph w-[270px] items-end cursor-pointer"
          onClick={() => setSelectedFeature("ai_mentor")}
        >
          <Image src={Evolving} alt="loading skull image" />
          <p className="paragraph-text text-end">
            {data.features.ai_mentor.title}
          </p>
        </div>
      </div>
    </section>
  );
}
