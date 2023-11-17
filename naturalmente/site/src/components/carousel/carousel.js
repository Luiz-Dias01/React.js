import './carousel.scss';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';


export default function Carrossel() {
    return (
        <div id='carousel-components'>
            <Carousel>
                <Carousel.Item>
                    <div className='carousel-elements'>
                        <img
                            className='d-block w-20'
                            src="../../assets/image/image_produto_1.png"
                            alt="Image One"
                        />

                        <img
                            className='d-block w-20'
                            src="../../assets/image/image_produto_2.png"
                            alt="Image Two"
                        />

                        <img
                            className='d-block w-20'
                            src="../../assets/image/image_produto_3.png"
                            alt="Image Three"
                        />

                        <img
                            className='d-block w-20'
                            src="../../assets/image/image_produto_4.png"
                            alt="Image Four"
                        />
                    </div>
                </Carousel.Item> 

                <Carousel.Item>
                    <div className='carousel-elements'>
                        <img
                            className='d-block w-10'
                            src="../../assets/image/image_produto_5.png"
                            alt="Image Five"
                        />

                        <img
                            className='d-block w-10'
                            src="../../assets/image/image_produto_6.png"
                            alt="Image Six"
                        />

                        <img
                            className='d-block w-10'
                            src="../../assets/image/image_produto_7.png"
                            alt="Image Seven"
                        />

                        <img
                            className='d-block w-10'
                            src="../../assets/image/image_produto_8.png"
                            alt="Image Eigth"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}