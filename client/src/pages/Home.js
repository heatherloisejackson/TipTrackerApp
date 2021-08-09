import React from 'react';
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';

// Import the query we are going to execute from its file
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
