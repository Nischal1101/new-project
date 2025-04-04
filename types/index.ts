export interface FeaturePoint {
  title: string;
  points: string[];
}

export interface ReturnResponse {
  features: {
    cognitive: FeaturePoint;
    ai_problem_solving: FeaturePoint;
    dynamic_paths: FeaturePoint;
    ai_mentor: FeaturePoint;
  };
}
