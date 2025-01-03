'use client'

import React, { useState, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the chart with dates
  const rawData = [
    // Data untuk tahun 2022
    { date: '2022-01-01', sales: 50 },
    { date: '2022-01-15', sales: 55 },
    { date: '2022-01-31', sales: 60 },
    { date: '2022-02-01', sales: 65 },
    { date: '2022-02-15', sales: 70 },
    { date: '2022-02-28', sales: 60 },
    { date: '2022-03-01', sales: 58 },
    { date: '2022-03-15', sales: 50 },
    { date: '2022-03-31', sales: 45 },
    { date: '2022-04-01', sales: 50 },
    { date: '2022-04-15', sales: 55 },
    { date: '2022-04-30', sales: 60 },
    { date: '2022-05-01', sales: 70 },
    { date: '2022-05-15', sales: 65 },
    { date: '2022-05-31', sales: 55 },
    { date: '2022-06-01', sales: 50 },
    { date: '2022-06-15', sales: 75 },
    { date: '2022-06-30', sales: 80 },
    { date: '2022-07-01', sales: 90 },
    { date: '2022-07-15', sales: 95 },
    { date: '2022-07-31', sales: 85 },
    { date: '2022-08-01', sales: 95 },
    { date: '2022-08-15', sales: 100 },
    { date: '2022-08-31', sales: 105 },
    { date: '2022-09-01', sales: 110 },
    { date: '2022-09-15', sales: 90 },
    { date: '2022-09-30', sales: 85 },
    { date: '2022-10-01', sales: 80 },
    { date: '2022-10-15', sales: 70 },
    { date: '2022-10-31', sales: 65 },
    { date: '2022-11-01', sales: 75 },
    { date: '2022-11-15', sales: 85 },
    { date: '2022-11-30', sales: 90 },
    { date: '2022-12-01', sales: 100 },
    { date: '2022-12-15', sales: 105 },
    { date: '2022-12-31', sales: 110 },

    // Data untuk tahun 2023
    { date: '2023-01-01', sales: 120 },
    { date: '2023-01-15', sales: 115 },
    { date: '2023-01-31', sales: 110 },
    { date: '2023-02-01', sales: 100 },
    { date: '2023-02-15', sales: 95 },
    { date: '2023-02-28', sales: 90 },
    { date: '2023-03-01', sales: 80 },
    { date: '2023-03-15', sales: 85 },
    { date: '2023-03-31', sales: 70 },
    { date: '2023-04-01', sales: 75 },
    { date: '2023-04-15', sales: 70 },
    { date: '2023-04-30', sales: 65 },
    { date: '2023-05-01', sales: 90 },
    { date: '2023-05-15', sales: 95 },
    { date: '2023-05-31', sales: 100 },
    { date: '2023-06-01', sales: 110 },
    { date: '2023-06-15', sales: 120 },
    { date: '2023-06-30', sales: 125 },
    { date: '2023-07-01', sales: 150 },
    { date: '2023-07-15', sales: 140 },
    { date: '2023-07-31', sales: 130 },
    { date: '2023-08-01', sales: 125 },
    { date: '2023-08-15', sales: 115 },
    { date: '2023-08-31', sales: 110 },
    { date: '2023-09-01', sales: 120 },
    { date: '2023-09-15', sales: 110 },
    { date: '2023-09-30', sales: 105 },
    { date: '2023-10-01', sales: 100 },
    { date: '2023-10-15', sales: 95 },
    { date: '2023-10-31', sales: 90 },
    { date: '2023-11-01', sales: 85 },
    { date: '2023-11-15', sales: 80 },
    { date: '2023-11-30', sales: 75 },
    { date: '2023-12-01', sales: 70 },
    { date: '2023-12-15', sales: 80 },
    { date: '2023-12-31', sales: 90 },
  ];

  const [selectedYear, setSelectedYear] = useState('2023'); // Default to 2023
  const [selectedMonth, setSelectedMonth] = useState('all'); // Default to "All Months"

  // Function to convert month number to month name
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get unique years from rawData
    rawData.map(item => item.date.split('-')[0])
    .filter((year, index, self) => self.indexOf(year) === index);

  const uniqueYears = useMemo(() => {
    return [...new Set(rawData.map(item => item.date.split('-')[0]))];
  }, [rawData]);

  // Get unique months from the filtered data
  const uniqueMonths = useMemo(() => {
    const months = rawData
      .filter(item => item.date.split('-')[0] === selectedYear)
      .map(item => item.date.split('-')[1]);
    return [...new Set(months)];
  }, [rawData, selectedYear]);

  // Filter data based on selected year and month
  const filteredData = useMemo(() => {
    return rawData.filter(item => {
      const yearMatch = item.date.split('-')[0] === selectedYear;
      if (selectedMonth === 'all') {
        return yearMatch; // Return all data for the selected year
      } else {
        const monthMatch = item.date.split('-')[1] === selectedMonth;
        return yearMatch && monthMatch; // Return data for the selected year and month
      }
    });
  }, [selectedYear, selectedMonth]);

  // Prepare data for the chart
  const data = selectedMonth === 'all' ? {
    labels: uniqueMonths.map(month => monthNames[parseInt(month) - 1]), // Convert month number to name
    datasets: [
      {
        label: 'Monthly Sales',
        data: uniqueMonths.map(month => 
          filteredData.filter(item => item.date.split('-')[1] === month)
          .reduce((acc, item) => acc + item.sales, 0)
        ),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth line
      },
    ],
  } : {
    labels: filteredData.map(item => item.date),
    datasets: [
      {
        label: 'Sales',
        data: filteredData.map(item => item.sales),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth line
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: selectedMonth === 'all' ? 'Monthly Sales Data' : 'Weekly Sales Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        {uniqueYears.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        <option value="all">All Months</option>
        {uniqueMonths.map(month => (
          <option key={month} value={month}>{monthNames[parseInt(month) - 1]}</option>
        ))}
      </select>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;