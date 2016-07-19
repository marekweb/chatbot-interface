import React from 'react';
import classNames from 'classnames';

export default function ChatLine({sender, message, image}) {
  const cls = classNames('ChatLine__message', {
    'ChatLine__message--self': !!sender,
    'ChatLine__message--other': !sender
  });

  if (image) {
    return <div className="ChatLine">
      <div className="ChatLine__image">
        <img className="ChatLine__image__img" src={image}/>
      </div>
    </div>;
  }

  return <div className="ChatLine">
    <div className={cls}>{message}</div>
  </div>;
}
