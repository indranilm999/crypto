// export const fetchCoins = async () => {
//   const data = await fetch("https://api.coingecko.com/api/v3/search/trending");

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

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

  return (
    <div className="">
      <BrowserRouter>
        <center>
          {data.map((coinsItem: any) => (
            <div
              className="bg-blue-900 font-semibold text-white"
              key={coinsItem.item.id}
            >
              <Link key={coinsItem.item.id} to={`/${coinsItem.item.id}`}>
                {coinsItem.item.id}
              </Link>
            </div>
          ))}
        </center>
      </BrowserRouter>
    </div>
  );
}
