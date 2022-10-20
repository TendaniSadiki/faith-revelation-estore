import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import './Profile.css';
import BannerComp from '../../components/banner/Banner';
import Footer from '../../components/Footer/Footer';

export default function profile() {
  return (
    <>
	<Container>
    <Banner>
        <BannerComp/>
    </Banner>
			<h1>My Profile</h1>
			<div className='profile'>
				<div className='image-card'>
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
					<h2 className='ans'>Name</h2>
					<h2 className='ans'>Email</h2>
				</div>
				<div className='button-card'>
					<div>
					<button className='btn'>Account Details <AiOutlineArrowRight /></button>
					<button className='btn'>Pending Orders <AiOutlineArrowRight /></button>
					<button className='btn'>Order History <AiOutlineArrowRight /></button>
					</div>
					<div className='btn-btm'>
					<button className='btn-sec'>Cart <BsFillCartFill size={45} className='icon' /></button>
					<button className='btn-sec'>Wishlist <BsFillHeartFill size={45} className='icon' /></button>
					</div>
				</div>
			</div>
			<Footer/>
</Container>
		</>	
  )
}