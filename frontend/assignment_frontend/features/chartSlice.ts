import { createSlice } from '@reduxjs/toolkit';

interface ChartState {
  lineData: {
    labels: string[];
    datasets: Array<{ label: string; data: number[] }>;
  };
  barData: {
    labels: string[];
    datasets: Array<{ label: string; data: number[] }>;
  };
  pieData: {
    labels: string[];
    datasets: Array<{ data: number[]; backgroundColor: string[] }>;
  };
  candlestickData: any;  // You can update this based on your candlestick chart structure
}

const initialState: ChartState = {
  lineData: {
    labels: [],
    datasets: [],
  },
  barData: {
    labels: [],
    datasets: [],
  },
  pieData: {
    labels: [],
    datasets: [],
  },
  candlestickData: null,  // Adjust based on your candlestick chart requirements
};

const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setLineData: (state, action) => {
      state.lineData = action.payload;
    },
    setBarData: (state, action) => {
      state.barData = action.payload;
    },
    setPieData: (state, action) => {
      state.pieData = action.payload;
    },
    setCandlestickData: (state, action) => {
      state.candlestickData = action.payload;
    },
  },
});

export const { setLineData, setBarData, setPieData, setCandlestickData } = chartSlice.actions;
export default chartSlice.reducer;
