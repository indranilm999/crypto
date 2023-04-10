import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { getCoinData } from "../functions/getCoinData";
import { BrowseTrendingCoins } from "./browseTrendingCoins";

export function FetchTrendingCoins(props?: any) {
  const [data, setData] = useState<any[]>([]);
  const [browse, setBrowse] = useState(props.browse ?? false);
  const [currentCoin, setcurrentCoin] = useState("");

  const setCoinName = (name: string) => {
    setcurrentCoin(name);
    setBrowse(!browse);
  };

  useEffect(() => {
    setBrowse(false);
    getCoinData("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.coins);
      });
  }, []);
  console.log(data);

  return (
    <div className="flex  flex-wrap justify-evenly left-8">
      {!browse ? (
        data.map((coinsItem: any) => {
          const image = coinsItem.item.small;

          return (
            <div
              className="flex  border-2 z-20
            border-black
             relative top-20"
              key={coinsItem.item.id}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="crypto coins"
                  image={image}
                  title={coinsItem.item.id}
                  style={{
                    flex: "21%",
                    margin: "44px",
                    height: "140px",
                    width: "160px",
                  }}
                />
                <CardContent>
                  <button
                    className="bg-green-600 text-white w-40 relative left-4"
                    onClick={() => {
                      setCoinName(coinsItem.item.id);
                    }}
                  >
                    View
                  </button>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {coinsItem.item.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {coinsItem.item.price_btc.toFixed(10) + ` BTC`}
                  </Typography>
                </CardContent>
              </Card>
              <></>
              <></>
            </div>
          );
        })
      ) : (
        <>
          <div className="">
            <button
              onClick={() => setCoinName("")}
              className="bg-green-400 h-8 w-35 relative top-20 left-5 z-10"
            >
              back
            </button>

            <BrowseTrendingCoins data={data} currentCoin={currentCoin} />
          </div>
        </>
      )}
    </div>
  );
}
