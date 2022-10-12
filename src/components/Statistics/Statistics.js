import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const quizeTopicData = useLoaderData()
    const topics = quizeTopicData.data
    return (
        <div>
            <h2 className='blog-header'>Survey Our Journey</h2>
            <div className='chart'>
            <ResponsiveContainer  width="80%" height="80%">
                <LineChart
                    data={topics}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey={'total'} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>               
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;