
import { useLoaderData } from 'react-router-dom';
import ShowCarousel from '../ShowCarousel/ShowCarousel';
import ShowTopic from '../ShowTopic/ShowTopic';
import './Home.css'
const Home = () => {
    const quizeTopic = useLoaderData()
    return (
        <div style={{ padding: '10px' }}>
            <div className='home-container'>
            <ShowCarousel></ShowCarousel>
            </div>
            <h3 className='topic-header'>Our Practice Topic</h3>
            <div className='topic-container'>
                {
                    quizeTopic.data.map(topic => <ShowTopic
                        key={topic.id}
                        topic={topic}
                    ></ShowTopic>)
                }
            </div>
        </div>
    );
};

export default Home;