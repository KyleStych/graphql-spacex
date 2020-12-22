import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

// return data.rates.map(({ currency, rate }) => (
//   <div key={currency}>
//     <p>
//       {currency}: {rate}
//     </p>
//   </div>
// ));

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error (womp womp)</p>;
  if (error) {
    console.log(error);
    return <h2>Error (womp womp)</h2>;
  }
  console.log(data);

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <p>{error}</p>
    </div>
  );
};

export default Launches;
