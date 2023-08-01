import React,{useState,useEffect} from "react";
import {Chart} from 'primereact/chart'
import { dataCurrencies } from "../services";


export default function CurrencieChart(){
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    


    useEffect(() => {

        const dataCurrenciesValues =Object.values(dataCurrencies.rates) 
        const dataCurrenciesKeys = Object.keys(dataCurrencies.rates) 

        const data = {
            labels:  dataCurrenciesKeys,
            datasets: [
                {
                    label: 'currencies exchange',
                    data: dataCurrenciesValues,
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true
                },
                x:{
                    beginAtZero:true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Chart type="bar" data={chartData} options={chartOptions}/>
    )
}