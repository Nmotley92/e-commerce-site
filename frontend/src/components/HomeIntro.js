import React from 'react';

const HomeIntro = () => {
    return (
        <div className='intro-container'>
            <h1>TO SUCCEED</h1>
            <h1>YOU MUST READ</h1>
            <p>Explore new worlds from authors</p>
            <img
            style={{height: '200px'}}
            src="/images/intro-book.webp"
            alt="First book"
            />
            <img
            style={{height: '200px'}}
            src="/images/intro-book2.webp"
            alt="First book"
            />
            <img
            style={{height: '200px'}}
            src="/images/intro-book3.webp"
            alt="First book"
            />
        </div>
    )
}

export default HomeIntro;