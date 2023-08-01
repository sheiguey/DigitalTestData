import React,{useState,useEffect} from "react";
import {Chart} from 'primereact/chart'
import { getMostpopularCountry } from "../services";



export default function TopPopularCountries(){
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        
        const country=[]
        const population=[]
       
        getMostpopularCountry()
        .then(response=>response.json())
        .then(jsonResponse => {
            const filterPop= jsonResponse.filter(popup=>popup.population>123000000);
            const topCountry=filterPop.slice(0,9);
             topCountry.map(item=>{
                return(
                 country.push(item.name.common),
                 population.push(item.population)
                )
             })   
        });

        const data = {
            labels:  country,
            datasets: [
                {
                    label: 'top 10 most popular countries',
                    data: population,
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