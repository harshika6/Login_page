import React,{Component} from 'react';
import './Welcome.scss';
import image1 from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import image4 from './img4.png';
import image5 from './img5.png';
import image6 from './img6.png';
import image7 from './img7.png';

function Welcome() {
  return (
    <div className="grid-display">
       <div className="first-div">
         <div className="john-div">
           <div className="shadow-4"><img src={image1}/></div>
           <div className="shadow-4"><img src={image2}/></div>
         </div>
         <div className="graph-div">
            <div><img src={image3}/></div>
         </div>
       </div>
       <div className="right">
           <div className="first-div">
             <div className="john-div">
                 <img style={{objectFit:'cover'}} src={image4}/>
                 <img style={{objectFit:'cover'}} src={image5}/>
             </div>
             <div className="graph-div">
                <img src={image6}/>
             </div>
           </div>
          <div>
             <img src={image7}/>
          </div>
       </div>
    </div>
  );
}

export default Welcome;
