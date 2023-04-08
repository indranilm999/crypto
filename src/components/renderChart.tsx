import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

export function RenderChart(props: any) {
  return (
    <>
      <div className="flex flex-col">
        <center>
          <AreaChart
            className=""
            width={800}
            height={250}
            data={props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 " />
            <XAxis tick={{ fill: "white" }} tickCount={7} dataKey="coinName" />
            <YAxis tick={{ fill: "white" }} tickCount={4} />
            <Tooltip contentStyle={{ color: "black" }} />
            <Area type="natural" dataKey="Price" stroke="black" fill="black" />
          </AreaChart>
          <div className="">
            <div className="text-indigo-800 text-2xl relative -bottom-20 font-semibold border-2 border-white max-w-fit">
              <div>{`Name: ${props.data[0].id}`}</div>
              <div>{`Current Price: $${props.data[0].current_price}`}</div>
              <div>{`Market Cap: ${props.data[0].market_cap}`}</div>
              <div>{`Market Cap Rank: ${props.data[0].market_cap}`}</div>
              <div>{`Valuation: $${props.data[0].fully_diluted_valuation}`}</div>
              <div>{`Total Volume: ${props.data[0].total_volume}`}</div>
              <div>{`High 24h: ${props.data[0].high_24h}`}</div>
              <div>{`Low 24h: ${props.data[0].low_24h}`}</div>
              <div>{`Price change: ${props.data[0].price_change_24h}%`}</div>
              <div>{`Price Change Percentage: ${props.data[0].price_change_percentage_24h}%`}</div>
              <div>{`Last Updated: ${props.data[0].last_updated}`}</div>
            </div>
            <></>
            <></>
            <></>
            <></>
            <></>
            <></>
            <></>
            <></>
          </div>
        </center>
      </div>
    </>
  );
}
