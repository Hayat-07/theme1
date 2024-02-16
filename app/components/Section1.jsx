"use client";

import React, { useEffect, useState } from 'react'
import './section1.scss'
import Link from 'next/link';
import Image from 'next/image';
import p1 from "@/app/assets/p1.jpg";
import p2 from "@/app/assets/p2.jpg";
import p3 from "@/app/assets/p3.jpg";



 


// console.log(count);

let count=0;

function Section1() {
  const[im,setIm]=useState(p1);
  
  

  useEffect(()=>{
    let arr=[p1,p2,p3];
    let interval=setTimeout(()=>{

      if(count===(arr.length-1)){
        count= 0;
        setIm(arr[count]);
      }else{
        count++;
        setIm(arr[count]);
      };

      // console.log(count,"setTimeout is called");
    },10000);

    return()=>{ clearInterval(interval)};
  },[im]);

  
  


  return (
   <>
    <div className="Section1">
      <div className="img">
      <Image src={im} alt="image"  />
      </div>
      <div className="container grid">

        <div className="top ">
           <h1>Welcome to Hayat 07</h1>
           <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus, quod ducimus vitae ratione quas laborum repellendus consequuntur itaque incidunt.</h4>
        </div>

        <div className="bottom grid-stretch ">

             <div className="div1 flex  slipUp">
                <h3>div1</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, neque!</h4>
                 <Link href={'/'}>Learn more</Link>
             </div>
             <div className="div2 flex  slipUp">
                 <h3>div2</h3>
                 <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, neque!</h4>
                 <Link href={'/'}>Learn more</Link>
             </div>
             <div className="div3 flex  slipUp">
                 <h3>div3</h3>
                 <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, neque!</h4>
                 <Link href={'/'}>Learn more</Link>
             </div>

        </div>

      </div>
    </div>
   </>
  )
}

export default Section1;