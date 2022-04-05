import React from 'react';
import NAreaChart from '../NAreaChart/NAreaChart';

import NLineChart from '../NLineChart/NLineChart';



const Dashboard = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-blue-500'>Rechart..</h2>
            <NLineChart></NLineChart>
            <NAreaChart></NAreaChart>
           
          
        </div>
    );
};

export default Dashboard;