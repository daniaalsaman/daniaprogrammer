import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

const ProfileEm=()=>{
  const [ImgPreview,setImgPreview]=useState(null);
  const [error,setError]=useState(false);
  
  const handleImageChange=(e)=>{
  const selected=e.target.files[0];
  const ALLOWED_TYPES=["image/png" , "image/jpeg" ,"image/jpg"];
  if(selected && ALLOWED_TYPES.includes(selected.type)){
      let reader=new FileReader();
      reader.onloadend=() =>{
          setImgPreview(reader.result);
      }
  }
  else{
      setError(true);
  }
  };
      return (
        <div className="App">
            <div className="container">
                <h3><span>Profile</span></h3>
                <h5> <span className="profile">Profile Picture </span></h5>
            {error && <p className="errmsg"> File Not Supported</p>}
            <div className="imgpreview" style={{background:ImgPreview?'url("${ImgPreview}") no-repeat center/cover':"#dcdcdc"}}>
           {! ImgPreview && (
               <>
               <p> Add An Image</p>
               <label htmlFor="fileUpload" className="customFileUpload"> Change Image</label>
               <input type="file" onChange={handleImageChange} id="fileUpload" />
                <span> (jpg,png or jpeg)</span>
               </>
           )}
            </div>
            {! ImgPreview &&(
                <button onClick={() =>setImgPreview(null)} className="button">Remove Image</button>
            )}
                <div class="row">
    <form class="col s12">
    <h5> <span>Adress </span></h5>
      <div class="row">
      <div class="input-field col s12 m6">
  <label></label>
  <select class="browser-default">
    <option value="" disabled selected>Select Country</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  </div>
  <div class="input-field col s12 m6">
  <label></label>
  <select class="browser-default">
    <option value="" disabled selected>Select City</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  </div>
      </div>
      <div class="row">
      <div class="input-field col s6">
          <input placeholder="" id="first_name" type="text" class="validate"/>
          <label for="first_name">Street</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Building</label>
        </div>
      </div>
      <h5> <span>Office Number</span></h5>
      <div class="row">
        <div class="input-field col s12">
          <input id="officenumber" type="password" class="validate"/>
          <label for="officenumber">your office number</label>
        </div>
      </div>
      <h5> <span>Description</span></h5> 
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Company Descreption</label>
        </div>
      </div>
      <h5> <span>Size</span></h5>   
      <div class="row">
      <div class="input-field col s12 m6">
    <label></label>
     <select class="browser-default">
    <option value="" disabled selected>Company size</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
     </select>
    </div>
    </div>
    <div class="row">
    <div class="file-field input-field">
      <div class="btn">
        <span>Upload ypur CV</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text"/>
      </div>
    </div>
    </div>
    <div class="row">
    <div class="input-field col s6">
    <a class="waves-effect waves-light btn-large">Save</a>
    </div>
    <div class="input-field col s6">
    <a class="waves-effect waves-light btn-large">Cancel</a>
    </div>
    </div>
    </form>
  </div>
         
            </div>           
        </div>
      );
    };
export default ProfileEm;