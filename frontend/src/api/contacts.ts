import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api"
});

export const getContacts = (search: string) =>
  api.get(`/contacts?search=${search}`).then(r => r.data);

export const addContact = (data: any) =>
  api.post("/contacts", data).then(r => r.data);

export const deleteContact = (id: number) =>
  api.delete(`/contacts/${id}`);
