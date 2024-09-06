import React from 'react'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import chartReducer from '../features/chartSlice';
import Index from './index';
import * as api from '../utils/api';

// Mock the API
jest.mock('../utils/api');

const store = configureStore({
  reducer: {
    charts: chartReducer,
  },
});

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('Dashboard rendering', () => {
  beforeEach(() => {
    // Mock the API responses
    (api.fetchData as jest.Mock).mockImplementation((endpoint) => {
      switch (endpoint) {
        case 'line-chart-data':
          return Promise.resolve({
            labels: ['Jan', 'Feb', 'Mar'],
            data: [10, 20, 30],
          });
        case 'bar-chart-data':
          return Promise.resolve({
            labels: ['Product A', 'Product B'],
            data: [50, 100],
          });
        case 'pie-chart-data':
          return Promise.resolve({
            labels: ['Red', 'Blue', 'Yellow'],
            data: [300, 100, 200],
          });
        case 'candlestick-data':
          return Promise.resolve({
            data: [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
                {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
                {"x": "2023-01-04", "open": 45, "high": 55, "low": 40, "close": 50},
                {"x": "2023-01-05", "open": 50, "high": 60, "low": 45, "close": 55},
                {"x": "2023-01-06", "open": 55, "high": 65, "low": 50, "close": 60},
                {"x": "2023-01-07", "open": 60, "high": 70, "low": 55, "close": 65},
                {"x": "2023-01-08", "open": 65, "high": 75, "low": 60, "close": 70},
                {"x": "2023-01-09", "open": 70, "high": 80, "low": 65, "close": 75},
                {"x": "2023-01-10", "open": 75, "high": 85, "low": 70, "close": 80},
                {"x": "2023-01-11", "open": 80, "high": 90, "low": 75, "close": 85},
                {"x": "2023-01-12", "open": 85, "high": 95, "low": 80, "close": 90},
                {"x": "2023-01-13", "open": 90, "high": 100, "low": 85, "close": 95},
                {"x": "2023-01-14", "open": 95, "high": 105, "low": 90, "close": 100},
                {"x": "2023-01-15", "open": 100, "high": 110, "low": 95, "close": 105},
                {"x": "2023-01-16", "open": 105, "high": 115, "low": 100, "close": 110},
                {"x": "2023-01-17", "open": 110, "high": 120, "low": 105, "close": 115},
                {"x": "2023-01-18", "open": 115, "high": 125, "low": 110, "close": 120},
                {"x": "2023-01-19", "open": 120, "high": 130, "low": 115, "close": 125},
                {"x": "2023-01-20", "open": 125, "high": 135, "low": 120, "close": 130},
                {"x": "2023-01-21", "open": 130, "high": 140, "low": 125, "close": 135},
                {"x": "2023-01-22", "open": 135, "high": 145, "low": 130, "close": 140},
                {"x": "2023-01-23", "open": 140, "high": 150, "low": 135, "close": 145},
                {"x": "2023-01-24", "open": 145, "high": 155, "low": 140, "close": 150},
                {"x": "2023-01-25", "open": 150, "high": 160, "low": 145, "close": 155},
                {"x": "2023-01-26", "open": 155, "high": 165, "low": 150, "close": 160},
                {"x": "2023-01-27", "open": 160, "high": 170, "low": 155, "close": 165},
                {"x": "2023-01-28", "open": 165, "high": 175, "low": 160, "close": 170},
                {"x": "2023-01-29", "open": 170, "high": 180, "low": 165, "close": 175},
                {"x": "2023-01-30", "open": 175, "high": 185, "low": 170, "close": 180},
            ],
          });
        default:
          return Promise.resolve({});
      }
    });
  });

  test('renders the dashboard heading', () => {
    renderWithProvider(<Index />);
    const heading = screen.getByText(/Dashboard/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the Line chart', async () => {
    renderWithProvider(<Index />);
    const lineChart = await screen.findByLabelText(/Line Chart/i);
    expect(lineChart).toBeInTheDocument();
  });

  test('renders the Bar chart', async () => {
    renderWithProvider(<Index />);
    const barChart = await screen.findByLabelText(/Bar Chart/i);
    expect(barChart).toBeInTheDocument();
  });

  test('renders the Pie chart', async () => {
    renderWithProvider(<Index />);
    const pieChart = await screen.findByLabelText(/Pie Chart/i);
    expect(pieChart).toBeInTheDocument();
  });

  test('renders the Candlestick chart', async () => {
    renderWithProvider(<Index />);
    const candlestickChart = await screen.findByLabelText(/Candlestick Chart/i);
    expect(candlestickChart).toBeInTheDocument();
  });

  test('renders a border around the dashboard', () => {
    renderWithProvider(<Index />);
    const container = screen.getByTestId('dashboard-container');
    expect(container).toHaveClass('border', 'border-black');
  });
});
