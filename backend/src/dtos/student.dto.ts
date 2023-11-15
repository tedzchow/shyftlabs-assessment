export interface StudentDTO {
    name: string;
    familyName: string;
    dob: Date;
    email: string;
}

export interface UpdateStudentDTO {
    name?: string;
    familyName?: string;
    dob?: Date;
    email?: string;
}
