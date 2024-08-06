import React, { useEffect, useState } from 'react';
import { fetchSalesData } from '../api';
import SalesTable from './SalesTable';
import ChartComponent from './ChartComponent';

const Dashboard2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchSalesData();
      setData(result);
    };
    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const productComparisonData = {
    labels: data.comparisonData.map(d => d.product),
    datasets: [
      {
        label: 'Date 1 Sales Amount',
        data: data.comparisonData.map(d => d.date1Amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Date 2 Sales Amount',
        data: data.comparisonData.map(d => d.date2Amount),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Sales Comparison Between Two Dates</h2>
      <div style={{ height: '400px', width: '100%' }}>
        <ChartComponent type="bar" data={productComparisonData} />
      </div>
      <SalesTable
        data={data.comparisonData}
        columnDefs={[
          { headerName: 'Product Name', field: 'product' },
          { headerName: 'Category', field: 'category' },
          { headerName: 'Date 1 Sales Amount', field: 'date1Amount' },
          { headerName: 'Date 2 Sales Amount', field: 'date2Amount' },
          { headerName: 'Difference', field: 'difference' },
        ]}
      />
    </div>
  );
};

export default Dashboard2;
