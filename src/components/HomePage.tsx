import { useEffect, useRef, useState } from "react";
import "../home.css";
import { CoinSearch } from "./coinSearch";
import { FetchTrendingCoins } from "./fetchTrendingCoins";
import bitcoinImage from "./bitcoin_image.png";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [searching, setSearching] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.code === "Enter" && inputValue) {
      console.log("in handleKeyDown :" + key.code);
      setSearching(true);
    } else setSearching(false);
  };

  useEffect(() => {
    refInput.current?.focus();
  });
  // console.log(inputValue + "" + searching);

  return (
    <>
      <div className="">
        <p className="bg-black text-white font-bold uppercase text-center relative  h-15 text-2xl">
          Crypto Stat
        </p>
      </div>

      <div className="">
        <center>
          <div className="top-35 relative ">
            <div className="text-white w-48 top-2">Search For a Coin</div>
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
