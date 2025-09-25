import {Link} from "react-router-dom"
import NotFoundImage from "..assets/img/404-NotFound.png"

export function NotFound(){
    return(
     <div className="">
        <h1 className="">404 - Página não encontrada</h1>

        <img className="" src={NotFoundImage} alt="Página não encontrada" />

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