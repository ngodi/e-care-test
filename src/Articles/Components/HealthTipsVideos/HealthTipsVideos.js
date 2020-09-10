import React from 'react';

import './HealthTipsVideos.css';

export default () => {
    return (
        <div className="health-tips-videos">
             <header class="h2 heading text-center text-secondary p-3 mt-5 mb-3">
              health tips videos
             </header>
            <section className="container mb-4" style={{height: '300px', maxWidth: '650px', background: `url(./Images/image-2.png) no-repeat`, backgroundSize: 'cover'}}>
                <img src="./images/health-tips1.png" alt="" style={{display: "none" }}/>
            </section>
            <section className="row align-items-center">
           <div className="page-item">
                <a className="page-link bg-tertiary text-white" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </div>
            <div className="col">
                <img src="./Images/health-tips1.png" alt="" className="img-thumbnail" />
            </div>
            <div className="col">
                <img src="./Images/health-tips2.png" alt="" className="img-thumbnail" />
            </div>
            <div className="col">
                <img src="./Images/hero-image.png" alt="" className="img-thumbnail" />
            </div>
            <div className="col">
                <img src="./Images/health-tips1.png" alt="" className="img-thumbnail" />
            </div>
            <div className="col">
                <img src="./Images/health-tips1.png" alt="" className="img-thumbnail" />
            </div>
            <div className="page-item">
                <a className="page-link bg-tertiary ml-2 text-white" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </div>
        </section>
        </div>
    )
}