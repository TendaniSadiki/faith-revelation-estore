import React from 'react'
import Header from '../../components/banner/Header';
import styled from 'styled-components';
import { AiFillCloseCircle } from "react-icons/ai";
import './Cart.css';

export default function cart() {
  
  return (
    <>
     <Banner>
        <Header/>
    </Banner>
      <h1 className='heading'>Cart page</h1>
      <table className='cart-table' width={5}>
        <thead className='cart-header'>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className='cart-row'>
            <th scope='row'><img src='' alt='item'/></th>
            <td className='text'>Name</td>
            <td className='text'><button className='qty-btn'>+</button>Quantity<button className='qty-btn'>-</button></td>
            <td className='text'>Price</td>
            <td className='text'><button><AiFillCloseCircle size={20} color='red'/></button></td>
          </tr>
        </tbody>
      </table>
      <div className='total'>
        <h4>Total: R0</h4>
      </div>
      <div>
        <button className='cart-checkout'>Checkout</button>
      </div>
    </>
  )
}

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`