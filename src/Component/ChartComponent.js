import React, { useRef, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Ensure you're importing Chart.js

const ChartComponent = ({ type, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    if (chartInstance) {
      chartInstance.destroy();
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  const ChartElement = type === 'bar' ? Bar : Pie;

  return <ChartElement ref={chartRef} data={data} />;
};

export default ChartComponent;
