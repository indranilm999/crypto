import { useEffect, useState } from "react";
import { RenderChart } from "./renderChart";
import { getCoinData } from "../functions/getCoinData";
import { todayDate, calcDate } from "../functions/dates";

// This coingecko link is restricted and should be used economically as it has a limited no. of requests allowed per minute
export function CoinSearch(props: any) {
  const [priceData, setPriceData] = useState<any[]>([]);
  useEffect(() => {
    getCoinData(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${props.searchValue}&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en`
    )
      .then((res) => res.json())
      .then((resp) => setPriceData(resp));
  }, [props.searchValue]);

  console.log(priceData);

  const newData = [
    {
      coinName: priceData[0]?.id ? calcDate(160) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[0] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(140) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[27] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(120) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[47] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(100) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[67] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(80) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[87] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(60) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[107] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(40) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[127] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(20) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[147] ?? "",
    },
    {
      coinName: priceData[0]?.id ? todayDate : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.current_price ?? "",
    },
  ];
  const coinImage = priceData[0]?.image;
  // console.log(newData);

  return coinImage ? (
    <div>
      <div>
        <center>
          <img
            src={coinImage}
            alt="coin"
            width={"100px"}
            className="m-6"
            title={priceData[0]?.id}
          />
        </center>
      </div>
      <RenderChart data={priceData} chartData={newData} />
    </div>
  ) : (
    <center>
      <div className="text-white text-3xl relative top-20">Coin Not Found</div>
    </center>
  );
}
