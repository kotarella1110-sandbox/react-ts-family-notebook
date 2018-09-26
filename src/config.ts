import { merge } from 'lodash';

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
  },
  test: {},
  development: {},
  production: {},
};

export default merge(config.all, config[config.all.env]);
