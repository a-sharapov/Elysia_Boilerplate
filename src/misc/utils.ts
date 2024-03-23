import config from "@lib/config";
import { App } from "@lib/main";
import figlet from "figlet";
import { DICTIONARY } from "./dictionary";

export const fallbackHandler = ({ error }) => ({
  success: false,
  error: DICTIONARY[error] || DICTIONARY.NOT_ALLOWED,
});

export const createMotd = (app: App) => {
  const { server } = app;
  if (!server) return;

  const { protocol, hostname, port } = server;
  const baseUrl = `${protocol}://${hostname}:${port}`;
  const apiUrl = `${baseUrl}/api/v${config.version}`;
  const projectName = figlet.textSync(
    process.env.npm_package_name || "Backend"
  );
  const isDevelopment = process.env.NODE_ENV !== "production";
  const projectVersion = process.env.npm_package_version;

  return `${projectName}

  🚀 Based on Elysia v${projectVersion} was started successfully.

  🩺 Status: ${baseUrl}
  📖 ${isDevelopment ? "Docs" : "Api"}: ${apiUrl}

  `;
};

export const pipe =
  (...fns: Array<(payload: any) => any | Promise<any>>) =>
  (payload: any) =>
    fns.reduce(
      (arg, fn) => (arg instanceof Promise ? arg.then(fn) : fn(arg)),
      payload
    );
