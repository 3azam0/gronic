/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import Axios from "axios";
import _ from "lodash";
import { makeUseAxios } from "axios-hooks";
import LRU from "lru-cache";
// import { apiUrl } from "../utils/config";
const apiUrl = 'https://reqres.in/api';
const toFormData = data => {
  const formData = new FormData();
  _.forOwn(data, (value, key) => {
    formData.append(key, value);
  });
  return formData;
};

const axios = Axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
  // transform request data obj to FormData
  transformRequest: [data => toFormData(data)],
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // validation errors
      if (error.response.status === 422) {
        const { errors: errorsArr } = error.response.data;
        const validationErrors = [];
        _.forOwn(errorsArr, (value, name) => {
          validationErrors.push({
            name,
            message: value[0],
          });
        });

        const errors = { ...error, validationErrors };
        return Promise.reject(errors);
      }
    }

    return Promise.reject(error);
  },
);

const cache = new LRU({ max: 20 });

const useAxios = makeUseAxios({
  axios,
  cache,
});

export default {
  axios,
  useAxios,
  toFormData,
};
