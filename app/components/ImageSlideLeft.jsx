"use client"

import React, {useEffect,useState}from 'react';
import Image from 'next/image';
import './smallSlideLeft.scss';

import a1 from '@/app/assets/a1.jpg';
import a2 from '@/app/assets/a2.jpg';
import a3 from '@/app/assets/a3.jpg';
import a4 from '@/app/assets/a4.jpg';
import a5 from '@/app/assets/a5.jpg';
import a6 from '@/app/assets/a6.jpg';

function ImageSlideLeft() {
    console.log("imageSlideLeft");
   
    const [arrOfimage,setArrOfimage]=useState([a1,a2,a3,a4,a5,a6,a1,a2,a3,a4,a5,a6,a1,a2,a3,a4,a5,a6]);
     
    // useEffect(()=>{
        
    //   let interval=setTimeout(()=>{
           
    //     let newArr= [...arrOfimage];
    //     newArr.splice(0,6);
    //     newArr.push([a1,a2,a3,a4,a5,a6]);
    //     setArrOfimage([...newArr]);
        
        
    //   },36000);
    //   return ()=>{clearTimeout(interval)};
    // },[arrOfimage]);


    let jm=0;
    // useEffect(()=>{
    //   setInterval(()=>{
    //     jm++;
    //     console.log(jm);
    //   },4000);
    // },[jm])
    




  return (<>

<div className="slider flex b1">

            
    {
    arrOfimage.map((x,i)=>{
        
        

        
        return(

            <div key={i} className="card" style={{

              // animation: "slideLeft 4s ease infinite", 
               transitionProperty:"transform",
              transitionDuration:"4s",
              transitionTimingFunction:"ease",
              transform:`translateX(-100%)`,
              
              

            


            }} >


                <div className="imgDiv">
                <Image src={x} alt="image" />
                </div>

                <div className="cardBottom">
                    <h3>Modern Apartment</h3>
                    <h4>All Logo</h4>
                    <h4>Apartment</h4>
                </div>



            </div>
        )
    })
    } 

</div>
  </>)
}

export default ImageSlideLeft