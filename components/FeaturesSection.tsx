'use client';

import { ReturnResponse } from "@/types";
import Image from "next/image";
import { useState } from "react";
import {
  Ai, BottomLeft, BottomRight, Cognitive, Dynamic,
  Evolving, Skull, TopLeft, TopRight,
} from "@/assets";

export default function FeaturesSection({ data }: { data: ReturnResponse }) {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-between relative">
        <div 
          className="flex svg-paragraph max-w-[320px] cursor-pointer"
          onClick={() => setSelectedFeature('cognitive')}
        >
          <Image src={Cognitive} alt="loading cognitive image" />
          <p className="paragraph-text">{data.features.cognitive.title}</p>
        </div>

        <TopLeft className="absolute top-[220px] right-0 fill-blue-500" />
        <BottomLeft className="absolute bottom-[220px] right-0 fill-blue-500" />

        <div 
          className="svg-paragraph max-w-[270px] cursor-pointer"
          onClick={() => setSelectedFeature('ai_problem_solving')}
        >
          <Image src={Ai} alt="loading Ai image" className="fill-red-700" />
          <p className="paragraph-text">{data.features.ai_problem_solving.title}</p>
        </div>
      </div>

      <div className="relative">
        <Image src={Skull} alt="loading skull image" width={669} />
        {selectedFeature && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-[400px] w-full">
            <button 
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setSelectedFeature(null)}
            >
              x
            </button>
            <h3 className="text-xl font-medium mb-4">
              {data.features[selectedFeature as keyof typeof data.features].title}
            </h3>
            <ul className="space-y-2">
              {data.features[selectedFeature as keyof typeof data.features].points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between relative">
        <div 
          className="svg-paragraph max-w-[270px] items-end cursor-pointer"
          onClick={() => setSelectedFeature('dynamic_paths')}
        >
          <Image src={Dynamic} alt="loading dynamic image" />
          <p className="paragraph-text text-end">{data.features.dynamic_paths.title}</p>
        </div>

        <TopRight className="absolute top-[220px] left-0 fill-[#E7E7E7]" />
        <BottomRight className="absolute bottom-[220px] left-0 fill-[#E7E7E7]" />

        <div 
          className="svg-paragraph max-w-[270px] items-end cursor-pointer"
          onClick={() => setSelectedFeature('ai_mentor')}
        >
          <Image src={Evolving} alt="loading skull image" />
          <p className="paragraph-text text-end">{data.features.ai_mentor.title}</p>
        </div>
      </div>
    </section>
  );
}
