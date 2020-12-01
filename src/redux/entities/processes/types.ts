export type Process = {
  id: String;
  name: String;
  startTime: number;
  jobsCount: number;
  status: 'pending' | 'inProgress' | 'failed' | 'finished';
};
