import React from 'react'
import  './cards.css'

export default function Cards() {
  return (
   
        <div className="cardss">
          
            <div className="prof-img">
            <img src="data:image/jpeg;base64,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" alt="" />
            </div>                
            <div className="quote">
                 <p> <span>&#10077;</span> I always wanted to learn UI design but due to a lack of motivation, I was constantly procrastinating. But thanks to the team Bluelearn for organising this Designathon event where we had to form a team and solve a problem with our design skills.</p>   
             </div>
             <div className="username">
            <h3>Sneha Biswas</h3> 
             </div>
        </div>
  
  )
}