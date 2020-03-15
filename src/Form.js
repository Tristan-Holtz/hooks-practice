import React, { useState } from 'react';

const Form = ({ addIdea, ideas }) => {
  const [title, changeTitle] = useState('');
  const [idea, changeIdea] = useState('');

  return (
    <form>
      <label>title</label>
      <input
        name="title"
        value={title}
        onChange={({ target: { value } }) => changeTitle(value)}
      ></input>
      <label>idea</label>
      <input
        name="idea"
        value={idea}
        onChange={({ target: { value } }) => changeIdea(value)}
      ></input>
      <button
        type="button"
        onClick={() => addIdea([...ideas, { title, idea }])}
      >
        Add IDEA
      </button>
    </form>
  );
};

export default Form;
