import type { FallbackProps } from "react-error-boundary";


export function Fallback({error , resetErrorBoundary}: FallbackProps){
    return(
        <div className="">

           <h1 className="">Algo deu errado</h1>

           <p className="">{error.message}</p>

           <button onClick={resetErrorBoundary} className="">Tentar Novamente</button>

        </div>
    )
}