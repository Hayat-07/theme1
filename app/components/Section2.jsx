

import React from 'react';
import './section2.scss';
import ImageSlideLeft from './ImageSlideLeft';







function Section2() {
    console.log("section2");


  return (<>
  <div className="section2  ">

    <div className="topTrangle">
       <h1>.</h1>
    </div>

    <div className="container flex b2 ">
      <div className="topDiv">
           <h2>Display Latest & Featured Properties</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus quod recusandae ad harum unde? Perferendis dicta obcaecati harum cum asperiores itaque ducimus, quod rerum.</h4>
      </div>
      <div className="bottomDiv  b2">

         <div className="buttonDiv px-2 mx2 flex b1">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
         </div>

         <ImageSlideLeft></ImageSlideLeft>

         
         <div className="checkDiv">
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
         </div>
      </div>
    </div>


   
     



  </div>
  </>)
}

export default Section2