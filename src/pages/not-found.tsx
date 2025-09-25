import {Link} from "react-router-dom"


export function NotFound(){
    return(
     <div className="">
        <h1 className="">404 - Página não encontrada</h1>

        

        <p className="">O que você está procurando não foi encontrado</p>

        <Link 
          className=""
          to="/"
        > 
          Voltar para a Home
        </Link>

     </div>
    )
}