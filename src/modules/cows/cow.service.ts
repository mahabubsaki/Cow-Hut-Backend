import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";

export const cowSignUp = async (payload: ICow): Promise<ICow> => {
    const result = await Cow.create(payload);
    return result;
};
export const getAllCows = async (): Promise<ICow[]> => {
    const result = await Cow.find({});
    return result;
};

export const getSingleCow = async (id: string): Promise<ICow | null> => {
    const result = await Cow.findById(id);
    return result;
};

export const deleteCow = async (id: string) => {
    const result = await Cow.findByIdAndDelete(id);
    return result;
};

export const updateCow = async (id: string, body: Partial<ICow>): Promise<ICow | null> => {
    const result = await Cow.findByIdAndUpdate(id, body, { new: true });
    return result;
};