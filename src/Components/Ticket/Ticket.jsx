import "./Ticket.scss"
import { useState } from "react"


const Ticket = (props) => {

    const [count, setCount] = useState(0)

    const handleClickDecrement = () => {
      setCount(count - 1)
    }

    const handleClickIncrement = () => {
        setCount(count + 1)
      }

    return (
        <div className="ticket">
             <p className="title">{props.name}</p>
            <p className="title">{props.role}</p>
        <div className="card">
            <p className="title2">counter</p>
            <p className="count">{count}</p>
            <button onClick={handleClickIncrement}>+</button>
            <button onClick={handleClickDecrement}>-</button>
        </div>
        </div>
    )
}


export default Ticket;