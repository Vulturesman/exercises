import React from 'react';

function Celebrity({
  name,
  image,
  profession,
  wealth,
  bio,
  age,
  sourceOfWealth,
  residence,
  citizenship,
  education,
  maritalStatus,
  children,
}) {
  return (
    <div className="celebrity">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Profession: {profession}</p>
      <p>Wealth: {wealth}</p>
      <p>Bio: {bio}</p>
      <p>Age: {age}</p>
      <p>Source of Wealth: {sourceOfWealth}</p>
      <p>Residence: {residence}</p>
      <p>Citizenship: {citizenship}</p>
      <p>Education: {education}</p>
      <p>Marital Status: {maritalStatus}</p>
      <p>Children: {children}</p>
    </div>
  );
}

export default Celebrity;