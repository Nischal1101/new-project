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
        <div className="flex svg-paragraph max-w-[350px] ">
          <Image
            src={Cognitive}
            alt="loading cognitive image"
            onClick={() => setSelectedFeature("cognitive")}
            className="cursor-pointer"
          />
          <p className="paragraph-text">{data.features.cognitive.title}</p>
        </div>

        <TopLeft
          selected={selectedFeature === "cognitive"}
          className={`absolute top-[220px] right-0 ${
            selectedFeature === "cognitive" ? "" : "fill-gray-300"
          }`}
        />
        <BottomLeft
          selected={selectedFeature === "ai_problem_solving"}
          className={`absolute bottom-[220px] right-0 ${
            selectedFeature === "ai_problem_solving" ? "" : "fill-gray-300"
          }`}
        />

        <div className="svg-paragraph w-[270px]">
          <Image
            src={Ai}
            alt="loading Ai image"
            onClick={() => setSelectedFeature("ai_problem_solving")}
            className=" cursor-pointer"
          />
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
        <div className="svg-paragraph w-[270px] items-end">
          <Image
            src={Dynamic}
            alt="loading dynamic image"
            onClick={() => setSelectedFeature("dynamic_paths")}
            className="cursor-pointer"
          />
          <p className="paragraph-text text-end">
            {data.features.dynamic_paths.title}
          </p>
        </div>

        <TopRight
          selected={selectedFeature === "dynamic_paths"}
          className={`absolute top-[220px] left-0 ${
            selectedFeature === "dynamic_paths" ? "" : "fill-[#E7E7E7]"
          }`}
        />
        <BottomRight
          selected={selectedFeature === "ai_mentor"}
          className={`absolute bottom-[220px] left-0 ${
            selectedFeature === "ai_mentor" ? "" : "fill-[#E7E7E7]"
          }`}
        />

        <div className="svg-paragraph w-[270px] items-end">
          <Image
            src={Evolving}
            alt="loading skull image"
            onClick={() => setSelectedFeature("ai_mentor")}
            className=" cursor-pointer"
          />
          <p className="paragraph-text text-end">
            {data.features.ai_mentor.title}
          </p>
        </div>
      </div>
    </section>
  );
}
