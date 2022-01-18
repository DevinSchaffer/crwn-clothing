import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from './directory.selectors';

import MenuItem from '../menu-item/menu-item';

import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryContainer>
      {
        sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))
      }
    </DirectoryContainer>
  );
};

export default Directory;