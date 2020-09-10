import React from 'react';

import './DoctorsTips.css';

import { doctorsTips } from '../../Data/HealthTipsData';
import Pagination from '../Pagination/Pagination';

export default ({ heading, pagination}) => {
    return (
        <div className="doctors-tips">
             <header className="h2 heading w-100 text-center text-secondary p-3 mt-5 mb-3">
               {heading}
             </header>
             <div className="doctors-tips-body">
                 {
                     doctorsTips.map(({image, drName, tips}, i) => (
                         (i%2 == 0)? 
                         (
                            <div>
                            <div key={i} className="row align-items-center">
                                <div className="col-md-6 mb-3">
                                    <img src={image} alt="" style={{width: "100%"}} />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="text-tertiary">
                                        {drName}
                                    </h5>
                                    <p className="text-muted">
                                        {tips}
                                    </p>
                                </div>
                            </div>
                          <hr className="border border-tertiary w-100" />
                          </div>
                         ) :
                         (
                        <div>
                        <div key={i} className="row align-items-center">
                            
                            <div className="col-md-6">
                                <h5 className="text-tertiary">
                                    {drName}
                                </h5>
                                <p className="text-muted">
                                    {tips}
                                </p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <img src={image} alt="" style={{width: "100%"}} />
                            </div>
                        </div>
                      <hr className="border border-tertiary w-100" />
                      </div>
                    )
                 ))
                 }
             </div>
             {(pagination)? <Pagination /> : ""}
        </div>
    )
}