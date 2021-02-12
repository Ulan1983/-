import React from 'react';
import {NavLink} from "react-router-dom";

import flag from '../assets/images/flag.png';
import './Register.css';

const Register = () => {
	return (
		<div className='container-fluid'>
			<div className="row ">
				<div className="col-12 col-xl-4 register">
					<div className='row'>
						<div className='col-6'>
							<div className='logo'>
								<h1>Mocrm</h1>
								<p className='client-control'>#правильное управление клиентами</p>
							</div>
						</div>
						<div className='col-6 flag'>
							<img src={flag} alt="flag"/>
							<span>
							Rus
						</span>
							<i className="bi bi-arrow-down-short"/>
						</div>
					</div>
					<h3>Регистрация</h3>
					<div className='form'>
						<form>
							<div className='form-group'>
								<i className="bi bi-person person"/>
								<input type="text" className='form-control full-name-inp' placeholder='ФИО'/>
							</div>
							<div className='form-group'>
								<i className="bi bi-envelope envelope"/>
								<input type="email" className='form-control email-inp' placeholder='Email'/>
							</div>
							<div className='form-group'>
								<i className="bi bi-lock lock"/>
								<input type="password" className='form-control password' placeholder='Придумайте пароль'/>
							</div>
							<div className="form-group row">
								<div className="col-3">
									<i className="bi bi-telephone telephone"/>
									<input type="text" className="form-control phone-inp" placeholder='+7'/>
								</div>

								<div className="col-9">
									<input type="text" className="form-control phone-2-inp" placeholder='Номер телефона'/>
								</div>
							</div>
							<div className='form-group'>
								<i className="bi bi-bag bag"/>
								<input type="text" className='form-control company' placeholder='Название компании'/>
							</div>
							<div className='form-group'>
								<i className="bi bi-people people"/>
								<input type="text" className='form-control worker' placeholder='Количество сотрудников'/>
							</div>
							<div className='row buttons'>
								<div className='col-6'>
									<button type='submit' className='btn btn-primary start-btn'>Начать</button>
								</div>
								<div className='col-6'>
									<NavLink to="/" className='to-main'>На главную</NavLink>
								</div>
							</div>
						</form>
						<p className='agree'>Нажимая на начать, вы даете согласие на обработку персональных данных</p>
						<div className='row footer-block'>
							<div className='col-6'>
								<span>Договор оферта</span>
							</div>
							<div className='col-6'>
								<span>Пользовательское соглашение</span>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-xl-8 content-table no-gutters">
					<div className="container">
						<div className="content-title">
							<h4>#учет#клиенты#отчеты#журнал#полныйконтроль</h4>
							<h3>журнал записей</h3>
							<p>ведение электронного <br/>
								журнала, контроль записей</p>
						</div>

						<div className='content-table-inner'>
							<nav className="navbar navbar-expand-lg navbar-light bg-light">
								<div className="container-fluid">
									<div className="d-flex inner-search">
										<i className="bi bi-search"/>
										<input className="form-control me-2 search" type="search"
													 placeholder="Search" aria-label="Search"/>
									</div>
									<div className="collapse navbar-collapse ul-navbar" id="navbarSupportedContent">
										<ul className="navbar-nav me-auto mb-2 mb-lg-0">
											<li className='nav-item'>
												<div className='flag-2'>
													<img src={flag} alt="flag"/>
													<span>
															Rus
														</span>
												</div>
											</li>
											<li className="nav-item">
												<i className="bi bi-bell"/>
											</li>
											<li className="nav-item">
												<i className="bi bi-bell"/>
											</li>
											<li className="nav-item">
												<i className="bi bi-bell"/>
											</li>
											<li className="nav-item">
												<i className="bi bi-bell"/>
											</li>
											<li className="nav-item">
												<i className="bi bi-bell"/>
											</li>
											<li className="nav-item">
												<i className="bi bi-bell"/>
											</li>
											<li className="nav-item dropdown">
												<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
													 data-bs-toggle="dropdown" aria-expanded="false">
													A
												</a>
											</li>
										</ul>
									</div>
								</div>
							</nav>

							<div className='row mt-2'>
								<div className="col-6 records">
									<ul>
										<li>
											<a href="#">записи</a>
										</li>
										<li>
											<a href="#">все расписание</a>
										</li>
										<li>
											<a href="#">на месяц</a>
										</li>
										<li>
											<i className="bi bi-caret-left"/>
											<span>10 июня 2020</span>
											<i className="bi bi-caret-right"/>
										</li>
									</ul>
								</div>
								<div className="col-6 records-buttons">
									<button>+запись</button>
									<button>+расход</button>
									<button>+товар</button>
									<button>+продажа</button>
								</div>
							</div>

							<div>
								<table className="table">
									<thead>
									<tr>
										<th className='time' scope="col">Время</th>
										<th className='name' scope="col">Акунова Ж.</th>
										<th className='name' scope="col">Муратов М.</th>
										<th className='name' scope="col" style={{backgroundColor: '#F6EAED'}}>Жаныбекова Т.</th>
										<th className='name' scope="col" style={{backgroundColor: '#E3E9FB'}}>Алыбекова И.</th>
										<th className='name' scope="col" style={{backgroundColor: '#E6E7EA'}}>Исламов А.</th>
										<th className='name' scope="col">Сапарбекова С.</th>
										<th className='name' scope="col">Михалков С.</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<th className='time' scope="row">9:00</th>
										<td>
											<i style={{color: '#0262C6'}} className="bi bi-clock"/> <span style={{color: '#0262C6'}}>9:00-9:30</span>
											<p>Перманентный макияж</p>
											<span style={{color: '#6B6B6B'}}>0555123456</span>
										</td>
										<td>+</td>
										<td style={{backgroundColor: '#F6EAED'}}>
											<i style={{color: '#0262C6'}} className="bi bi-clock"/> <span style={{color: '#0262C6'}}>9:00-12:00</span>
											<p>Комплекс ухода за волосами</p>
											<span style={{color: '#6B6B6B'}}>0555123456</span>
										</td>
										<td>+</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">10:00</th>
										<td>+</td>
										<td>
											<i style={{color: '#0262C6'}} className="bi bi-clock"/> <span style={{color: '#0262C6'}}>10:00-10:30</span>
											<p>Стрижка мужская</p>
											<span style={{color: '#6B6B6B'}}>0555123456</span>
										</td>
										<td style={{backgroundColor: '#F6EAED', borderColor: '#F6EAED'}}>

										</td>
										<td style={{backgroundColor: '#E3E9FB', borderBottomColor: '#E3E9FB'}}>
											<i style={{color: '#0262C6'}} className="bi bi-clock"/> <span style={{color: '#0262C6'}}>10:00-13:00</span>
											<p>Плетение, татуаж</p>
											<span style={{color: '#6B6B6B'}}>0777444333</span>
										</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">11:00</th>
										<td>+</td>
										<td>
											<a href="#">изменить</a>
											<i style={{marginLeft: '7px'}} className="bi bi-hand-index-thumb-fill"/>
											<i style={{marginLeft: '7px'}} className="bi bi-journals"/>
										</td>
										<td style={{backgroundColor: '#F6EAED', borderColor: '#F6EAED'}}>

										</td>
										<td style={{backgroundColor: '#E3E9FB', borderColor:'#E3E9FB'}}>

										</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">12:00</th>
										<td>+</td>
										<td>
											<ul>
												<li>изменить</li>
												<li>завершить</li>
												<li>удалить</li>
											</ul>
										</td>
										<td style={{backgroundColor: '#F6EAED', borderTopColor: '#F6EAED'}}>
											<a href='#'>изменить</a>
										</td>
										<td style={{backgroundColor: '#E3E9FB', borderColor:'#E3E9FB'}}>

										</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td style={{backgroundColor: '#0262C6'}}>
											<i style={{color: '#fff'}} className="bi bi-clock"/> <span style={{color: '#fff'}}>12:00-15:00</span>
											<p style={{color: '#fff'}}>Свадебная прическа</p>
											<span style={{color: '#fff'}}>0552465656</span>
										</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">13:00</th>
										<td style={{backgroundColor: '#0262C6'}}>
											<i style={{color: '#fff'}} className="bi bi-clock"/> <span style={{color: '#fff'}}>13:00-13:30</span>
											<p style={{color: '#fff'}}>Укладка волос</p>
											<span style={{color: '#fff'}}>запись завершена</span>
										</td>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#E3E9FB', borderColor:'#E3E9FB'}}>
											<a href="#">изменить</a>
										</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td style={{backgroundColor: '#0262C6', borderColor: '#0262C6'}}>

										</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">14:00</th>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#F6EAED', borderBottomColor: '#F6EAED'}}>
											<i style={{color: '#0262C6'}} className="bi bi-clock"/> <span style={{color: '#0262C6'}}>14:00-15:00</span>
											<p>Макияж</p>
											<span style={{color: '#6B6B6B'}}>0777444333</span>
										</td>
										<td>+</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td style={{backgroundColor: '#0262C6', borderColor: '#0262C6'}}>

										</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">15:00</th>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#F6EAED', borderTopColor: '#F6EAED'}}>
											<a href='#'>изменить</a>
										</td>
										<td style={{backgroundColor: '#E3E9FB'}}>
											<i style={{color: '#0262C6'}} className="bi bi-clock"/> <span style={{color: '#0262C6'}}>15:00-16:00</span>
											<p>Окрашивание волос</p>
											<span style={{color: '#6B6B6B'}}>0777444333</span>
										</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td style={{backgroundColor: '#0262C6', borderColor: '#0262C6', color: '#fff'}}>
											запись завершена
										</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">16:00</th>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#E3E9FB', borderTopColor: '#E3E9FB'}}>
											<a href="#">изменить</a>
										</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">17:00</th>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">18:00</th>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									<tr>
										<th className='time' scope="row">19:00</th>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td>+</td>
										<td style={{backgroundColor: '#E6E7EA'}}>Не рабочее время</td>
										<td>+</td>
										<td>+</td>
									</tr>
									</tbody>
								</table>
							</div>
							<div className='table-footer-buttons'>
								<a href="#" className="btn">#журнал записей</a>
								<a href="#" className="btn">#клиентская база</a>
								<a href="#" className="btn">#онлайн запись</a>
								<a href="#" className="btn">#расчет зарплаты</a>
								<a href="#" className="btn">#складской учет</a>
								<a href="#" className="btn">#расходы</a>
								<a href="#" className="btn">#отчеты</a>
							</div>
							<div className='row table-footer'>
								<div className="col-3">
									<p>Поддержка:</p>
									<span>help@moorecrm.com</span>
								</div>
								<div className="col-3">
									<p>Сотрудничество:</p>
									<span>go@moorecrm.com</span>
								</div>
								<div className="col-3">
									<p>Наш телеграм:</p>
									<span>telegram</span>
								</div>
								<div className="col-3">
									<p>Подробнее о системе:</p>
									<a href="#">Посмотреть</a>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Register;