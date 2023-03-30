import { useEffect, useRef, useState } from "react";
import "../home.css";
import { CoinSearch } from "./coinSearch";
import { FetchTrendingCoins } from "./fetchTrendingCoins";

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
      <h1 className="bg-blue-900 text-white uppercase text-center relative top-3">
        Crypto Stat
      </h1>

      <div className="bg-blue-900  ">
        <div className="text-white  top-6 left-20 relative w-24">
          Search Coins{" "}
        </div>
        <center>
          <div className="">
            <input
              style={{ color: "black", backgroundColor: "white" }}
              width={"30rem"}
              ref={refInput}
              className=""
              type={"text"}
              onKeyDown={(e) => handleKeyDown(e)}
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
          </div>
        </center>
      </div>

      {!searching ? (
        <FetchTrendingCoins />
      ) : (
        <CoinSearch searchValue={inputValue} />
      )}
    </>
  );
}

export default HomePage;
