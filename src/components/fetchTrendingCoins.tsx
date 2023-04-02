// export const fetchCoins = async () => {
//   const data = await fetch("https://api.coingecko.com/api/v3/search/trending");

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CoinSearch } from "./coinSearch";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useGetCoins } from "../hooks/useGetCoins";

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
  // const val = useGetCoins("https://api.coingecko.com/api/v3/search/trending");

  useEffect(() => {
    getTrendingCoins()
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.coins);
      });
  }, []);
  console.log(data);

  return (
    <div className="flex  flex-wrap justify-center left-8">
      {/* <center> */}
      {data.map((coinsItem: any) => {
        const image = coinsItem.item.small;
        return (
          <div
            className="flex  border-2
            border-black
             relative top-20"
            key={coinsItem.item.id}
          >
            <Card>
              <CardMedia
                component="img"
                alt="crypto coins"
                image={image}
                style={{
                  flex: "21%",
                  margin: "44px",
                  height: "140px",
                  width: "160px",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {coinsItem.item.id}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {coinsItem.item.price_btc.toFixed(10) + ` BTC`}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
            <></>
            <></>
          </div>
        );
      })}
    </div>
  );
}
