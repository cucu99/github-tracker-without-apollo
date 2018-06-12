import React from 'react';

import IssueButton from './IssueButton';

export default ({ repository, onFetchMoreIssues, onStarRepository }) => {
  return (
    <div>
      <ul>
        {repository.issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>{' '}
            <IssueButton issue={issue} />
          </li>
        ))}
      </ul>
      <hr />
      {repository.issues.pageInfo.hasNextPage && (
        <button onClick={onFetchMoreIssues}>More</button>
      )}{' '}
      <button
        type="button"
        onClick={() =>
          onStarRepository(repository.id, repository.viewerHasStarred)
        }
      >
        {repository.viewerHasStarred ? 'Unstar' : 'Star'}
      </button>
    </div>
  );
};
