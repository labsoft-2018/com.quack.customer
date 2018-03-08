export interface IConfig {
  graphQLEndpoint: string;
  socketEndpoint: string;
}

export enum Env {
  DEV = 'dev',
  PROD = 'prod',
}

const prodConfig: IConfig = {
  graphQLEndpoint: 'http://localhost:8670/graphql',
  socketEndpoint: 'http://localhost:3000',
}

const devConfig: IConfig = {
  graphQLEndpoint: 'http://localhost:8670/graphql',
  socketEndpoint: 'http://localhost:3000',
}
export const newConfig = (env: Env) => {
  switch (env) {
    case Env.PROD: return prodConfig
    case Env.DEV: default: return devConfig;
  }
}
