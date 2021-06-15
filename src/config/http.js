import Axios from 'axios';
import { rootUrl } from './app';

export const Http = Axios.create({
  baseURL: rootUrl,
});
