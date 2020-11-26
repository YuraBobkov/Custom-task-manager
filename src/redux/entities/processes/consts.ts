const createActionName = (name: string): string => 'process/'.concat(name);

export const FIND_PROCESSES = createActionName('FIND_PROCESSES');

export const CREATE_PROCESS = createActionName('CREATE_PROCESS');

export const DELETE_PROCESS = createActionName('DELETE_PROCESS');
