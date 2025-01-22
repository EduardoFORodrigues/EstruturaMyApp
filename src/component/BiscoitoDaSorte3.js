import React,{Component} from "react";
import '../estilo.css'

class BiscoitoDasorte3 extends Component{

    constructor(props){
        super(props);
        this.state = {

            textoFrase:''
        };

       this.quebrabiscoito = this.quebrabiscoito.bind(this) 

        this.frases = [
            'Siga os bons e aprenda com eles',
            'Siga os bons e aprenda com sabe',
            'A vida trará coisas boas se tiver paciência.',
            'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
            'Não compense na ira o que lhe falta na razão.',
            ' Defeitos e virtudes são apenas dois lados da mesma moeda.',
            'A maior de todas as torres começa no solo.',
            'Não há que ser forte. Há que ser flexível.'    

            ]

    }

    quebrabiscoito(){
     
        let state = this.state;
        let numeroaletorio = Math.floor(Math.random() * this.frases.length)  
        state.textoFrase = this.frases[numeroaletorio];  
        this.setState(state);  
              
    }
    render(){
        return(
            <div className="container">
                <img src={require('../assets/biscoito.png')} alt="biscoito.png"/>
                <Botao nome="Biscoito da sorte" acaobtn={this.quebrabiscoito} />
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        )
    }
}

class Botao extends Component{

    render(){
        return(
            <div>
                <button onClick={this.props.acaobtn} >{this.props.nome}</button>
            </div>
        )
    }
}
export default BiscoitoDasorte3;