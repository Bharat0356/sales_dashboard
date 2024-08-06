import React, { useEffect, useState } from 'react';
import { fetchSalesData } from '../api';
import SalesTable from './SalesTable';
import ChartComponent from './ChartComponent';

const Dashboard1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchSalesData();
      setData(result);
    };
    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  const productData = {
    labels: data.productSales.map(d => d.product),
    datasets: [{
      label: 'Sales Amount',
      data: data.productSales.map(d => d.amount),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const categoryData = {
    labels: data.categorySales.map(d => d.category),
    datasets: [{
      label: 'Sales Amount',
      data: data.categorySales.map(d => d.amount),
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    }],
  };

  return (
    <div>
      <h2>Today's Sales</h2>
      <div style={{ height: '400px', width: '100%' }}>
        <ChartComponent type="bar" data={productData} />
      </div>
      <div style={{ height: '400px', width: '100%' }}>
        <ChartComponent type="pie" data={categoryData} />
      </div>
      <SalesTable
        data={data.productSales}
        columnDefs={[
          { headerName: 'Product Name', field: 'product' },
          { headerName: 'Category', field: 'category' },
          { headerName: 'Quantity Sold', field: 'quantity' },
          { headerName: 'Sales Amount', field: 'amount' },
        ]}
      />
    </div>
  );
};

export default Dashboard1;
