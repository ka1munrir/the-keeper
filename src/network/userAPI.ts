import {axiosInstance as api} from "./axiosInstance";

export async function getUsers(input: string) {
    const r = await api.get<userType[]>("/users");
    return r.data;
}

export async function addUser(newUser: postUserType) {
    const r = await api.post<postUserType>("/users", newUser);
    return r.data;
}

export async function patchUser(user: userType) {
    const r = await api.patch<userType>(`/users/${user.id}`, user);
    return r.data;
}