import React from 'react';

export default ({ issue }) => {
  return (
    <ul>
      {issue.node.reactions.edges.map(reaction => (
        <li key={reaction.node.id}>{reaction.node.content}</li>
      ))}
    </ul>
  );
};
