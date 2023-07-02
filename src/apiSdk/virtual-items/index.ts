import axios from 'axios';
import queryString from 'query-string';
import { VirtualItemInterface, VirtualItemGetQueryInterface } from 'interfaces/virtual-item';
import { GetQueryInterface } from '../../interfaces';

export const getVirtualItems = async (query?: VirtualItemGetQueryInterface) => {
  const response = await axios.get(`/api/virtual-items${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createVirtualItem = async (virtualItem: VirtualItemInterface) => {
  const response = await axios.post('/api/virtual-items', virtualItem);
  return response.data;
};

export const updateVirtualItemById = async (id: string, virtualItem: VirtualItemInterface) => {
  const response = await axios.put(`/api/virtual-items/${id}`, virtualItem);
  return response.data;
};

export const getVirtualItemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/virtual-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVirtualItemById = async (id: string) => {
  const response = await axios.delete(`/api/virtual-items/${id}`);
  return response.data;
};
