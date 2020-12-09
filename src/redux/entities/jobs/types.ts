export type Job = {
  id: string;
  processId: string;
  name: string;
  status: 'running' | 'succeed' | 'failed';
};
