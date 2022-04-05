import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const NAreaChart = () => {


                        

                          
                      

    const data= [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
       
       <AreaChart  width={700} height={400} data={data} className="mt-20 ms-10  mx-auto mb-20"   >

           <Area    dataKey={"revenue"} stroke="#8884d8"   ></Area>
           <XAxis dataKey={"month"}></XAxis>
           <Tooltip></Tooltip>
           <YAxis></YAxis>
       </AreaChart>
    );
};

export default NAreaChart;