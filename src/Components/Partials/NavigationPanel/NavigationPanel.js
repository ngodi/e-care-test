import React from 'react';

import './NavigationPanel.css';

export default () => {
  return(
      <div className="navigation-panel">
          <a href="#">Doctor</a><span>|</span>
          <a href="#">Hospital</a><span>|</span>
          <a href="#">Unit</a><span>|</span>
          <a href="#">Emergency</a><span>|</span>
          <a href="#">Laboratory</a>
      </div>
  )
}