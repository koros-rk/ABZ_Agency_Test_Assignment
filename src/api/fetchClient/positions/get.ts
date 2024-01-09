import instance from '../index';
import { Position } from '../../types/Position';

type getPositionsResponse = {
  success: boolean,
  positions: Position[]
};

export const get = async () => {
  const response = await instance.get('positions');
  const dataFromServer: getPositionsResponse = response.data;

  return dataFromServer.positions;
};
