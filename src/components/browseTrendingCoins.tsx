import { Card, CardContent } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { getCoinData } from "../functions/getCoinData";
import { todayDate, calcDate } from "../functions/dates";

export function BrowseTrendingCoins(props?: any) {
  console.log("BrowseTrendingCoins");

  let currentCoinIndex = 0,
    currentCoinName = props.currentCoin;
  const findCoinIndex = () => {
    for (let i = 0; i < 7; i++) {
      if (currentCoinName === props.data[i].item.id) {
        currentCoinIndex = i;
        break;
      }
    }
    return { index: currentCoinIndex, name: currentCoinName };
  };
  const [coinName, setCoinName] = useState(currentCoinName ?? "");
  const [coinIndex, setCoinIndex] = useState(findCoinIndex().index);
  const [priceData, setPriceData] = useState<any[]>([]);

  const incrementIndex = () => {
    if (coinIndex === 6) {
      setCoinIndex(0);
      setCoinName(props.data[0].item.id);
    } else {
      setCoinIndex(coinIndex + 1);
      setCoinName(props.data[coinIndex + 1].item.id);
    }
  };

  const decrementIndex = () => {
    if (coinIndex === 0) {
      setCoinIndex(6);
      setCoinName(props.data[6].item.id);
    } else {
      setCoinIndex(coinIndex - 1);
      setCoinName(props.data[coinIndex - 1].item.id);
    }
  };

  useEffect(() => {
    getCoinData(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinName}&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en`
    )
      .then((res) => res.json())
      .then((resp) => setPriceData(resp));
  }, [coinIndex, coinName, props.data]);

  // graph data of a single coin over a period of 7 days
  const newData = [
    {
      coinName: priceData[0]?.id ? todayDate : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.current_price ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(20) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[147] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(40) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[127] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(60) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[107] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(80) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[87] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(100) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[67] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(120) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[47] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(140) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[27] ?? "",
    },
    {
      coinName: priceData[0]?.id ? calcDate(160) : "",
      bitcoinPrice: priceData[0]?.current_price ?? "",
      Price: priceData[0]?.sparkline_in_7d.price[0] ?? "",
    },
  ];

  // console.log(trendingCoinList);
  console.log(priceData);
  console.log(coinIndex);
  return (
    <>
      {
        <>
          <button
            onClick={decrementIndex}
            className="bg-green-400 h-8 w-38 relative   z-10"
            style={{ left: "-120px", top: "228px" }}
          >
            Previous
          </button>
          <button
            onClick={incrementIndex}
            className="bg-green-400 h-8 w-35 relative  z-10"
            style={{ left: "310px", top: "228px" }}
          >
            Next
          </button>

          <Card
            className="relative top-10 "
            style={{
              backgroundColor: "beige",
              borderRadius: "35px",
              // backgroundImage: bitcoin_image,
            }}
          >
            <center>
              <img
                src={props.data[coinIndex].item.small ?? undefined}
                alt="coin"
                width={"100px"}
                className="m-6"
                title={priceData[0]?.id}
              />
              <div className="relative top-0 left-30 font-extrabold">
                <span id="Market Rank">
                  #{props.data[coinIndex].item.market_cap_rank}
                </span>
              </div>
            </center>

            <CardContent>
              <AreaChart
                className=""
                width={350}
                height={200}
                data={newData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3 " />
                <XAxis
                  tick={{ fill: "white" }}
                  tickCount={7}
                  dataKey="coinName"
                />
                <YAxis tick={{ fill: "white" }} tickCount={4} />
                <Tooltip contentStyle={{ color: "black" }} />
                <Area
                  type="natural"
                  dataKey="Price"
                  stroke="black"
                  fill="black"
                />
              </AreaChart>

              <div className="font-bold h-30">
                {props.data[coinIndex].item.id}
              </div>
              <div className="text-green-400 font-bold h-12 ">
                {props.data[coinIndex].item.price_btc.toFixed(10) + ` BTC`}
              </div>
            </CardContent>
          </Card>
        </>
      }
    </>
  );
}
