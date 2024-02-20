import "./error.css"
import error from "../../../Images/error.png"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const err = useRouteError();
   

    return (
        <div className="error-page">
            <img src={error} className="error-image"/>
            <h1 className="error-oops">OOPS!!!!</h1>
            <h2>{err.status} : {err.statusText}</h2>
            <h2>Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</h2>
        </div>
    )
}

export default ErrorPage;
