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
  const [searchString, setSearchString] = useState("");

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
      <BrowserRouter>
        {/* <center> */}
        {data.map((coinsItem: any) => {
          const image = coinsItem.item.small;
          return (
            <div
              className="flex  justify-center to-purple-200
             relative bg-repeat-space space-y-2"
            >
              <img src={image} alt="coin" width={"40px"} className="" />

              <div
                className="bg-blue-900 text-3xl font-mono font-semibold  text-white relative  left-4"
                key={coinsItem.item.id}
              >
                {coinsItem.item.id}
                <div className="h-1"></div>
                <div className="h-1"></div>
              </div>
            </div>
          );
        })}
        {/* </center> */}
      </BrowserRouter>
    </div>
  );
}
