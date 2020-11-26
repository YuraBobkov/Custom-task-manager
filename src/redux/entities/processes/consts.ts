const createActionName = (name: string): string => 'processes/'.concat(name);

export const FIND_PROCESSES = createActionName('FIND_PROCESSES');

export const CREATE_PROCESS = createActionName('CREATE_PROCESS');
