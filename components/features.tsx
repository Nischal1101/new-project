import { ReturnResponse } from "@/types";

const Features = async ({ nature }: { nature: string }) => {
  const response = await fetch(
    "http://localhost:3000/api/cognify/key-features",
    { method: "GET" }
  );
  const data: ReturnResponse = await response.json();
  console.log(data);
  return (
    <>
      <p className="paragraph-text">{data.features[nature as keyof typeof data.features].title}</p>
    </>
  );
};

export default Features;
