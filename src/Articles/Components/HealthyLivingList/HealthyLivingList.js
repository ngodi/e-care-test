import React from 'react';

import './HealthyLivingList.css';

import HealthyLivingItem from '../HealthyLivingItem/HealthyLivingItem';

import { healthTipsData } from '../../Data/HealthTipsData';
import Pagination from '../Pagination/Pagination';

export default () => {
    const healthTipsLising = healthTipsData.map(({image, title, date, comments, description }, i) => (
        <HealthyLivingItem key={i} image={image} title={title} date={date} comments={comments} description={description} />
    ))
    return (
        <div className="healthy-living-list">
           <div>
              <h2 className=" heading w-100 text-center text-secondary p-3 mt-5 mb-3">
                 healthy living
              </h2>
          </div>
          <div className="health-list-content">
              {
                  healthTipsLising
              }
          </div>
          <Pagination />
        </div>
    )
}