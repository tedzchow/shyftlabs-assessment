export interface ResultDTO {
    studentId: number;
    courseId: number;
    score: string;
}

export interface UpdateResultDTO {
    score?: string;
}