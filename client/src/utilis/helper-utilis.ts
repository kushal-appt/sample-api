import { ProcessingType } from "../enums/common-enum";

export const getDefaultProcessingState = () => {
    return { status: ProcessingType.InProcess };
};