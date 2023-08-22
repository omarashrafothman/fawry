import { useState } from 'react';
import './App.css';
import   "../node_modules/tafgeetjs/index";
import { useFormik } from "formik";
import bg from "./images/images.jpg";
import Footer from './Footer';

function App() {


    const [cost,setCost]=useState("");

    const handleChange=(e)=>{

          if(e.target.value >= 999999999999.99 || e.target.value <= 0 || e.target.value == null){


            setCost("");

          }else{

            setCost(e.target.value)

          }

     
        
    }
    var Tafgeet = require('tafgeetjs');
    var stringText = new Tafgeet(cost, 'EGP').parse();

    // const formik = useFormik({
    //   initialValues: {
    //     number: '',
    //   },
  
    //   onSubmit: (values) => {},

    //   validate: (values) => {

    //     let errors = {};
    //     if (!values.number) {
    //       errors.number = "Required";
    //     } else if (
    //       !/^[A-Z0-9_%+-]+@[A-Z0-9.-]+\.[A-Z]{2.4}$/i.test(values.number)
    //     ) {
    //       errors.number = "Invalid number format";
    //     }
  
    //     return errors;
    //   },
    // });
  
   return (
  
    <div className="App d-flex align-center justify-content-center">
   

          <div className='form d-flex align-center justify-content-center '>
            <div className='box '>
              <h2>ادخل المبلغ</h2>
              
              <input  className='form-control' name='number' placeholder='أدخل المبلغ' type='number' value={cost}
               onChange={handleChange}    
                size="9"
               maxLength="9" 
              
              // onBlur={formik.handleBlur}
              // value={formik.values.number}
              // autoComplete="off"
              // isInvalid={formik.errors.number}
              />
            
           
            </div>
              <br/>
             
              <span className='out  d-flex align-center justify-content-center'> {stringText}</span>
        </div>
<Footer/>
    </div>
  );
}

export default App;
