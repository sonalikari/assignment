import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='showing-info'>
        <input type='checkbox' id='showPayouts' />
        <label htmlFor='showPayouts'>Showing 1-5 payouts</label>
      </div>

      <hr />

      <table className='data-table'>
        <thead>
          <tr>
            <th>CREATED AT</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>CONTACT</th>
            <th>CREATED BY</th>
            <th>UTR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fri 9 Feb, 2:32 PM</td>
            <td>&#8377;10,000</td>
            <td>Queued</td>
            <td>Shivam Arora</td>
            <td>Aditya Sharma</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Fri 9 Feb, 1:25 PM</td>
            <td>&#8377;10,000</td>
            <td>Queued</td>
            <td>Ujjwal</td>
            <td>Aditya Sharma</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Fri 9 Feb, 12:04 PM</td>
            <td>&#8377;10,000</td>
            <td>Queued</td>
            <td>Amit Kumar</td>
            <td>Aditya Sharma</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Fri 8 Feb, 3:52 PM</td>
            <td>&#8377;50,000</td>
            <td>Queued</td>
            <td>Harsh</td>
            <td>Aditya Sharma</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Fri 6 Feb, 4:09 PM</td>
            <td>&#8377;10,000</td>
            <td>Queued</td>
            <td>Random Verma</td>
            <td>Aditya Sharma</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default Home;
