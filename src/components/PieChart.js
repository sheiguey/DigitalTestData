import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PieChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        
        const data = {
            labels: ['Entreprise A', 'Entreprise B', 'Entreprise C'],
            datasets: [
                {
                    data: [540, 325, 702],
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
         
            <Chart type="pie" data={chartData} options={chartOptions}  className='w-full md:w-10rem'/>
         
    )
}