import React from 'react';

import RepositoryIssues from './RepositoryIssues';

export default ({ repository, onFetchMoreIssues, onStarRepository }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repository.url}>{repository.name}</a>{' '}
        <span>
          stars:<small>{repository.stargazers.totalCount}</small>
        </span>
      </p>

      <RepositoryIssues
        repository={repository}
        onFetchMoreIssues={onFetchMoreIssues}
        onStarRepository={onStarRepository}
      />
    </div>
  );
};
