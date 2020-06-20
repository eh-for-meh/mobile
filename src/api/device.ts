import {getUserAgent} from 'react-native-device-info';

export let useragent: string;

const initialize = async () => {
  try {
    useragent = await getUserAgent();
  } catch (err) {
    console.warn('[INITIALIZE] getUserAgent:', err);
  }
};
initialize();
