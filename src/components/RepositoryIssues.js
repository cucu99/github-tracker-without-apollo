import React from 'react';

import IssueReaction from './IssueReaction';

export default ({ repository, onFetchMoreIssues }) => {
  return (
    <div>
      <ul>
        {repository.issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>

            <IssueReaction issue={issue} />
          </li>
        ))}
      </ul>

      <hr />
      {repository.issues.pageInfo.hasNextPage && (
        <button onClick={onFetchMoreIssues}>More</button>
      )}
    </div>
  );
};
