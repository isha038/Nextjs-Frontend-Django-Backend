import React from 'react';
import { ChartCanvas, Chart, CandlestickSeries, XAxis, YAxis } from 'react-financial-charts';
import { scaleTime } from 'd3-scale';
import { extent } from 'd3-array';

// Define the type for a single candlestick data point
interface CandlestickDataPoint {
  x: string;  // Date in string format
  open: number;
  high: number;
  low: number;
  close: number;
}

// Define the props for the CandlestickChart component
interface CandlestickChartProps {
  data: {
    datasets: [{
      label: string;
      data: CandlestickDataPoint[];
    }];
  };
}

export default function CandlestickChart({ data }: CandlestickChartProps) {
//   if (!data || !data.datasets || data.datasets.length === 0) {
//     return <p>No candlestick data available</p>;
//   }
console.log('Rendering CandlestickChart with data:', data); 
  // Assuming the data is in the form of an array inside datasets[0].data
  const candlestickData = data.datasets[0].data;  // Extract the actual data array

  // Type xAccessor function
  const xAccessor = (d: CandlestickDataPoint) => new Date(d.x);  // Define how to access the 'x' values (dates)

  // Find the extents for x-axis using d3-array's extent function
  const xExtents: [Date, Date] = extent(candlestickData, xAccessor) as [Date, Date];  // Ensure it's typed as [Date, Date]

  return (
    <ChartCanvas
      height={400}
      width={400}
      ratio={3}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      data={candlestickData}
      xAccessor={xAccessor}
      xScale={scaleTime()}
      xExtents={xExtents}
      seriesName='CandlestickSeries'
    >
      <Chart id={1} yExtents={(d: CandlestickDataPoint) => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" ticks={6} />
        <YAxis axisAt="right" orient="right" ticks={5} />
        <CandlestickSeries />
      </Chart>
    </ChartCanvas>
  );
}
