import React from 'react';

const HomeIntro = () => {
    return (
        <div className='intro-container row'>
            <h1>TO SUCCEED</h1>
            <h1>YOU MUST READ</h1>
            <p>Explore new worlds from authors</p>
            <div className="container">
                <div className="row"
                style={{height: '600px'}}>
                    <img
                        className="col align-self-start"
                        style={{ height: '80px', width: '80px', objectFit: 'cover'}}
                        src="/images/intro-book.webp"
                        alt="First book"
                    />
                    <img
                        className="col align-self-center"
                        style={{ height: '200px' }}
                        src="/images/intro-book2.webp"
                        alt="First book"
                    />
                    <img
                        className="col align-self-end"
                        style={{ height: '200px' }}
                        src="/images/intro-book3.webp"
                        alt="First book"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;