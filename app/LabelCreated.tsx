import './globals.css'

import {sizeHeight, sizeWidth} from "./size"
import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react'

interface ChildComponentProps {
  inputValue:{id:number,barcode:string,name:string,price:string}[]
  onInputChange: (e:React.ChangeEvent<HTMLInputElement>, id:Number,property:string) => void;
  sizeDataOn:{width:string,height:string}
}
export default function LabelCreated({ inputValue, onInputChange,sizeDataOn }: ChildComponentProps) {
  const componentRef = React.useRef();

    return(
        <div className='a4-div d-flex flex-wrap' id="contentToPrint" style={{margin:'0', padding:"0", boxSizing:"content-box"}} >
    
      
    
      


 
    { inputValue.map((item) => (
      <div className=' insidediv'   key={item.id} style={{border: '1px solid black',pageBreakInside: 'avoid',overflowWrap:"break-word",   margin:'0', padding:"0", height:sizeDataOn.height ,width:sizeDataOn.width, }}>
        
        <p style={{ margin:'0px', padding:"0px",fontSize:"14pt"}}>{item.barcode}</p>
        <p style={{ margin:'0px', padding:"0px", fontFamily:"Impact",fontSize:"14pt",lineHeight: "1"}}>{item.name}</p>
        <p style={{ margin:'0px', padding:"0px",fontFamily:"Impact",fontSize:"23pt"}}>R$: {item.price}</p>
      </div>
    ))}
    
  
  

</div>
    )
  }