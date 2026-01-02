import { fetchSomeData } from "./fetcher";

export const doSomething = (): string => {
  const response = fetchSomeData();
  return `Result: ${response}`;
};
