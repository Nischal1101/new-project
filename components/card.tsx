import { ReturnResponse } from "@/types";
import { RefObject } from "react";

interface ICardProps {
  selectedFeature: string;
  data: ReturnResponse;
  cardRef: RefObject<HTMLDivElement | null>;
}
const Card = ({ selectedFeature, data, cardRef }: ICardProps) => {
  return (
    <>
      <div
        ref={cardRef}
        className={`absolute p-6 rounded-xl font-secondary shadow-lg max-w-[500px] w-full bg-white/80 backdrop-blur-sm text-secondary
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
    </>
  );
};

export default Card;
