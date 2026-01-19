
import type { Topic, ScenarioDetail } from "../entities/LearningMaterial";

export interface ILearningRepository {
    getTopics(): Promise<Topic[]>;
    getScenariosByTopic(topicName: string): Promise<string[]>; // Returns list of scenario names
    getScenarioDetail(scenarioName: string, level: string): Promise<ScenarioDetail>;
}
