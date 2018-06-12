import React, { Component } from 'react';

import IssueReaction from './IssueReaction';

export default class IssueButton extends Component {
  state = {
    issue: this.props.issue,
    showReactions: false
  };

  onClick = () => {
    this.setState(prevState => ({
      showReactions: !prevState.showReactions
    }));
  };

  render() {
    if (this.state.issue.node.reactions.edges.length > 0) {
      return this.state.showReactions ? (
        <div>
          <IssueReaction issue={this.state.issue} />
          <button onClick={this.onClick}>Hide Reactions</button>
        </div>
      ) : (
        <button onClick={this.onClick}>Show Reactions</button>
      );
    }
    return <small>No reactions yet ...</small>;
  }
}
