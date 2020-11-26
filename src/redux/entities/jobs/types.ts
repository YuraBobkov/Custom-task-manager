export type Job = {
  id: String;
  processId: String;
  name: String;
  status: 'running' | 'succeed' | 'failed';
};
