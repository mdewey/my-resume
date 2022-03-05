import React from 'react';

const Hideablelabel = ({show, children}) => {
  if (show) {
    return <p className='project-label'>{children}</p>
  } 
  return <></>
}

export default Hideablelabel;
