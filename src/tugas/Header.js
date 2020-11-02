import React, {Component} from 'react';

class Header extends Component{
	constructor(props){
		super(props)
		this.state = {
			isipesan : "Keberagaman Indonesia"
		};

		this.handlePesanHeader = this.handlePesanHeader.bind(this);
		this.pesankhusus = this.pesankhusus.bind(this);
	}



	handlePesanHeader(ValueKe1, Ke2, e){
		e.preventDefault()

		alert(ValueKe1)
		alert(Ke2)
	}


	pesankhusus(e){
		e.preventDefault()

		this.setState({isipesan:"Bhinneka Tunggal Ika adalah moto atau semboyan bangsa Indonesia yang tertulis pada lambang negara Indonesia, Garuda Pancasila. Frasa ini berasal dari bahasa Jawa Kuno yang artinya adalah “Berbeda-beda tetapi tetap satu”."
		})
	}

	render(){
		return(
			<div>
			<center>
			<a href="/" onClick={(e)=>this.handlePesanHeader("Cintai Indonesia","Bangga Jadi Indonesia",e)}>INDONESIA</a>
			<br/>
			
			<p>{this.state.isipesan}</p>
			<a href="/" onClick={(e)=>this.pesankhusus(e)}>Bhineka Tunggal Ika</a>
			</center>
			</div>
			)
	}
}

export default Header;
