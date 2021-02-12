import React from 'react';
import './ClientInfo.css';
import flag from '../assets/images/flag.png';
import {NavLink} from "react-router-dom";

const ClientInfo = () => {
	return (
		<div className='container-fluid'
				 style={{backgroundColor: '#E5E5E5', padding: '30px', height: '1285px', width: 'auto'}}>
			<div className='text-center mb-3'>
				<NavLink className='mr-3' to='/'>На главную</NavLink>
			</div>
			<div className='client-info'>
				<div className='client-info-header'>
					<i className="bi bi-pencil-square"/>
					<a href="#">Изменить клиента</a>
					<i className="bi bi-x"/>
				</div>

				<div className="form">
					<form>
						<div className='form-group'>
							<input type="text" className='form-control full-name' placeholder='Елизар Бекметев'/>
						</div>
						<div className="form-group row">
							<div className="col-3" style={{position: 'relative'}}>
								<img className='flag' src={flag} alt="flag"/>
								<input type="text" className="form-control phone"/>
							</div>
							<div className="col-9">
								<input type="text" className="form-control phone-2" placeholder='555434343'/>
							</div>
						</div>
						<div className='form-group'>
							<input type="text" className='form-control email' placeholder='gmail@gmail.com'/>
						</div>
						<div className='form-group row'>
							<div className='col-3'>
								<span>Дата рождения</span>
							</div>
							<div className='col-9'>
								<input type="text" className='form-control birthday' placeholder='12.05.1995'/>
							</div>
						</div>
						<div className='form-group row'>
							<div className='col-3'>
								<span>Введите скидку</span>
							</div>
							<div className='col-9'>
								<input type="text" className='form-control birthday' placeholder='3%'/>
							</div>
						</div>
						<div className='form-group'>
							<input type="text" className='form-control full-name' placeholder='Постоянные клиенты'/>
						</div>
						<div className='form-group'>
							<input type="text" className='form-control full-name' placeholder='Заметка / Комментарий'/>
						</div>
						<div className='form-group' style={{marginTop: '50px'}}>
							<label className='balance' htmlFor="balance">Баланс клиента</label>
							<i className="bi bi-patch-question"/>
							<input type="text" id='balance' className='form-control full-name' placeholder='-2000'/>
						</div>
						<div className='row mt-4'>
							<div className="col-6 abonement">
								<h5>Абонементы</h5>
							</div>
							<div className="col-6 qty">
								<p>Остаток количества посещений</p>
							</div>
						</div>
						<div className='row info'>
							<div className="col-12 col-sm-6">
								<span>Название</span>
								<p style={{backgroundColor: '#F2E5E7', color: '#CA3725'}}>Абонемент недействи</p>
								<p>Абонемент на стрижку</p>
								<p>Абонемент на стрижку</p>
								<p>Абонемент на стрижку</p>
							</div>
							<div className="col-12 col-sm-2">
								<span style={{marginRight: '5px'}}>Кол-во</span>
								<p style={{backgroundColor: '#F2E5E7', color: '#CA3725'}}>0</p>
								<p>10</p>
								<p>10</p>
								<p>5</p>
							</div>
							<div className="col-12 col-sm-4">
								<span>Действует до</span>
								<p style={{backgroundColor: '#F2E5E7', color: '#CA3725'}}>12.05.2020 <i
									className="bi bi-three-dots-vertical"/></p>
								<ul>
									<li>обновить</li>
									<li>возврат</li>
									<li>удалить</li>
								</ul>
								<p>12.05.2020 <i className="bi bi-three-dots-vertical"/></p>
							</div>
						</div>
					</form>
				</div>
				<button type='submit' className='edit-btn'>Сохранить</button>
			</div>
		</div>

	);
};

export default ClientInfo;