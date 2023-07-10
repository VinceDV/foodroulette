import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function App() {
  return (
    <MDBFooter bgColor='transparent' className='text-center text-lg-left fixed-bottom text-light'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='/home'>
          FoodRoulette.com
        </a>
      </div>
    </MDBFooter>
  );
}