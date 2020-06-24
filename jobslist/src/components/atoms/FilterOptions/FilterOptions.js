import React from "react";
import "./filterOptions.css"


const FilterOptions = ({filters, onClick})=>{
    return(
        <div className="filterOptions__container" >
            {filters.map(item => {
                return(
                    <div className="filterOptions__filter" onClick={onClick}>
                        <h3 id={item}>{item}</h3>
                    </div>
                )
            })}

        </div>
    )
}

export default FilterOptions;