export interface IConfig {
  graphQLEndpoint: string;
  socketEndpoint: string;
}

export enum Env {
  DEV = 'dev',
  PROD = 'prod',
}

const prodConfig: IConfig = {
  graphQLEndpoint: 'http://192.168.1.30:3002/graphql',
  socketEndpoint: 'http://localhost:3000',
}

const devConfig: IConfig = {
  graphQLEndpoint: 'http://192.168.1.30:3002/graphql',
  socketEndpoint: 'http://localhost:3000',
}
export const newConfig = (env: Env) => {
  switch (env) {
    case Env.PROD: return prodConfig
    case Env.DEV: default: return devConfig;
  }
}
