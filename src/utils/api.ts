import axios from 'axios';

import config from 'src/config';

export const createApi = <T>(name: string) => {
  const url = `${config.apiUrl}/${name}`;

  return Object.freeze({
    find(params?: object): Promise<T[]> {
      return axios.get(url, { params }).then((res) => res.data);
    },

    // findRecord(params?: object): Promise<T> {
    //   return axios.get(`${url}/${id}`).then((res) => res.data);
    // },

    createRecord(params = {}): Promise<T> {
      return axios.post(url, { params }).then((res) => res.data);
    },

    deleteRecord(id: string): Promise<T> {
      return axios.delete(`${url}/${id}`).then((res) => res.data);
    },
  });
};
