import { IUser } from "./user.interface";
import { User } from "./user.model";

export const signUp = async (payload: IUser): Promise<IUser> => {
    const result = await User.create(payload);
    return result;
};
export const getAllUsers = async (): Promise<IUser[]> => {
    const result = await User.find({});
    return result;
};

export const getSingleUser = async (id: string): Promise<IUser | null> => {
    const result = await User.findById(id);
    return result;
};

export const deleteUser = async (id: string) => {
    const result = await User.findByIdAndDelete(id);
    return result;
};