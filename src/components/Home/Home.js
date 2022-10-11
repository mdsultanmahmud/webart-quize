
import { useLoaderData } from 'react-router-dom';
import ShowTopic from '../ShowTopic/ShowTopic';
import './Home.css'
const Home = () => {
    const quizeTopic = useLoaderData()
    return (
        <div style={{padding:'10px'}}>
            
            <h3 className='topic-header'>Our Practice Topic</h3>
           <div className='topic-container'>
           {
                quizeTopic.data.map(topic => <ShowTopic 
                key={topic.id}
                topic = {topic}
                ></ShowTopic>)
            }
           </div>
        </div>
    );
};

export default Home;