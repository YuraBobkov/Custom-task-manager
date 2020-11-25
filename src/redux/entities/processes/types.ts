import { concat } from 'remeda';

export type Process = {
  id: String;
  name: String;
  startTime: Number;
  jobsCount: Number;
};

export const createActionName = (name: string): string =>
  'processes/'.concat(name);

export const FIND_PROCESSES = createActionName('FIND_PROCESSES');

export const CREATE_PROCESS = createActionName('CREATE_PROCESS');
