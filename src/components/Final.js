import React from 'react'
import { Link } from 'react-router-dom'

const Final = () => {
    return (
        <div>
            <h1 style={{marginTop: "200px", textAlign:"center"}}>Thankyou for shopping with us.</h1>
            <Link to="/" style={{marginLeft: "700px", marginTop: "300px", fontSize: "20px"}}>Go Back</Link>
        </div>
    )
}

export default Final
