'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import  React, { Component }  from 'react'
import Head from 'next/head'
import { Row,Col,Container,Table, Input, Button } from 'reactstrap'
import SizeForm from './size'
import Tabela from './tableForm'
import LabelCreated from './LabelCreated'
import {sizeHeight, sizeWidth} from "./size"
import { ChangeEvent, useState,useEffect } from 'react'
import './globals.css'
let sizeDataOn = {width:"65mm",height:"33.5mm"}
import ReactToPrint from 'react-to-print'


let copydata
let tableData1= [
  { id: 1, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 2, barcode:'40181700982', name: 'Mouse Maxprint' , price: '15,00'},
  { id: 3, barcode:'40181700982', name: 'Teclado Padrão Maxprint' , price: '15,00'},
  { id: 4, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 5, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 6, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 7, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 8, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 9, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 20, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 21, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 22, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 23, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 24, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 25, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 26, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 27, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 28, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 29, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 30, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 31, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 32, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 33, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 34, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 35, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 36, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 37, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 38, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 39, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 40, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 41, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 42, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 43, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 44, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 45, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 46, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 47, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id:48, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 49, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
  { id: 50, barcode:'40181700982', name: 'Lanterna' , price: '15,00'},
]

export default function Home() {
 
  
  const handlePrint = () => {
    const contentToPrint = document.getElementById('contentToPrint');
    if (contentToPrint) {
      const printWindow = window.open('', '', 'width=210mm,height=auto,margin=5mm');
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
        <html>
        <head>
         
        </head>
        <body>
          ${contentToPrint.outerHTML}
        </body>
      </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      } else {
        console.error('Failed to open print window.');
      }
    }
  };



    const [width, setWidth] = useState(sizeDataOn.width);
    const [height, setHeight] = useState(sizeDataOn.height);

   
    let handleWidthChange = (event:React.ChangeEvent<HTMLInputElement>) => {
     sizeDataOn.width=event.target.value 
      setWidth(sizeDataOn.width);
    }
    
    let handleHeightChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      sizeDataOn.height=event.target.value  
      setHeight(event.target.value);
    }



  
  
    const [data, setData] = useState(tableData1)

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, id:Number,property:string ) => {
      tableData1 = data.map((item) =>
          item.id === id ? { ...item, [property]: e.target.value,} : item
         
        );

       
        
       
        setData(tableData1);



      }

     

         const handlePaste = async () => {
        
        const clipboardData = await navigator.clipboard.readText()
        const pastedData = clipboardData
        const rows = pastedData.split('\n').map((row) => row.split('\t')) // Assuming tab-separated data
        const rows2 = pastedData.split('\n')
        tableData1 = []
        for (let i = 0; i < rows.length; i++) {
          copydata = {
            id: i+1,
            barcode : rows[i][0],
            name : rows[i][1],
            price: rows[i][2]
            
          }
          tableData1.push(copydata)
          
          // code to be executed
        }
       console.log(tableData1)
      
        //const parsedMatrix: string[][] = JSON.parse(rows);
        
        setData(tableData1)
      }




  return (
    <>
    
    <div className='d-flex flex-wrap'  >
      <Row>
        <Col>
      <div className="" >
    <h1>Gerador de Etiquetas</h1>
    <ReactToPrint
    trigger={() => <Button>Preparar para Imprimir</Button>}
    content={() => document.getElementById('contentToPrint') as HTMLElement}
  />
   <SizeForm inputValueSize={sizeDataOn}  onWidthChange={handleWidthChange} onHeightChange={handleHeightChange} ></SizeForm>
   <p>(copie da tabela excel, word, google planilhas...)</p>
   <Button onClick={handlePaste}>Colar</Button>
   
   <Tabela inputValue={tableData1} onInputChange={handleInputChange}></Tabela>
    </div>
    </Col>
    
    

    
    
    
    

<Col>
    <div className='text-center'>
  <h3>Impressão</h3>
  <ReactToPrint
    trigger={() => <Button>Preparar para Imprimir</Button>}
    content={() => document.getElementById('contentToPrint') as HTMLElement}
  />
  <p>  </p>
  <div id="contentToPrint" style={{boxSizing:"content-box", margin:"0", padding:"0"}}>
    <LabelCreated inputValue={tableData1} onInputChange={handleInputChange} sizeDataOn={sizeDataOn} />
  </div>
  
</div>
</Col>
</Row>




</div>
    </>
  )
  }
