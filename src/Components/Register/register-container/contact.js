import React,{Component} from 'react';
import './contact.scss';
import { withRouter } from "react-router";
import 'tachyons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLink as Link } from 'react-router-hash-link';

const initialState = {
	email: '',
	fname: '',
	lname:'',
	dob:'',
  pass:'',
	cpass:''
}
toast.configure();
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }


  handleSubmit = (event) => {
		if(this.state.pass!==this.state.cpass)
		{
			 toast.error("Passwords do not match", {
									position: toast.POSITION.TOP_CENTER,
									autoClose: 4000,
							});
				this.setState(initialState);
				document.getElementById('register').reset();
		}
		else{
			event.preventDefault();
			fetch('http://localhost:3000/', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					fname: this.state.fname,
					lname: this.state.lname,
					dob: this.state.dob,
					email: this.state.email,
					pass: this.state.pass
				})
			})
			.then(response => response.json())
			.then(resp => {
				if(resp==='Success')
				{
					this.props.history.push('/welcome');
					toast.success('Registered successfully.', {
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

	}


	handleChange = (event) => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}


  render(){

    return (
      <div>
		      <p className=" black f2 fw4 mb3 ml2 ">Create new customer account</p>
		        <div className="bb bw1 mt3" ></div>
					      <form onSubmit={this.handleSubmit} id="register">
										<input
										placeholder="First Name"
							      name="fname"
										id="fname"
							      type="text"
							      value={this.state.fname}
							      onChange={this.handleChange}
										className="input-field"
							      required
							      />
										<input
										placeholder="Last Name"
							      name="lname"
										id="lname"
							      type="text"
							      value={this.state.lname}
							      onChange={this.handleChange}
										className="input-field"
							      required
							      />
							      	<input
											placeholder="Email"
							      	name="email"
							      	type="email"
							      	value={this.state.email}
							      	onChange={this.handleChange}
											className="input-field"
							      	required
							      	/>
											<input
											placeholder="DOB"
											type="date"
											name="dob"
											value={this.state.dob}
							      	onChange={this.handleChange}
											className="input-field"
											style={{padding:'0'}}
							      	/>

							      	<input
							       placeholder='Password'
							      	name="pass"
							      	type="password"
							      	value={this.state.pass}
							      	onChange={this.handleChange}
											className="input-field"
							      	required
							      	/>
											<input
							      	placeholder='Confirm Password'
							      	name="cpass"
							      	type="password"
							      	value={this.state.cpass}
							      	onChange={this.handleChange}
											className="input-field"
							      	required
							      	/>
										  <div className="flex flex-wrap justify-center items-center">
												<Link to ="/signin" style={{textDecoration:'none'}}><button className="button red">Cancel</button></Link>
									      <button className="button blue" type="submit">Register</button>
											</div>
					      </form>
		  <ToastContainer/>
     </div>
    );
  }
}

export default withRouter(Contact);
