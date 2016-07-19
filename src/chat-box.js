import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatLine from './chat-line';

export default class ChatBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  componentDidMount() {
    setInterval(this.update.bind(this), 1900);
  }

  update() {
    this.setState({index: this.state.index + 1});
  }

  getMessages() {
    return this.props.messages.slice(0, this.state.index);
  }

  render() {
    let messageElements = this.getMessages().map((message, i) => <ChatLine {...message} key={i}/>);

    return <div className="ChatBox">
      <div className="ChatBox__header">Conversation</div>
      <div className="ChatBox__body">
        <ReactCSSTransitionGroup transitionName="transition" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {messageElements}
        </ReactCSSTransitionGroup>
      </div>
      <div className="ChatBox__composer">
      </div>
    </div>;
  }
}
