import axios, {AxiosRequestConfig} from 'axios';
import Const from './const';

interface CallAPIProps extends AxiosRequestConfig {
  token?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallAPIProps) {
  let headers = {};
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await axios({
    url: `${Const.API_URL}${url}`,
    method,
    data,
    headers,
  }).catch(err => err.response);

  const axiosResponse = response.data;

  return axiosResponse;
}
