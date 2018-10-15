export * from './careReceivers';
export * from './folders';
export * from './folderContents';

export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
