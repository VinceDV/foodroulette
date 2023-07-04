import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left fixed-bottom' style={{opacity:"0.6"}}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/home'>
          FoodRoulette.com
        </a>
      </div>
    </MDBFooter>
  );
}