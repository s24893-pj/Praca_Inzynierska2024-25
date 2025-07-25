import { apiEndpoints, fetchData, setParam } from "@/api/apiEndpoints";
import { User,Profile } from "@/types";

export const fetchUserById = async (id: number) => {
  const url = setParam(apiEndpoints.user.getUserById, { userId: id.toString() });

  const { data, error } = await fetchData<User>(url, "GET");

  if (error) {
    throw error;
  }

  return data as User;
};
export const updateUser = async (dto: { first_name?: string; last_name?: string; current_password?: string; password?: string;password_confirm?: string }) => {

  const { data, error } = await fetchData<User>(apiEndpoints.user.update, "PATCH",dto);

  if (error) {
    throw error;
  }

  return data as User;
};
export const fetchUserRole = async (role: string): Promise<Profile> => {
  const url = setParam(apiEndpoints.user.role, { role });
  const { data, error } = await fetchData<Profile>(url, "PATCH");

  if (error) {
    throw error;
  }

  return data as Profile;
};
export const fetchDeleteUser =async () => {
  const url = apiEndpoints.user.delete;
  const { data, error } = await fetchData(url, "DELETE");

  if (error) {
    throw error;
  }

  return data;
};