import { IReturnResponse } from "@/types";
import FeaturesSection from "./features-section";

async function getData() {
  let response;
  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/cognify/key-features`,
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
  }
  if (!response) return null;
  return response.json();
}

export default async function FeaturesSectionServer() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) return null;
  const data: IReturnResponse = await getData();
  if (!data) {
    return null;
  }
  return <FeaturesSection data={data} />;
}
