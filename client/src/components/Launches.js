import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h2>Error (womp womp)</h2>;
  }
  // console.log(data);

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <>
        {data.launches.map(launch => (
          <LaunchItem key={launch.mission_name} launch={launch} />
        ))}
      </>
    </>
  );
};

export default Launches;
