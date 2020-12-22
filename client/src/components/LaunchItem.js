import React from 'react';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span className={`text-${launch_success ? 'success' : 'danger'}`}>
              {mission_name}
            </span>
          </h4>
          <p>Date: {format(parseISO(launch_date_local), 'Pp')}</p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
