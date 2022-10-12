import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './Statistics.css'
const Statistics = () => {
    const quizeTopicData = useLoaderData()
    const topics = quizeTopicData.data
    return (
        <div>
            <h2 className='blog-header'>Survey Our Journey</h2>
            <div className='chart'>
                <LineChart
                    data={topics}
                    width={700}
                    height={300}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey={'total'} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>  
        </div>
    );
};

export default Statistics;