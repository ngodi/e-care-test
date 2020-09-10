import React from 'react';

import './Pagination.css';

export default () => {
    return (
        <nav>
        <ul class="pagination justify-content-center">
            <li className="page-item">
                <a className="page-link bg-tertiary text-white" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item">
                <a className="page-link bg-tertiary ml-2 text-white" href="#">
                    1
                </a>
            </li>
            <li className="page-item">
                <a className="page-link bg-tertiary ml-2 text-white" href="#">

                    2
                </a>
            </li>
            <li className="page-item">
                <a className="page-link bg-tertiary ml-2 text-white" href="#">
                    3
                </a>
            </li>
            <li className="page-item">
                <a className="page-link bg-tertiary ml-2 text-white" href="#">
                    4
                </a>
            </li>
            <li className="page-item">
                <a className="page-link bg-tertiary ml-2 text-white" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    )
}