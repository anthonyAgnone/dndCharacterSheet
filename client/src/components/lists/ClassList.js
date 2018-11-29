import React from 'react';

const ClassList = ({ data }) => {
  const classElements = data.map(cClass => (
    <option key={cClass._id} id={cClass._id}>
      {cClass.name}
    </option>
  ));
  return (
    <div>
      <select name="classes" id="classes">
        {classElements}
      </select>
    </div>
  );
};

export default ClassList;
