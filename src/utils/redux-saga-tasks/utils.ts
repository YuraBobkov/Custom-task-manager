export type ActionType = {
  type: string;
  payload?: any;
  meta?: { taskId: number };
};

const createIdGenerator = (): (() => number | number) => {
  let id = 0;

  return () => {
    id += 1;

    return id;
  };
};

export const getId = createIdGenerator();

export const createAction = (
  type: string,
  createMeta: () => { taskId: number },
) => (payload: any): ActionType => {
  const action: ActionType = {
    type,
  };

  if (payload !== undefined) {
    action.payload = payload;
  }

  if (typeof createMeta === 'function') {
    action.meta = createMeta();
  }

  return action;
};
