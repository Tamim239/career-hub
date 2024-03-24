import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div>
        <h1>ErrorPage oops!!</h1>
        <Link to="/"><button>Go Back Home</button></Link>
    </div>
  )
}
