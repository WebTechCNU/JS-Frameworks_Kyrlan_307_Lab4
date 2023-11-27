import React from 'react';
import '../App.css'; // Import the CSS file for your component

const News = () => {
    return (
        <div className="news-container">
            <h1 className="news-title">News</h1>
            <p className="news-intro">This is the news page.</p>

            <div className="news-article">
                <h2>Lorem Ipsum Dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="news-article">
                <h2>Sed Do Eiusmodt</h2>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

export { News };
