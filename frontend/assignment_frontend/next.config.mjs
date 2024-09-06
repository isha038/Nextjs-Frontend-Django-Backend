/** @type {import('next').NextConfig} */
import withTM from 'next-transpile-modules';
const withTranspileModules = withTM([
  'react-financial-charts',
  '@react-financial-charts/annotations',
  '@react-financial-charts/core',
  '@react-financial-charts/axes',
  '@react-financial-charts/series',
  '@react-financial-charts/coordinates',
  '@react-financial-charts/indicators',
  '@react-financial-charts/interactive',
  '@react-financial-charts/scales',
  '@react-financial-charts/tooltip',
  '@react-financial-charts/utils',


]);
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],  // Only these extensions will be considered as pages
};

export default withTranspileModules(nextConfig);
