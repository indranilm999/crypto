import { useState } from "react";

export const useGetCoins = async (url: string) => {
  const data = fetch(url);

  return data;
};
