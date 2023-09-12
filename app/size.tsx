import { Container } from "react-dom"
import React, { useState } from 'react'
import './globals.css'
export let sizeHeight='33,5mm'
export let sizeWidth='65mm'
interface ChildComponentProps {
  inputValueSize:{width:string,height:string}
  onWidthChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  onHeightChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
export default function SizeForm({ inputValueSize, onWidthChange,onHeightChange }: ChildComponentProps) {

  

return( <form>
<div>
<p>(medidas em milimetros)</p>
        <label htmlFor="height">Altura</label>
        <input
        style={{ width: '100px' }} 
          type="text"
          id="height"
          name="height"
          onChange={onHeightChange}
          value={inputValueSize.height}
          ></input>
          <label htmlFor="width">Largura</label>
        <input
        style={{ width: '100px' }} 
        onChange={onWidthChange}
          type="text"
          id="width"
          name="width"
          value={inputValueSize.width}
          ></input>
          
         
    

</div>
</form>
)
}
