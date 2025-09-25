import {Link} from "react-router-dom"


export function NotFound(){
    return(
     <div className="flex flex-col justify-center items-center gap-3 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>

        

        <p className="text-gray-600 mb-6">O que você está procurando não foi encontrado</p>

        <Link 
          className="bg-red-600 text-white p-2 rounded hover:underline"
          to="/"
        > 
          Voltar para a Home
        </Link>

     </div>
    )
}