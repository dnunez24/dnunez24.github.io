import { createContext, useContext } from "react";

interface AppConfig {
  googleTagManagerContainerId?: string;
}

const appConfig: Readonly<AppConfig> = Object.freeze({
  googleTagManagerContainerId:
    process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID,
});

const appConfigContext = createContext(appConfig);

const useAppConfig = (): AppConfig => {
  return useContext(appConfigContext);
};

export { appConfig, useAppConfig };
