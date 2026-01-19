import type { ILearningRepository } from "../../../domain/learning/repositories/ILearningRepository";

export class GetScenariosByTopicUseCase {
    private repository: ILearningRepository;

    constructor(repository: ILearningRepository) {
        this.repository = repository;
    }

    async execute(topicName: string): Promise<string[]> {
        return this.repository.getScenariosByTopic(topicName);
    }
}
