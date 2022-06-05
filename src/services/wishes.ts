import { getClient } from "./client";

export interface Wish {
  name: string;
  type: string;
  isPossible: boolean;
  priority: 1 | 2 | 3;
}

export const getWishes = async () => {
  const client = getClient();
  const { data } = await client.get("/");

  return data as Wish[];
};

export const createWish = async (wish: Wish) => {
  const client = getClient();
  await client.post("/", wish);
};
