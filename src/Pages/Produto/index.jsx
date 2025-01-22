import { useParams } from "react-router-dom"



export default function Produto(){

const {id} = useParams()
    /*const {id} = useParams(
        {
            id:1,
            nome:"Feijão camil",
            descrição:"Peso 1ml"
        },
        {
            id:2,
            nome:"Arroz Camil",
            descrição:"Peso 1ml"
        },
        {
            id:3,
            nome:"Carne friboy",
            descrição:"Peso 1ml"
        },
    
)*/
const array1 = [
      {
            id:1,
            nome:"React",
            descrição:"O React permite que você crie interfaces de usuário a partir de peças individuais chamadas componentes." +
            "Crie seus próprios componentes React como , e. Em seguida, combine-os em telas inteiras, páginas e aplicativos."
        },
        {
            id:2,
            nome:"NodeJs",
            descrição:"Execute JavaScript em todos os lugares"+
            "O Node.js® é um tempo de execução JavaScript gratuito, de código aberto e multiplataforma ambiente que permite aos desenvolvedores criar servidores, aplicações web ferramentas e scripts de linha de comando."
        },
        {
            id:3,
            nome:"C#",
            descrição:"A linguagem de programação de código aberto, moderna e inovadora para a criação de todos os seus aplicativos."
        }
    ]

const found = array1.find((element) => element.id === parseInt(id))


    return(
     
       <div>
         <p>{ found.id}</p>
         <p>{ found.nome}</p>
         <p>{ found.descrição}</p>
       </div>
   


       
    )
}