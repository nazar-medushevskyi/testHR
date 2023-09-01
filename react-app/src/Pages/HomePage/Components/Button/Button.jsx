import { useState } from 'react';
import './Button.css';

export const Button = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [csvData, setCsvData] = useState(null);

  const handleButtonClick = () => {
    setIsLoading(true);
  
    let mergedData = [];
  
    Promise.all([
      fetch('https://api.entriwise.com/mock/test-task-orders').then((response) =>
        response.json()
      ),
      fetch('https://api.entriwise.com/mock/test-task-items').then((response) =>
        response.json()
      ),
    ])
      .then(([orderData, itemsData]) => {
        setTimeout(() => {  
          mergedData = orderData.map((order) => {
            const item = itemsData.find((item) => item.itemId === order.itemId);
  
            return {
              itemName: item ? item.itemName : 'N/A',
              orderId: order.orderId,
              orderDate: order.orderDate,
              amount: item ? item.amount : 'N/A',
            };
          });
  
          const csvString = generateCsvString(mergedData); // Замените на вашу функцию генерации CSV-строки
          setCsvData(csvString);
  
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setIsLoading(false);
      });
  };
  
  const generateCsvString = (data) => {
    const headers = ['Item Name', 'Order ID', 'Order Date', 'Amount'];
    const rows = data.map((item) => [
      item.itemName,
      item.orderId,
      item.orderDate,
      item.amount,
    ]);
  
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');
  
    return csv;
  };

  return (
    <div>
    <button
      type="button"
      className={`card__buy-button ${isLoading ? 'is-activeButton' : ''}`}
      onClick={handleButtonClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="loader-container">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>Loading</span>
        </div>
      ) : (
        'Download'
      )}
    </button>
    {csvData && (
      <div>
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`}
          download="data.csv"
        >
          Download CSV
        </a>
      </div>
    )}

{csvData && (
   console.log(csvData)
  )}
  </div>
  );
}