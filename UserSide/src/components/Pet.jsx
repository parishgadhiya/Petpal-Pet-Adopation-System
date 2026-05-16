import React from 'react'
import { Link } from "react-router-dom";
function Pet({pet}) {
   

    
    return (
        <div className="col-xl-4 col-md-6 mb-4">
            <div className="animal__item animal__item-two animal__item-three shine-animate-item h-100">
                <div className="animal__thumb animal__thumb-two shine-animate">
                    <Link to={`/petdetails/${pet.id}`}>
                        <img src={pet.url} alt={pet.name} style={{ height: '250px', objectFit: 'cover', width: '100%' }} />
                    </Link>
                </div>
                <div className="animal__content animal__content-two">
                    <h4 className="title">
                        <Link to={`/petdetails/${pet.id}`}>{pet.name}</Link>
                    </h4>
                    <div className="pet-info">
                        <ul className="list-wrap">
                            <li>Age: <span>{pet.age}</span></li>
                            <li>Color: <span>{pet.color}</span></li>
                        </ul>
                    </div>
                    <div className="location">
                        <i className="flaticon-placeholder" />
                        <span>{pet.addr}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pet