import React, { useState, useRef } from 'react'
import ClaimModal from 'Modals/Claim'

const Home: React.FC = () => {
  const childRef = useRef(null);
  return (
      <ClaimModal ref={childRef}/>
  );
}


export default Home;
