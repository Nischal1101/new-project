import { ReturnResponse } from "@/types";
import FeaturesSection from "./features-section";

async function getData() {
  const response = await fetch(
    "http://localhost:3000/api/cognify/key-features",
    { method: "GET" }
  );
  return response.json();
}

export default async function FeaturesSectionServer() {
  const data: ReturnResponse = await getData();
  return <FeaturesSection data={data} />;
}
