import React from 'react';
import '../css/Home.css';

import main_img1 from '../img/main_img11.png'
import popular_paint from '../img/popular_paint.jpg'
import popular_paint2 from '../img/popular_paint2.jpg'
import next from '../img/next.png'

import {Link } from 'react-router-dom';

import  Exh  from '../components/Exh';



function Home() {
    return(
        <div className='content'>
          <div className="main_img">
                <img src={main_img1} alt='main'/>
            </div>
            <div className="wel_text">
                <h3>Добро пожаловать в <span className='bold'>ArtSpace</span></h3>
            </div>
            <div className="discription_main_page">
                <p>ArtSpace - это огромное арт пространство, где собраны работы сотни современнных художников. Подпишись на любимых художников, чтобы не пропустить их новые работы.
                </p>
                <div className="link">
                    <div className='page_name'><h3>Художники</h3></div>
                    <div className='img_next'><img src={next} alt="стрелка"/></div>           
                </div>
            </div>
            <div className="three_column">
                <div className="popular_paint l_column">
                    <p>Популярные новинки этой недели</p>
                    <div className='img-text'>
                        <img src={popular_paint} alt='popular'/>
                        <div className='centered'>
                            <h3>Весна</h3>
                            <h4>Автор: Микель Барсеро | цена: 334$</h4>
                        </div>
                    </div>
                </div>
                <div className="center">
                <div className='img-text'>
                        <img src={popular_paint2} alt='popular'/>
                        <div className='centered'>
                            <h3>Апрель</h3>
                            <h4>Автор: Микель Барсеро | цена: 245$</h4>
                        </div>
                    </div>
                </div>
                <div className=" r_column">
                    <div className="discription_main_page">
                        <p>Здесь представлены произведения разных жанров. Ценовой диапазон и стилистическое разнообразие авторских произведений искусства порадуют не только профессиональных коллекционеров, но и любителей оригинальных, уникальных арт-объектов. Их присутствие как в жилом, так и социальном пространстве офисов и учреждений, создаст неповторимую среду для жизни, наполненную гармонией и творческой энергией.
                        </p>
                        <Link to='/paints'>
                            <div className="link">
                                <div className='page_name'><h3>Картины</h3></div>
                                <div className='img_next'><img src={next} alt="стрелка"/></div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="discription_main_page">
                <p>Познакомься с коллекциями наших пользоватлей и собирай собственные коллекции, чтобы вдозновлять себя и других
                </p>
                <Link to='/'>
                    <div className="link">
                        <div className='page_name'><h3>Коллекции</h3></div>
                        <div className='img_next'><img src={next} alt="стрелка"/></div>
                    </div>
                </Link>

            </div>
            <div>
            <p>Успей посетить</p>
            </div>
            <div className="two_column">
                <div className="two_column_l ">
                    <Exh/>
                </div>
                <div className=" r_column two_column_r">
                    <div className="discription_main_page">
                        <p>
                            Искусство теперь доступно. Окунись в мир творчества благодаря нашим виртуальным турам. Мы всегда рады вам. Приходите.
                        </p>
                        <Link to='/exh'>
                        <div className="link">
                            <div className='page_name'><h3>Виртуальные туры</h3></div>
                            <div className='img_next'><img src={next} alt="стрелка"/></div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;