import { Process } from './processes/types';
import { Job } from './jobs/types';

export type Entities = {
  processes: { [id: string]: Process };
  jobs?: { [id: string]: Job };
};
