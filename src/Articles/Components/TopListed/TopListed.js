import React from 'react';

import './TopListed.css';

export default () => {
    return (
        <section className="top-listed row">
        <h2 className="heading w-100 text-center text-secondary p-3 mt-5 mb-3">
            top listed articles
        </h2>
        <div className="card mb-3 mx-auto" style={{maxWidth: "100%"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="./Images/top-listed.png" className="card-img" alt="honey image" style={{height: "100%"}} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            30+ old time health remedies that actually works
                        </h5>
                        <p className="card-text text-muted">
                            Honey to heal a wound, cherries for gout, cord-liver oil - belch! - to keep your eyes healthy... 
                            Your grandmother and her doctors probably swore by these home remedies, and now science is catching up with them.
                        </p>
                        <p className="card-text text-right">
                            <a href="article.html" className="text-tertiary">
                                More &raquo;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}