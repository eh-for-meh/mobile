import {get} from './base';
import {Deal} from '../lib/types';

export const getCurrentDeal = async (): Promise<Deal> => {
  const response = await get('/deals/current');
  const json = await response.json();
  return json as Deal;
};
