import { useEffect, useRef, useState } from "react";
import "../home.css";
import { CoinSearch } from "./coinSearch";
import { FetchTrendingCoins } from "./fetchTrendingCoins";
import { Loading } from "./loading";
function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const [trendingData, setTrendingData] = useState<any[]>([]);

  const cryptoPrice = async () => {
    const priceSearch = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${inputValue}&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en`
    );

    return priceSearch;
  };

  const handleKeyDown = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.code === "Enter" && inputValue) {
      //  console.log("in handleKeyDown :" + key.code);
      setSearching(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else if (key.code !== "Shift") setSearching(false);
  };

  useEffect(() => {
    refInput.current?.focus();
    cryptoPrice()
      .then((res) => res.json())
      .then((resp) => setTrendingData(resp));
  }, []);
  // console.log(suggestions);

  return (
    <>
      <div className="">
        <div className="bg-black text-white font-bold uppercase text-center relative  h-15 text-2xl">
          Crypto Stat
        </div>
      </div>

      <div className="">
        <center>
          <div className="top-35 relative ">
            <div className="text-white w-48 top-2">Search For a Coin</div>
            <Loading searching={loading} />

            <input
              style={{
                color: "black",
                border: "2px solid black",
              }}
              width={"30rem"}
              placeholder="Enter coin name..."
              ref={refInput}
              className="input w-96 h-9 top-4 relative "
              type={"text"}
              onKeyDown={(e) => handleKeyDown(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
          </div>
          {!searching && (
            <div className="text-white text-3xl w-30 top-10 relative ">
              Trending Coins{" "}
            </div>
          )}
        </center>
      </div>

      {!searching ? (
        // <Routes>
        <div className="">
          <FetchTrendingCoins />
        </div>
      ) : (
        // </Routes>
        // <Routes>
        <CoinSearch searchValue={inputValue} />
        // </Routes>
      )}
    </>
  );
}

export default HomePage;
