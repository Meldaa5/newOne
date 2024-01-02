import React from 'react'
import './Login.css'
import '../../App.css';
import {FaLock, FaMailBulk, FaUser, FaVoicemail} from "react-icons/fa";
import {motion} from 'framer-motion'
import  { useEffect } from 'react';

export default function Login() {
    useEffect(() => {
        const signUpBtnLink = document.querySelector('.signUpBtn-link');
        const signInBtnLink = document.querySelector('.signInBtn-link');
        const wrapper = document.querySelector('.wrapper');
    
        signUpBtnLink.addEventListener('click', () => {
          wrapper.classList.toggle('active');
        });
         signInBtnLink.addEventListener('click', () => {
             wrapper.classList.toggle('active');
           });
    }, []);
  return (
   
      <>
    
    <div className="background-image" >
    
   
      <div className='wrapper'>
        <div className='form-wrapper sign-in'>
    <form action="">
        <h1>Giriş</h1>
        <div className="input-box">
            <input type="text"  placeholder='isim' required/>
          
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="Password"  placeholder='şifre' required/>
           
            <FaLock className='icon' />
        </div>
        <div className="remember">
            <label><input type="checkbox"/>Beni hatırla</label>
            <a href="#">Şifreni mi unuttun?</a>
        </div>
        <button type = "submit">Giriş Yap</button>
        <div className="signUp-link">
            <p>Bir hesabın yok mu ? <a href ="#" className='signUpBtn-link'>Kaydol</a></p>
        </div>
        <div className='social-platform'>
            <p> or sign in with </p>
            <div className='social-icons'>
                <a href='#'><i className='fa-brands fa-google'></i></a>
            </div>
        </div>
    </form>
      </div>
      
        <div className='form-wrapper sign-up'>
    <form action="">
        <h1>Kaydol</h1>
        <div className="input-box">
            <input type="text"  placeholder='isim' required/>
          
            {/* <FaUser className='icon'/> */}
        </div>
        <div className="input-box">
            <input type="Password"  placeholder='E-mail' required/>
           
            {/* <FaLock className='icon' /> */}
        </div>
        <div className="input-box">
            <input type="Password"  placeholder='şifre' required/>
{/*            
            <FaLock className='icon' /> */}
        </div>
        <div className="remember">
            <label><input type="checkbox"/>Kullanıcı sözleşmesini kabul ediyorum</label>
           
        </div>
        <button type = "submit">Kaydol</button>
        <div className="signUp-link">
            <p>Zaten bir hesabın mı var? <a href ="#" className='signInBtn-link'>Giriş Yap</a></p>
        </div>
        
    </form>
      </div>
     
           
      </div>
           
      </div>
      
          
          
      </>
    
  )
}

