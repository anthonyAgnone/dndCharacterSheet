import React from 'react';

const ClassList = ({ data }) => {
  const classElements = data.map(cClass => (
    <div key={cClass._id} id={cClass._id}>
      <h1>{cClass.name}</h1>
      <a href={cClass.url} target="_blank" rel="noopener noreferrer">
        {cClass.url}
      </a>
    </div>
  ));
  return <div>{classElements}</div>;
};

export default ClassList;
