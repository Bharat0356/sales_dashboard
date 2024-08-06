export const fetchSalesData = async () => {
    // Mock API data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          productSales: [
            { product: 'Product A', category: 'Category 1', quantity: 10, amount: 100 },
            { product: 'Product B', category: 'Category 2', quantity: 5, amount: 50 },
          ],
          categorySales: [
            { category: 'Category 1', amount: 100 },
            { category: 'Category 2', amount: 50 },
          ],
          comparisonData: [
            { product: 'Product A', category: 'Category 1', date1Amount: 100, date2Amount: 120, difference: 20 },
            { product: 'Product B', category: 'Category 2', date1Amount: 50, date2Amount: 30, difference: -20 },
          ],
        });
      }, 1000);
    });
  };
  