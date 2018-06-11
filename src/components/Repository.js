import React from 'react';

import RepositoryIssues from './RepositoryIssues';

export default ({ repository, onFetchMoreIssues }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repository.url}>{repository.name} </a>
      </p>

      <RepositoryIssues
        repository={repository}
        onFetchMoreIssues={onFetchMoreIssues}
      />
    </div>
  );
};
