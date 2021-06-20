import React from "react";
import 'materialize-css/dist/css/materialize.min.css';


const HomePage = () => {
function clickHandler (){
  return(
    <div class="row" id="emp">
    <div class="input-field col s6">
    <label for="select_company" class="company">Select Company</label>
    <input type="text" id="select_company" class="validate-select-company"></input>
   </div>
   <div class="input-field col s6">
   <label for="select_city" class="city">Select Location</label>
  <input type="text" id="select_city" class="validate-select-city"></input>
  </div>
 </div>);
}
function clickHandler2(){
  return(
    <div class="row" id="emp">
    <div class="input-field col s6">
    <label for="select_company" class="company">Select Company</label>
    <input type="text" id="select_company" class="validate-select-company"></input>
   </div>
   <div class="input-field col s6">
   <label for="select_city" class="city">Select Location</label>
  <input type="text" id="select_city" class="validate-select-city"></input>
  </div>
 </div>);
}
  return (
    <div> 
       <img src="/job2.jpg" alt="" className="img1" ></img>
      <div class="booking-form">
        <form class="col s8">
          <h4>Find what you want today</h4>
          <div class="row">
    <div class="input-field col s6">
    <button class="waves-effect waves-light btn-large" onClick={clickHandler}>Job</button>
    </div>
    <div class="input-field col s6">
    <button class="waves-effect waves-light btn-large" onClick={clickHandler2}>Employee</button>
    </div>
    </div>
          <div class="row" id="job">
         <div class="input-field col s6">
         <label for="select_company" class="company">Select Company</label>
           <input type="text" id="select_company" class="validate-select-company"></input>
         </div>
         <div class="input-field col s6">
         <label for="select_city" class="city">Select Location</label>
           <input type="text" id="select_city" class="validate-select-city"></input>
         </div>
          </div>

          <div class="input-field col s12 right-align">
           <button class="btn waves-effect waves-ligh btn-large" type="submit">Search</button>
          </div>
         </form>
       </div>
<footer class="page-footer font-small indigo">

  <div class="container text-center text-md-left">

    <div class="row">

      <div class="col-md-3 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About US</h5>

        <ul class="list-unstyled">
          <li>
            <h6>-Have any questions?</h6>
            <p>ayman@company.com</p>
            <br></br>
          </li>
          <li>
            <h6>-Adress</h6>
           <p>UAE-Dubai</p>
          </li>
        </ul>

      </div>


      <div class="col-md-3 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Site Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/registration">Register</a>
          </li>
          <li>
            <a href="/profile1">Company Profile</a>
          </li>
          <li>
            <a href="/profile2">Employee Profile</a>
          </li>
        </ul>

      </div>
  </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
  </div>
    </div>
    </footer>
    </div>
  );
}

export default HomePage;