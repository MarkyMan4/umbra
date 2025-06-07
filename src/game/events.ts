export enum EventType {
    SCORE = "score"
}

interface ScoreEventDetail {
    score: number;
}

export class ScoreEvent extends CustomEvent<ScoreEventDetail> {
    constructor(newScore: number) {
        super(EventType.SCORE, {detail: {score: newScore}});
    }
}
