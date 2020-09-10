import React from 'react';

import './HealthyLivingItem.css';

export default ({image, title, date, comments, description}) => {
    return (
        <div className="healthy-living-item card mb-4 shadow">
            <img src={`./Images/${image}`} alt="..." className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-primary m-0">
                    {title}
                </h5>
                <small className="small font-weight-bold text-danger">
                    {`${date} | ${comments.length} Comments`}
                </small>
                <p className="card-text mt-3">
                    {`${description}...`}
                </p>
                <p className="card-text text-right">
                    <a href="#">
                        Continue reading
                    </a>
                </p>
            </div>
    </div>
    )
}