import { useEffect, useState } from "react";

export function CoinSearch(props: any) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const search = async () => {
      const coins = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${props.searchValue}`
      );

      // console.log(props.searchValue + "" + coins);

      return coins;
    };
    search()
      .then((res) => res.json())
      .then((resp) => {
        setData(resp.coins);
      });
  }, [props.searchValue]);
  return (
    <div>
      {data.map((coins) => (
        <div key={coins.id}>
          Id:
          {coins.id} Title:{coins.name}
        </div>
      ))}
    </div>
  );
}
