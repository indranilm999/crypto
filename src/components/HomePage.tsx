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
      <div className="bg-white h-30">
        <h1 className="bg-black text-white uppercase text-center relative top-5 h-20 text-6xl">
          Crypto Stat
        </h1>
      </div>

      <div className="bg-blue-900">
        <center>
          <div className="top-35 relative">
            <div className="text-white w-24 top-2 relative">Search Coins </div>
            <input
              style={{ color: "black", backgroundColor: "white" }}
              width={"30rem"}
              placeholder="Enter text..."
              ref={refInput}
              className="w-96 h-9 top-4 relative"
              type={"text"}
              onKeyDown={(e) => handleKeyDown(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
          </div>
          {!searching && (
            <div className="text-white text-3xl w-50 top-10 relative">
              Trending Coins{" "}
            </div>
          )}
        </center>
      </div>

      {!searching ? (
        // <Routes>
        <FetchTrendingCoins />
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
