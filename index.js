import React, { Component} from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Contador from './contador';

//let nombre = "Rigoberto";

/*function A(props){
  return <p> hola {props.name} </p>;
}
function B(props){
  return <p> {props.name} : 31</p>;
}


class MiComponentClass extends Component{
  render(){
    return <p>Hello word Bolivia </p>;
  }
}

class Contador extends Component{

   constructor(props){
     super(props);

     this.state= {
      contador:0
     }
   }
  contador = ()
    =>{this.setState
        ({contador: this.state.contador+1})
      } 
  render(){
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick = {this.contador}>Aumentar</button>
      </div>
    )
  }
}
*/

 class Formulario extends Component{
   constructor(props){
     super(props);

     this.state={
       email:'',
       password:''
     }
   }
  
  sincronizarCambios(value,property){
    let state ={};

    state[property]=value;
    this.setState(state);
  }
  
  submitForm = ()
    =>{console.log(this.state)
      } 

   render(){
     return(
      <form>
        <input 
          onChange={(event)=>{this.sincronizarCambios(event.target.value, 'email')}}
          type="email"
          value={this.state.email}
          placeholder="email"/>        
        <input
          onChange={(event)=>{this.sincronizarCambios(event.target.value, 'password')}}
          type="password"
          value={this.state.password}
          placeholder="******"/>
        <div>
          <input
            onClick={this.submitForm}
            type="submit"
            value="Iniciar Sesión"/>
        </div>
      </form>
     )
   }
 }
 //  ARREGLOS
 class Arreglo extends Component{
   constructor(props){
     super(props);

     this.state={
       articles:[]
     }
   }

   componentDidMount(){
     let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

      promesa.then(response=> response.json()).then((data)=>{
        // console.log(data);
        this.setState({
          articles:data
        })
      })
     
   }
   
   render(){
     return(
       <div> {this.state.articles.map((article)=>{
                return <div className="card" style={{ backgroundColor: 'red',color:'yellow'}}><p>{article.title}</p></div>
                      
                })
              }
       </div>
     )
   }
 }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


render(){
  let nombre = "Rigoberto";
    return(
      <div>
        < Formulario/>
        <Contador/>
        <Arreglo/>
        
    
      </div>
    )
  };  
  /*  // <A name = {nombre}/>
       // <B name = {nombre}/>
       // < Contador/> */
  }

render(<App />, document.getElementById('root'));
