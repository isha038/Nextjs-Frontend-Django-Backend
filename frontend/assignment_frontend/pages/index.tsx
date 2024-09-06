import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { fetchData } from '../utils/api';
import { RootState } from '../store/store';
import CandlestickChart from './CandlestickChart';
import { setLineData, setBarData, setPieData, setCandlestickData } from '../features/chartSlice';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, ArcElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface CandlestickItem {
  x: string; // Date in string format (you can adjust to Date if needed)
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function Home() {
  const dispatch = useDispatch();
  const { lineData, barData, pieData, candlestickData } = useSelector((state: RootState) => state.charts);
  const [loading, setLoading] = useState(true); // Initial state set to true

  useEffect(() => {
    const fetchAllData = async () => {
      const candlestickPromise = fetchData('candlestick-data').then((data) => {
       
        // Check data.data since it's an object with a data property
        if (data && Array.isArray(data.data)) {
          const formattedData = {
            datasets: [
              {
                label: 'Candlestick Data',
                data: data.data.map((item: CandlestickItem) => ({
                  x: item.x,
                  open: item.open,
                  high: item.high,
                  low: item.low,
                  close: item.close,
                })),
              },
            ],
          };
          dispatch(setCandlestickData(formattedData)); // Dispatch formatted data
        }
      });

      const linePromise = fetchData('line-chart-data').then((data) => {
        if (data) {
          dispatch(
            setLineData({
              labels: data.labels,
              datasets: [{ label: 'Line Chart', data: data.data }],
            })
          );
        }
      });

      const barPromise = fetchData('bar-chart-data').then((data) => {
        if (data) {
          dispatch(
            setBarData({
              labels: data.labels,
              datasets: [{ label: 'Bar Chart', data: data.data }],
            })
          );
        }
      });

      const piePromise = fetchData('pie-chart-data').then((data) => {
        if (data) {
          dispatch(
            setPieData({
              labels: data.labels,
              datasets: [{ data: data.data, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }],
            })
          );
        }
      });

      // Wait for all data to be fetched
      await Promise.all([candlestickPromise, linePromise, barPromise, piePromise]);

      // Set loading to false once all data is fetched
      setLoading(false);
    };

    fetchAllData();
  }, [dispatch]);

  return (
    <div data-testid="dashboard-container" className="container mx-auto py-4 px-4 border border-black rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
      {loading ? (
        <p className="text-center">Loading charts...</p> // Display this when data is being fetched
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lineData && lineData.datasets.length > 0 && (
            <div className="chart-container">
              <Line data={lineData} aria-label="Line Chart" /> {/* Add aria-label */}
            </div>
          )}
          {barData && barData.datasets.length > 0 && (
            <div className="chart-container">
              <Bar data={barData} aria-label="Bar Chart" /> {/* Add aria-label */}
            </div>
          )}
          {pieData && pieData.datasets.length > 0 && (
            <div className="chart-container">
              <Pie data={pieData} aria-label="Pie Chart" /> {/* Add aria-label */}
            </div>
          )}

          

          {candlestickData && candlestickData.datasets && candlestickData.datasets.length > 0 && (
            <div className="chart-container" aria-label="Candlestick Chart" >
              <CandlestickChart data={candlestickData} /> {/* Add aria-label */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
