import axios from 'axios';

import config from 'src/config';

export const createApi = <T>(name: string) => {
  const url = `${config.apiUrl}/${name}`;

  return Object.freeze({
    find(): Promise<T[]> {
      return axios.get(url).then((res) => res.data);
    },

    findRecord(id: string): Promise<T> {
      return axios.get(`${url}/${id}`).then((res) => res.data);
    },

    createRecord(): Promise<T> {
      return axios.post(url).then((res) => res.data);
    },

    updateRecord(id: string, attrs: { [key: string]: any }): Promise<T> {
      return axios.post(`${url}/${id}`).then((res) => res.data);
    },

    deleteRecord(id: string): Promise<T> {
      return axios.delete(`${url}/${id}`).then((res) => res.data);
    },
  });
};
