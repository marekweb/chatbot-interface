import React from 'react';
import ReactDOM from 'react-dom';
import ChatBox from './chat-box';

import data from './messages';

ReactDOM.render(<ChatBox messages={data.messages}/>, document.getElementById('container'));
