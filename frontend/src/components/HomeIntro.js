import React from 'react';

const HomeIntro = () => {
    return (
        <div
         className='intro-container'
         style={{ height: '600px' }}>
            <h1>TO SUCCEED</h1>
            <h1>YOU MUST READ</h1>
            <p>Explore new worlds from authors</p>
            <div className="container"
            style={{ width: '50%', float: 'right' }}>
                <div className="row"
                style={{height: '400px'}}>
                    <img
                        className="col align-self-start"
                        style={{ height: '180px', width: '240px', objectFit: 'contain' }}
                        src="/images/intro-book.webp"
                        alt="First book"
                    />
                    <img
                        className="col align-self-center"
                        style={{ height: '180px', width: '240px', objectFit: 'contain' }}
                        src="/images/intro-book2.webp"
                        alt="First book"
                    />
                    <img
                        className="col align-self-end"
                        style={{ height: '180px', width: '240px', objectFit: 'contain' }}
                        src="/images/intro-book3.webp"
                        alt="First book"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;