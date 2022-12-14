import React from 'react';
import { Link } from 'react-router-dom';
import './ShowTopic.css'
const ShowTopic = ({ topic }) => {
    const { id, name, logo,total } = topic
    return (
        <div className='topic'>
           <div>
            <h6 style={{textAlign:'center'}}>All Question: {total}</h6>
           <img className='topic-logo' src={logo} alt="" />
           </div>
           <div className='topic-info'>
            <h3 className='topic-name'>{name}</h3>
            <button className='practice-btn'>
                <Link to={`/quize/${id}`}>start Practice</Link>
            </button>
           </div>

        </div>
    );
};

export default ShowTopic;