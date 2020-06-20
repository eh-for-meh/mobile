// @ts-ignore
import {API_ENDPOINT} from 'react-native-dotenv';
import {useragent} from './device';

export const get = async (path: string): Promise<Response> => {
  const response = await fetch(`${API_ENDPOINT}${path}`, {
    headers: {
      'User-Agent': useragent,
    },
  });
  if (response.status !== 200) {
    throw response;
  }
  return response;
};
