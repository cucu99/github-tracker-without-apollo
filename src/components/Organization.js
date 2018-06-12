import React from 'react';

import Repository from './Repository';

export default ({ organization, onFetchMoreIssues, onStarRepository }) => {
  if (organization.repository === null) {
    return (
      <p>
        <strong>Something went wrong:</strong> Couldn't find the repository :(
      </p>
    );
  }

  return (
    <div>
      <p>
        <strong>Issues from Organization:</strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
      <Repository
        repository={organization.repository}
        onFetchMoreIssues={onFetchMoreIssues}
        onStarRepository={onStarRepository}
      />
    </div>
  );
};
