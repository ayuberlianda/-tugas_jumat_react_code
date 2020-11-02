import React, {Component}  from 'react';

class Footer extends Component {
	constructor(props){
		super(props)
		this.state = {
			pesanDariState :'Ini Pesan Untuk Indonesia'	
		}
		this.ubahDataState = this.ubahDataState.bind(this)

	}

	ubahDataState(e){
		e.preventDefault()

		this.setState({pesanDariState:"Indonesia, sebuah negara kaya yang terbentang dari Sabang sampai Merauke. Berbanggalah kita menjadi orang yang lahir dan besar di Indonesia, karena Indonesia adalah negara indah dengan segala keunikan yang berbeda dengan negara manapun di dunia."
		})
	}
	

	render(){
		return (
		<div>
		<center>
		<p>{this.props.pesanDariProps}</p>
		<p>{this.state.pesanDariState}</p>

		<a href="/" onClick={(e)=>this.ubahDataState(e)}>Indonesia</a>
		
		</center>

		<p>Tugas React 3</p>
		<h6>Ayu Berlianda Putri</h6>
		</div>

			);
	}
}
export default Footer;