export interface FeaturePoint {
  title: string;
  points: string[];
}

export interface IReturnResponse {
  features: {
    cognitive: FeaturePoint;
    ai_problem_solving: FeaturePoint;
    dynamic_paths: FeaturePoint;
    ai_mentor: FeaturePoint;
  };
}
export interface ISvgProps {
  className?: string;
  selected: boolean;
}
export type selectedFeature = keyof IReturnResponse["features"];
