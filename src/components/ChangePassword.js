import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import toast from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../Api_connection/config';

const ChangePassword = () => {
    const {user} = useSelector((state)=> state.user.value)

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [oldPasswordError, setOldPasswordError] = useState(false)
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [match, setMatch] = useState(false)

    const [oldPasswordShown, setOldPasswordShone] = useState(false);
    const [newPasswordShown, setNewPasswordShone] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShone] = useState(false);

    const email = user?.email
    const navigate = useNavigate();

    const changePassword = async()=>{
        try {
            const data = await axios.post(`${BASE_URL}/change_password`,{email: email, old_password: oldPassword, new_password: newPassword})
            // console.log(data.data)
            if(confirmPassword === newPassword){
                if(data.data.status === 1){
                    toast.success("Password Changed Successfully")
                    // swal("Password Changed Successfully", "Please Login", "success");
              setTimeout(() => {
                navigate("/login");
              }, 2000);
                setOldPassword(" ")
                setNewPassword(" ")
                setConfirmPassword(" ")
            }
            else if(data.data.status === 0){
                toast.error("Incorrect Password")
                // swal("Password Incorrect", "Enter Correct Password", "error");
            }
            }else{
                toast.error("Password and confirm password do not match")
                // swal("Password and confirm password does not match", "Enter identical password", "error");
            }
           

        } catch (error) {
            console.log(error);
        }
    }
    
    const togglePassword1 = () => {
        setOldPasswordShone(!oldPasswordShown)
       
      };
      const togglePassword2 = () => {
        
        setNewPasswordShone(!newPasswordShown)
        // console.log(newPasswordShown);
    
      };
      const togglePassword3 = () => {
      
        setConfirmPasswordShone(!confirmPasswordShown)
      };


    var myInput = document.getElementById("password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    function _onfocus() {
       
        document.getElementById("validation-box1").style.display = "block";
    }

    function _onkeyup() {
        var symble = /[#@$%&*]/g;
        if (myInput.value.match(symble)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        //UpperCase Letter Vali

        var UpperCaseLatter = /[A-Z]/g;
        if (myInput.value.match(UpperCaseLatter)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        //Number Vali..

        var Number = /[0-9]/g;
        if (myInput.value.match(Number)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        //length for Validation

        if (myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }




    const handelFormSubmit = (oldPassword, newPassword, confirmPassword) => {

        if (oldPassword === "") {
            setOldPasswordError(true);
        }
        if (newPassword === '') {
            setNewPasswordError(true)
        }
        if (confirmPassword === "") {
            setConfirmPasswordError(true);
        }
        if (oldPassword !== "" && newPassword !== "" && confirmPassword !== "") {
          changePassword()
          }
    }

    return (
        <>

            <div class="card-inner card-inner-lg">
                <div class="nk-block-head nk-block-head-lg">
                    <div class="nk-block-between">
                        <div class="nk-block-head-content">
                            <h4 class="nk-block-title">Change Password</h4>
                            <div class="nk-block-des">
                                <p>You may update your password any time. We suggest you choose a strong password and update it regularly</p>
                            </div>
                            <hr></hr>
                        </div>
                        <div class="nk-block-head-content align-self-start d-lg-none"><a
                            href="#" class="toggle btn btn-icon btn-trigger mt-n1"
                            data-target="userAside"><em
                                class="icon ni ni-menu-alt-r"></em></a></div>
                    </div>
                </div>
                <div className='container w-80'>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            handelFormSubmit(newPassword, oldPassword, confirmPassword);
                        }}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" for="password">
                                    Old Password
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <b
                                    tabIndex="-1"
                                    className="form-icon form-icon-right passcode-switch text-dark"
                                    data-target="password"
                                >
                                    {
                                        oldPasswordShown == false ? <AiOutlineEyeInvisible onClick={togglePassword1}/> : <AiOutlineEye onClick={togglePassword1}/>
                                    }
                                </b>
                                <input
                                    type={oldPasswordShown ? "text" : "password"}
                                    className="form-control form-control-lg"
                                    id="password"
                                    placeholder="Enter old password"
                                    value={oldPassword}
                                    minLength={8}
                                    onChange={(e) => {
                                        setOldPassword(e.target.value);
                                        setOldPasswordError(false);
                                    }}
                                    onFocus={() => _onfocus()}
                                    onBlur={() => {
                                        if (oldPassword === "") {
                                            setOldPasswordError(true);
                                        }
                                    }}
                                    // onKeyUp={() => _onkeyup()}
                                    style={{ fontSize: "15px" }} />
                            </div>

                            <div id="validation-box">
                                <h6 className="passvalid" id="capital">
                                We suggest having at least one capital and one lower-case letter (Aa-Zz), 
                                one special symbol (#, &amp;, % etc) and one number (0-9) in your password for the best strength
                                </h6>
                            </div>
                        </div>
                        {oldPasswordError == true ? (
                            <p style={{ color: "red", marginTop: -20, fontSize: "12px"}}>
                                Password is requierd *
                            </p>
                        ) : null}
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" for="password">
                                    New Password
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <b
                                    tabIndex="-1"
                                    className="form-icon form-icon-right passcode-switch text-dark"
                                    data-target="password"
                                >
                                    {
                                        newPasswordShown == false ? <AiOutlineEyeInvisible onClick={togglePassword2}/> : <AiOutlineEye onClick={togglePassword2}/>
                                    }
                                    
                
                                </b>
                                <input
                                    type={newPasswordShown ? "text" : "password"}
                                    className="form-control form-control-lg"
                                    id="npassword"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    minLength={8}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        setNewPasswordError(false);
                                    }}
                                    onFocus={() => _onfocus()}

                                    onBlur={() => {
                                        if (newPassword === "") {
                                            setNewPasswordError(true);
                                        }
                                    }}
                                    // onKeyUp={() => _onkeyup()}
                                    style={{ fontSize: "15px" }} />
                            </div>

                            <div id="validation-box1">
                            <h6 className="passvalid" id="capital">
                            We suggest having at least one capital and one lower-case letter (Aa-Zz),
                             one special symbol (#, &amp;, % etc) and one number (0-9) in your password for the best strength
                                </h6>
                            </div>

                        </div>
                        {newPasswordError == true ? (
                            <p style={{ color: "red", marginTop: -20, fontSize: "12px" }}>
                                Password is requierd *
                            </p>
                        ) : null}

                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label" for="confirm-password">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="form-control-wrap">
                                <b
                                    tabIndex="-1"
                                  
                                    className="form-icon form-icon-right passcode-switch text-dark"
                                    data-target="confirm-password"
                                >
                                    {
                                        confirmPasswordShown == false ? <AiOutlineEyeInvisible onClick={togglePassword3}/> : <AiOutlineEye onClick={togglePassword3}/>
                                    }
                                </b>
                                <input 
                                    
                                    type={confirmPasswordShown ? "text" : "password"}
                                    className={match == true ? "border-2 border-success form-control form-control-lg" :"form-control form-control-lg"}
                                    id="confirm-password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    minLength={8}
                                    onChange={(e) => {
                                        // console.log(newPassword, "new");
                                        // console.log(e.target.value, "confirm");
                                        if(newPassword == e.target.value){
                                            setMatch(true)
                                        }else{
                                            setMatch(false)
                                        }
                                        setConfirmPassword(e.target.value);
                                        setConfirmPasswordError(false);
                                    }}
                                    onBlur={() => {
                                        if (confirmPassword === "") {
                                            setConfirmPasswordError(true);
                                        }
                                    }}
                                    style={{ fontSize: "15px" }} />
                            </div>
                        </div>
                        {confirmPasswordError == true ? (
                            <p style={{ color: "red", marginTop: -20, fontSize: "12px" }}>
                                Password is requierd *
                            </p>
                        ) : null}



                        <div className="form-group">
                            <button
                                className="btn btn-dim btn-outline-success btn-block"
                            // onClick={Signup}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;