import React from 'react'

const StarRating = ({Rate,setRate}) => {
    return (
        <div className="m-3">
            {[...Array(10)].map((_,i)=> {
                const rateval=i+1;
                return(
                    <label key={i}>
                        <input type="radio" name="rating" value={rateval} onClick={(e)=>setRate(rateval)}></input>
                        <span className="stars"  style={{color : rateval <= Rate ?'red':'grey'}}>&#9733;</span>
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating;
