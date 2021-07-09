import React, {useState, useEffect } from 'react';
import 'tachyons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from "react-router";
import './Signin.scss';


const initialState = {
	email: '',
	pass: ''
}
toast.configure();
class Signin extends React.PureComponent {
	constructor(){
		super();
		this.state = initialState;
	}

	handleSubmit = (event) =>
	{
		const {setuser}=this.props;
		event.preventDefault();
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				pass: this.state.pass
			})
		})
		.then(response => response.json())
		.then(resp => {
			if(resp.email)
			{
				this.props.history.push('/welcome');
				toast.success('Signin successfull.', {
 									position: toast.POSITION.TOP_CENTER,
 									autoClose: 4000,
 							});
			}
			else{
				toast.error('No such user found.', {
 									position: toast.POSITION.TOP_CENTER,
 									autoClose: 4000,
 							});
			}
		})
		.catch(err => {
			console.log(err)
			alert('OOPS....something went wrong.Please try again.')
		})
	}

  handleForm = () =>{
  }
 setRole=(e)=>{
	 this.setState({role: e.target.value});
 }
 setJob=(e)=>{
	this.setState({job: e.target.value});
 }
	handleChange = (event) => {
    const {value, name} = event.target;
	  this.setState({[name]: value});
  }
	render() {
		return (
			<div className="pt3" id="work">
         <p className=" f2 fw4 mb3 ml2 ">Customer Login</p>
				<div  className="flex">
			  	<form onSubmit ={this.handleSubmit}>
								<input
								placeholder="Email"
							  className="inputval"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
								/>

								<input
								placeholder="Password"
							  className="inputval"
								name="pass"
								type="password"
								value={this.state.pass}
								onChange={this.handleChange}
								required
								/>
								<div className="flex flex-wrap justify-center items-center">
									<div className="ma2"><button type="reset" className="button-upload ">Reset</button></div>
								  <div className="ma2"><button type="submit" className="button-upload ">Login</button></div>
								</div>
				</form>

			</div>

		<ToastContainer/>
  </div>
		)
	}
}

export default withRouter(Signin);
