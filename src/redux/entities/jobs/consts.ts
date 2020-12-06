const createActionName = (name: string): string => 'jobs/'.concat(name);

export const FIND_JOBS = createActionName('FIND_JOBS');
export const FIND_JOB = createActionName('FIND_JOB');
