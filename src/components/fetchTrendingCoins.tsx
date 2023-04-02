// export const fetchCoins = async () => {
//   const data = await fetch("https://api.coingecko.com/api/v3/search/trending");

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CoinSearch } from "./coinSearch";

//   return data;
// };

export function FetchTrendingCoins() {
  const [data, setData] = useState<any[]>([]);

  const getTrendingCoins = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    return data;
  };

  useEffect(() => {
    getTrendingCoins()
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.coins);
      });
  }, []);
  console.log(data);

  return (
    <div className="">
      {/* <center> */}
      {data.map((coinsItem: any) => {
        const image = coinsItem.item.small;
        return (
          <div
            className="flex  justify-around    border-4
            border-black
             relative top-20  bg-repeat-space space-y-7 "
            key={coinsItem.item.id}
            w-30
          >
            <img
              src={image}
              alt="coin"
              width={"35px"}
              className="relative left-8"
            />

            <div className=" bg-blue-400 text-2xl font-mono font-semibold  text-white relative  left-4 -top-2">
              {coinsItem.item.id}
            </div>
            <div className=" bg-blue-400  text-3xl font-mono font-semibold  text-white relative  left-10 -top-2">
              {coinsItem.item.price_btc.toFixed(10) + ` BTC`}
            </div>
            <></>
            <></>
          </div>
        );
      })}
    </div>
  );
}
