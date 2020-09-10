import React from 'react';

import './Articles.css';

import SubHeader from '../Components/Partials/SubHeader/SubHeader';
import TopListed from './Components/TopListed/TopListed';
import HealthyLivingList from './Components/HealthyLivingList/HealthyLivingList';
import HealthTipsVideos from './Components/HealthTipsVideos/HealthTipsVideos';
import DoctorsTips from './Components/DoctorsTips/DoctorsTips';

export default () => {
    return (
      <div className="articles">
          <SubHeader image = "./Images/hero-image.png" heading = "Articles for you" description = "Get Healthy Tips from Doctors and Nurses to get a healthy lifestyle" />
          <TopListed />
          <HealthyLivingList />
          <HealthTipsVideos />
          <DoctorsTips heading="health tips from doctors" pagination="true"/>
      </div>
    )
}