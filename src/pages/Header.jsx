import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import {
  BsFillBellFill,
  BsPersonCircle,
  BsSearch,
} from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { LiaSlashSolid } from "react-icons/lia";
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header-left'>
        <button className='btn-h'><MdArrowOutward />Payouts <LiaSlashSolid /></button>
        <button className='btn-dropdown'>Single</button>
        <button className='btn-h'>Bulk</button>
        <button className='new-button-h'>New</button>
        <button className='btn-h'>Tally</button>
        <button className='btn-h-last'>Payout Links</button>
      </div>

      <div className='header-right'>
      <Dropdown>
          <Dropdown.Toggle className='btn-dropdown' id='payout-dropdown'>
          <GoPlus /> PAYOUT  | <RiArrowDropDownLine />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='#'>One</Dropdown.Item>
            <Dropdown.Item href='#'>Two</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <BsSearch className='icon-header' />
        <BsFillBellFill className='icon-header' />
        <BsPersonCircle className='icon-header-user' />
      </div>
    </header>
  );
}

export default Header;
