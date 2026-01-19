import type { ILearningRepository } from "../../../domain/learning/repositories/ILearningRepository";
import type { ScenarioDetail } from "../../../domain/learning/entities/LearningMaterial";

export class GetScenarioDetailUseCase {
    private repository: ILearningRepository;

    constructor(repository: ILearningRepository) {
        this.repository = repository;
    }

    async execute(scenarioName: string, level: string): Promise<ScenarioDetail> {
        return this.repository.getScenarioDetail(scenarioName, level);
    }
}
