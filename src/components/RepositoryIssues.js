import React from 'react';

import IssueReaction from './IssueReaction';

export default ({ repository }) => {
  return (
    <ul>
      {repository.issues.edges.map(issue => (
        <li key={issue.node.id}>
          <a href={issue.node.url}>{issue.node.title}</a>

          <IssueReaction issue={issue} />
        </li>
      ))}
    </ul>
  );
};
