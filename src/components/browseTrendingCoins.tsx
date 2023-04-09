import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { AreaChart, CartesianGrid, XAxis, YAxis, Area } from "recharts";
import { getCoinData } from "../functions/getCoinData";

export function BrowseTrendingCoins(props?: any) {
  console.log("BrowseTrendingCoins");

  const [trendingCoinList, setTrendingCoinList] = useState<any[]>([]);
  const [coinIndex, setCoinIndex] = useState(0);
  const [priceData, setPriceData] = useState<any[]>([]);

  useEffect(() => {
    if (props.data.length === 7) setTrendingCoinList(props.data);

    for (let i = 0; i < 7; i++) {
      if (props.currentCoin === props.data[i].item.id) setCoinIndex(() => i);
    }

    getCoinData(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${props.currentCoin}&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en`
    )
      .then((res) => res.json())
      .then((resp) => setPriceData(resp));
  }, [props.currentCoin, props.data]);

  console.log(trendingCoinList);
  console.log(priceData);
  return (
    <>
      {
        <Card>
          <CardMedia
            component="img"
            alt="crypto coins"
            image={props.data[coinIndex].item.small}
            title={props.data[coinIndex].item.id}
            style={{
              flex: "21%",
              margin: "44px",
              height: "140px",
              width: "100px",
            }}
          />
          <button className="bg-green-400">Back Button</button>
          <CardContent>
            <AreaChart
              className=""
              width={350}
              height={200}
              data={priceData}
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

              <Area
                type="natural"
                dataKey="Price"
                stroke="black"
                fill="black"
              />
            </AreaChart>
            <Typography gutterBottom variant="h5" component="div">
              {props.data[coinIndex].item.id}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.data[coinIndex].item.price_btc.toFixed(10) + ` BTC`}
            </Typography>
          </CardContent>
        </Card>
      }
    </>
  );
}
