import React, { ChangeEvent, Component, useState } from 'react'
import {Table, Input, Button} from "reactstrap"
import './globals.css'
import Tabela from './tableForm';
let copydata = {}
let arraysTable:any = []
export default function ButtonCopy(){
    
    const [tableData, setTableData] = useState<string[][]>([]);
    
    const handlePaste = (e:React.ClipboardEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const clipboardData = e.clipboardData //|| /*window.ClipboardItem;*/
      const pastedData = clipboardData.getData('text');
      const rows = pastedData.split('\n').map((row) => row.split('\t')); // Assuming tab-separated data
      const rows2 = pastedData.split('\n')
      for (let i = 0; i < rows.length; i++) {
        copydata = {
          id: rows[i][0],
          barcode : rows[i][1],
          name : rows[i][2],
          price: rows[i][3]
          
        }
        arraysTable.push(copydata)
        
        // code to be executed
      }
     console.log(arraysTable)

      //const parsedMatrix: string[][] = JSON.parse(rows);
      
      setTableData(arraysTable)
    }
    return(
        <>
        <textarea onPaste={handlePaste}></textarea>
        
        </>
     
   
           

    )

    }

