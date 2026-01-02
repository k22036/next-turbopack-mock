import { fetchSomeData } from "@/lib/fetcher";

export const doSomething = (): string => {
  const response = fetchSomeData();
  return `Result: ${response}`;
};
