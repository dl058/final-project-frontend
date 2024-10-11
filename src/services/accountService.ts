import axios from "axios";
import Account from "../models/Account";
import TravelEvent from "../models/TravelEvent";

const baseUrl = import.meta.env.VITE_API_URL || "URL NOT FOUND";

export const getAccounts = async (): Promise<Account[]> => {
  const res = await axios.get(`${baseUrl}/account`, {});
  return res.data;
};

export const getAccountById = async (uid: string): Promise<Account> => {
  const res = await axios.get(`${baseUrl}/account/${uid}`, {});
  return res.data;
};

export const createAccount = async (account: Account): Promise<Account> => {
  const res = await axios.post(`${baseUrl}/account`, account);
  return res.data;
};

export const updateAccount = async (account: Account): Promise<Account> => {
  const res = await axios.post(`${baseUrl}/account`, account);
  return res.data;
};

export const deleteAccount = async (id: string): Promise<void> => {
  return (await axios.delete(`${baseUrl}/account/${id}`)).data;
};
export const addFavEvent = async (
  id: string,
  newEvent: TravelEvent
): Promise<void> => {
  return (await axios.patch(`${baseUrl}/account/${id}`, newEvent)).data;
};

export const removeFavEvent = async (
  id: string,
  eventId: string
): Promise<void> => {
  return (
    await axios.patch(`${baseUrl}/account/remove-favorite/${id}`, { eventId })
  ).data;
};
