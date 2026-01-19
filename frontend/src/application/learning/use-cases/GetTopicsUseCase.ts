import type { ILearningRepository } from "../../../domain/learning/repositories/ILearningRepository";
import type { Topic } from "../../../domain/learning/entities/LearningMaterial";

export class GetTopicsUseCase {
    private repository: ILearningRepository;

    constructor(repository: ILearningRepository) {
        this.repository = repository;
    }

    async execute(): Promise<Topic[]> {
        return this.repository.getTopics();
    }
}
