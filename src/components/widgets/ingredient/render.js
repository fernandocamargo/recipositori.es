import React from 'react';

export default ({ className, label, src }) => (
  <article className={className}>
    <dl>
      <dt>{label}</dt>
      <dd>
        <img src={src} />
      </dd>
    </dl>
  </article>
);
