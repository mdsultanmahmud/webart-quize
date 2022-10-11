import React from 'react';
import './Blogs.css'
import blog1 from '../../image/blog1.png'
import blog2 from '../../image/blog2.png'
import blog3 from '../../image/blog3.png'
const Blogs = () => {
    return (
        <div>
            <h3 className='blog-header'>Our Special Blogs</h3>
            <div className='question-section'>
                <div className="img-section">
                    <img src={blog1} alt="" />
                </div>
                <div className="qustion-section">
                    <h2 className='question'>What is the purpose of react router?</h2>
                    <p>A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.</p>
                </div>
            </div>
            <div className='question-section'>
                <div className="qustion-section">
                    <h2 className='question'>How does context api works?</h2>
                    <p>The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.</p>
                    <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className="img-section">
                    <img src={blog2} alt="" />
                </div>
            </div>

            <div className='question-section'>
                <div className="img-section">
                    <img src={blog3} alt="" />
                </div>
                <div className="qustion-section">
                    <h2 className='question'>Discuss about useRef() HOOKS!</h2>
                    <p>First you have to import useRef hooks, then you store it with useRef() with a constant variable.</p>
                    <p>useRef won't re-render the component like useState do.</p>
                    <p>If you want to do some operation that won't need re-rendering of component then you can use useRef hook.</p>
                    <p>Refs are useful when getting user input, DOM element properties and storing constantly updating values.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;