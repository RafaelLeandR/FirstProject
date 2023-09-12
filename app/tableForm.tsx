
import React, { ChangeEvent, useState } from 'react'
import {Table, Input, Button} from "reactstrap"
import './globals.css'
import ButtonCopy from './buttonCopy';
import { convertToObject } from 'typescript';
let property = ""

let copydata = {}
let arraysTable:any = []
let updatedData
let rows
interface ChildComponentProps {
  inputValue:{id:number,barcode:string,name:string,price:string}[]
  onInputChange: (e:React.ChangeEvent<HTMLInputElement>, id:Number,property:string) => void;
}








 export default function Tabela({ inputValue, onInputChange }: ChildComponentProps) {
    
        
return (
<>



<Table>
      <thead>
        <tr>
          <th >ID</th>
          <th >Código de Barras</th>
          <th >Nome</th>
          <th >Preço</th>
        </tr>
      </thead>
      <tbody>
        {inputValue.map((item) => (
          <tr key={item.id}>
            <td className='sizeEntry'>{item.id}</td>
            <td >
              <Input  
                type="text"
                value={item.barcode}
                onChange={(e) => onInputChange(e, item.id,"barcode")}
                placeholder="Adjust Width"
                style={{width:'100%'}}
              />
            </td>
            <td >
              <Input  
                type="text"
                value={item.name}
                onChange={(e) => onInputChange(e, item.id,"name")}
                placeholder="Adjust Width"
                style={{width:'auto',maxWidth:'100%'}}
              />
            </td>
            <td >
              <Input  
                type="text"
                value={item.price}
                onChange={(e) => onInputChange(e, item.id,'price')}
                placeholder="Adjust Width"
                style={{width:'70%'}}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>

)
}

