import React,{Component} from "react"; 
import '../style1.css'     
import '../index.css'                                                                                                                                                                                        



class cronometro2 extends Component{

constructor(props){
    super(props);
    this.state = {
        numero:0,
        botao:'Vai'
        
    }
    this.timer = null;
    this.limpar = this.limpar.bind(this)
    this.vai = this.vai.bind(this)
}
limpar(){
    if(this.timer !==null){
        clearInterval(this.timer);
        this.timer = null; 
     
    }
    else{

    let state = this.state;
    state.numero = 0;
    state.botao = 'vai';
    this.setState(state);                                                                                 
    }



  

}
vai(){
    
    let state = this.state;

    if(this.timer !==null){
        clearInterval(this.timer);
        this.timer = null;

        state.botao= 'Vai'
    }
    else{
    this.timer = setInterval(() =>{
    let state = this.state;
    state.numero  += 0.1;
    this.setState(state);

    },100)
    state.botao = 'PARAR'
    }
    this.setState(state);                                
}
    render(){
        return(
            <div className="container">
                <img src={require('../assets/cronometro.png')} className="img" alt="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>
            </div>
        )
    }
}

export default cronometro2;