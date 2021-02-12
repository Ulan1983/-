import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import './MainPage.css';
import plane from '../assets/images/paper_plane.png';


const MainPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container'>
      <div className='text-center mt-3'>
        <NavLink className='mr-3' to='/register'>Регистрация</NavLink>
        <NavLink to='/clientInfo'>Карточка пользователя</NavLink>
      </div>
      <header className='header mt-3 d-none d-sm-block'>
        <h1 className='text-center main-title'>Универсальная система</h1>
        <p className='text-center pb-4 title'>Подойдет для всех, например если у вас: </p>
        <div className='header-nav'>
          <ul className='nav'>
            <li className='nav-item'><i className="bi bi-hand-index-thumb icon"/>
              <a className='nav-link link' href="#">Массажный <br/>салон</a></li>
            <li className='nav-item'><i className="bi bi-brightness-alt-high icon"/>
              <a className='nav-link link' href="#">Салон <br/>красоты</a></li>
            <li className='nav-item'><i className="bi bi-heart icon"/>
              <a className='nav-link link' href="#">Медицинский <br/>центр</a></li>
            <li className='nav-item'><i className="bi bi-app icon"/>
              <a className='nav-link link' href="#">Стоматология</a></li>
            <li className='nav-item'><i className="bi bi-chat-right-dots icon"/>
              <a className='nav-link link' href="#">Репетиторство</a></li>
            <li className='nav-item'><i className="bi bi-book icon"/>
              <a className='nav-link link' href="#">Обучение</a></li>
            <li className='nav-item'><i className="bi bi-droplet-fill icon"/>
              <a className='nav-link link' href="#">Автомойка</a></li>
            <li className='nav-item'><i className="bi bi-back icon"/>
              <a className='nav-link link' href="#">SPA</a></li>
          </ul>
        </div>
      </header>

      <section className='py-5'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-4'>
            <p className='period'>Пробный период</p>
            <h2 className='period-title'>Зарегистрируйтесь,<br/> и попробуйте работать в Mocrm 7 дней, без
              ограничений.</h2>
            <button className='btn btn-primary free-btn'>Попробовать бесплатно</button>
          </div>
          <div className='col-12 col-sm-4'>
            <div className='mb-5 services'>
              <i className="bi bi-globe"/>
              <h4>Доступ из любой точки</h4>
              <p>Наша система работает облачно, что дает <br/>
                возможность получить доступ из любой <br/>
                точки мира</p>
            </div>
            <div className='services'>
              <i className="bi bi-border-all"/>
              <h4>Бесплатные обновления</h4>
              <p>Получайте новые функционалы системы абсолютно бесплатно</p>
            </div>
          </div>
          <div className='col-12 col-sm-4'>
            <div className='mb-5 services'>
              <i className="bi bi-cloud-check"/>
              <h4>Облачное хранение</h4>
              <p>Вся информация хранится в надежно защищенных серверах с высокой скоростью, данные видете только
                вы</p>
            </div>
            <div className='services'>
              <i className="bi bi-arrow-down-up"/>
              <h4>Служба поддержки</h4>
              <p>Мы оказываем полную техническую поддержку всем нашим пользователям, вы всегда можете обратиться к нам
                за помощью</p>
            </div>
          </div>
        </div>
      </section>

      <section className='my-5'>
        <div className="row no-gutters">
          <div className="col-6">
            <img src={plane} alt="plane" className='plane'/>
          </div>
          <div className="col-6 mt-5">
            <h4 className='request-title'>Оставьте заявку</h4>
            <p className='request-description'>Наш менеджер свяжется с вами <br/>
              и проконсультирует подробнее
            </p>
            <Button variant="primary" onClick={handleShow}>
              Оставить заявку
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Оставить заявку</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <textarea className='request-text' placeholder='Введите текст'></textarea>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрыть
                </Button>
                <Button type='submit' variant="primary" onClick={handleClose}>
                  Оставить заявку
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </section>

      <section className='my-3 text-center'>
        <h4 className='tariff'>Выберите свой тариф</h4>
        <button className='btn btn-primary optimal-btn'>#оптимальный</button>
      </section>

      <section className='my-5 px-5'>
        <div className="row no-gutters">
          <div className="col-4 options">
            <h5>Lite</h5>
            <p>14$</p>
            <span>в месяц</span>
            <ul>
              <li><i className="bi bi-clipboard-check"/>200 клиентов</li>
              <li><i className="bi bi-clipboard-check"/>Место для файлов: 200мб</li>
              <li><i className="bi bi-clipboard-check"/>1 Пользователь</li>
              <li><i className="bi bi-clipboard-check"/>5 Специалистов</li>
              <li><i className="bi bi-clipboard-check"/>1 Филиал</li>
              <li><i className="bi bi-clipboard-check"/>Онлайн запись</li>
              <li><i className="bi bi-clipboard-x"/>Расчет заработной платы</li>
              <li><i className="bi bi-clipboard-x"/>Персональный менеджер</li>
              <li><i className="bi bi-clipboard-x"/>История посещений клиента</li>
              <li><i className="bi bi-clipboard-x"/>Учет материалов</li>
              <li><i className="bi bi-clipboard-x"/>Вход для специалистов</li>
            </ul>
            <div className='try-free'>
              <button className='try-free-btn'>Попробовать бесплатно</button>
            </div>
          </div>
          <div className="col-4 options">
            <h5>Start</h5>
            <p>39$</p>
            <span>в месяц</span>
            <ul>
              <li><i className="bi bi-clipboard-check"/>1000 клиентов</li>
              <li><i className="bi bi-clipboard-check"/>Место для файлов: 500мб</li>
              <li><i className="bi bi-clipboard-check"/>5 Пользователей</li>
              <li><i className="bi bi-clipboard-check"/>20 Специалистов</li>
              <li><i className="bi bi-clipboard-check"/>2 Филиала</li>
              <li><i className="bi bi-clipboard-check"/>Онлайн запись</li>
              <li><i className="bi bi-clipboard-check"/>Расчет заработной платы</li>
              <li><i className="bi bi-clipboard-check"/>Персональный менеджер</li>
              <li><i className="bi bi-clipboard-check"/>История посещений клиента</li>
              <li><i className="bi bi-clipboard-check"/>Учет материалов</li>
              <li><i className="bi bi-clipboard-check"/>Вход для специалистов</li>
            </ul>
            <div className='try-free'>
              <button className='try-free-btn'>Попробовать бесплатно</button>
            </div>
          </div>
          <div className="col-4 options">
            <h5>Pro</h5>
            <p>49$</p>
            <span>в месяц</span>
            <ul>
              <li><i className="bi bi-clipboard-check"/>Unlimited клиентов</li>
              <li><i className="bi bi-clipboard-check"/>Место для файлов: unlimited</li>
              <li><i className="bi bi-clipboard-check"/>Unlimited Пользователей</li>
              <li><i className="bi bi-clipboard-check"/>Unlimited Специалистов</li>
              <li><i className="bi bi-clipboard-check"/>5 Филиалов</li>
              <li><i className="bi bi-clipboard-check"/>Онлайн запись</li>
              <li><i className="bi bi-clipboard-check"/>Расчет заработной платы</li>
              <li><i className="bi bi-clipboard-check"/>Персональный менеджер</li>
              <li><i className="bi bi-clipboard-check"/>История посещений клиента</li>
              <li><i className="bi bi-clipboard-check"/>Учет материалов</li>
              <li><i className="bi bi-clipboard-check"/>Вход для специалистов</li>
            </ul>
            <div className='try-free'>
              <button>Попробовать бесплатно</button>
            </div>
          </div>
        </div>
      </section>

      <footer className='mt-5 mb-3'>
        <div className='row no-gutters'>
          <div className="col-12 col-lg-4 col-md-3 col-sm-2 footer">
            <h5>Mocrm</h5>
            <p>CRM система для управления <br/>
              клиентами, электронной <br/>
              записью и учетом
            </p>
          </div>
          <div className='col-12 col-lg-8 col-md-9 col-sm-10 footer-2'>
            <div className='row no-gutters'>
              <div className="col-4">
                <h5>Инфо</h5>
                <p>go@moorecerm.com</p>
                <p>help@moorecrm.com</p>
                <p>+996 559 1111 95</p>
              </div>
              <div className='col-4'>
                <h5>Мы на связи</h5>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Youtube</p>
              </div>
              <div className='col-4'>
                <h5>Полезное</h5>
                <p>Цены</p>
                <p>Возможности CRM</p>
                <p>Партнерская программа</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 footer-3">
          <div className="col-6">
            <span>2020 "Mocrm". Сделано с душой. </span>
          </div>
          <div className="col-6 footer-4">
            <span>Договор оферта. Пользовательское соглашение</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;