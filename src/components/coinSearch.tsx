import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function CoinSearch(props: any) {
  const [priceData, setPriceData] = useState<any[]>([]);
  useEffect(() => {
    const cryptoPrice = async () => {
      const priceSearch = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${props.searchValue}&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en`
      );

      return priceSearch;
    };

    cryptoPrice()
      .then((res) => res.json())
      .then((resp) => setPriceData(resp));
  }, [props.searchValue]);

  console.log(priceData);
  const todayDate = new Date().toLocaleDateString("en-US");
  const calcDate = (days: number) => {
    const twentyDaysAgo = new Date(
      Date.now() - days * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-US");

    return twentyDaysAgo;
  };
  const newData = [
    {
      coinName: priceData[0]?.id ? todayDate : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[167] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(20) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[147] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(40) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[127] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(60) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[107] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(80) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[87] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(100) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[67] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(120) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[47] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(140) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[27] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(160) : "",
      coinPrice: priceData[0]?.current_price ?? "",
      price: priceData[0]?.sparkline_in_7d.price[0] ?? "",
    },
  ];
  const coinImage = priceData[0]?.image;
  console.log(newData);

  return (
    // <Routes>
    //   <Route path={`/${props.searchValue}`}>
    <div>
      <div>
        <center>
          <img
            src={coinImage}
            alt="coin"
            width={"100px"}
            className="relative top-10"
          />
        </center>
      </div>
      <center>
        <AreaChart
          className="relative top-20"
          width={800}
          height={250}
          data={newData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3 " />
          <XAxis tick={{ fill: "white" }} tickCount={10} dataKey="coinName" />
          <YAxis tick={{ fill: "white" }} tickCount={4} />
          <Tooltip contentStyle={{ color: "white" }} />
          <Area type="natural" dataKey="price" stroke="#8884d8" fill="green" />
        </AreaChart>
      </center>
    </div>
  );
}
