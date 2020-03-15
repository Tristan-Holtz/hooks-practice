import React from 'react';

const Ideas = ({ ideas }) => {
  return (
    <section>
      {ideas.map(idea => (
        <article>
          <h3>{idea.title}</h3>
          <p>{idea.idea}</p>
        </article>
      ))}
    </section>
  );
};

export default Ideas;
