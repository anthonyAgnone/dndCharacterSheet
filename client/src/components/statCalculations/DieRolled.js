import React from 'react';
import styled from 'styled-components';

import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';

const Die = styled.img`
  opacity: ${props => (props.isLowest ? '.1' : '1')};
`;

const arrayOfImages = [one, two, three, four, five, six];

export default function DieRolled({ num, isLowest }) {
  return <Die id={num} isLowest={isLowest} src={arrayOfImages[num - 1]} />;
}
