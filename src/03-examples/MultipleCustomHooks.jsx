import { useFetch, useCounter  } from "../Hooks"
import { LoadingQuotes, Quote } from "./";
// import { LoadingQuotes } from "./LoadingQuotes";
// import { Quote } from "./Quote";



export const MultipleCustomHooks = () => {

    const{counter, increment}= useCounter(1);

    const{data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0]

   
    return (
        <>
            <h1>Breaking Bad quotes</h1>

            <hr />

            {/* {
                (isLoading)
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1"> { quote } </p>
                        <footer className="blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            } */}

            {
                (isLoading)
                ? <LoadingQuotes/>
                : <Quote author={author} quote={quote}/>
            } 
            

            
            

            <button 
                onClick={() => increment()} 
                disabled={isLoading}
                className="btn btn-primary">
                Next quote
            </button>

           
        </>
    )
}
