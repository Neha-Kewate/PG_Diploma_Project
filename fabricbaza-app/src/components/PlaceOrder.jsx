import "../css/style.css"
import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { verifyUser } from '../api-client/apiClient';
import AlertDialog from "./AlertDialog";



export default function PlaceOrder(){
     const navigate=useNavigate();
     const [email, setEmail] = useState("");
      
     const  redirectToSignup=()=>{
        // navigate("/login");
        //if(handleLogin){
           
           // navigate("/home");
        
           // alert("Your order is placed.....");
      // }
        //else{
            navigate("/login");
        } 
    


    
    return(
        <>
        <h1>Price details</h1>
        <table className="placeorder">
           <tr>
              <td><div class="desktop-base-right">
              <div class="coupons-base-header">Coupons</div>
                </div></td>
              <td><button>Apply</button></td>
           </tr>
           <tr>
            <td><span>Total MRP</span><span class="priceDetail-base-value "><span></span></span></td>
            <td><span>Rs. 6,495</span></td>

           </tr>            
           <tr>
           <td><span>Discount on MRP</span>
           </td>
            <td><span>Rs. 6,495</span></td>
           </tr>
           <tr>
            <td><span>Coupon Discount</span></td><td><span class="priceDetail-base-value priceDetail-base-action">Apply Coupon</span></td>
           </tr>

           <tr>
            <td>
            <span>Total Amount</span>
            </td>
           </tr>
           <tr>
            <td><button type="submit" onClick={redirectToSignup}>Place order</button></td>
           </tr>


        </table>
          
            
            
                
         
         
        </>
    )
}

