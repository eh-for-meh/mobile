// @ts-ignore
import {API_ENDPOINT} from 'react-native-dotenv';
import {getUserAgent} from 'react-native-device-info';

export const get = async (path: string): Promise<Response> => {
  const useragent = await getUserAgent();
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
