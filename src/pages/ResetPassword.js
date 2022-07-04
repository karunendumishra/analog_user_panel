import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Api_connection/config";
import { GoogleLogin } from "react-google-login";
import swal from "sweetalert";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
// import queryString from "query-string";
import { useParams, useLocation } from "react-router-dom";

// import FacebookLogin from "react-facebook-login";
const ResetPassword = (props) => {
  const location = useLocation();
  const resetCode = location.search;
  const resetCode1 = resetCode.substring(11);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [response, setResponse] = useState("");
  const [passworderror, setPassworderror] = useState(false);
  const [confirmPassworderror, setConfirmPassworderror] = useState(false);


  const [oldPasswordShown, setOldPasswordShone] = useState(false);
  const [newPasswordShown, setNewPasswordShone] = useState(false);

  const togglePassword1 = () => {
    setOldPasswordShone(!oldPasswordShown)
  };
  const togglePassword2 = () => {
    setNewPasswordShone(!newPasswordShown)
  };

  const clientId =
    "28253347908-l3f5pge45v4avpv50ppksjlkvvap6t35.apps.googleusercontent.com";

  const onLoginSuccess = (res) => {
    console.log(res.profileObj);
  };

  const onLoginFailure = (res) => {
    console.log(res);
  };

  async function ResetPasswordApi() {
    await fetch(BASE_URL + "/reset", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "allow-access-origin-control": "*",
      },
      body: JSON.stringify({
        resetCode: resetCode1,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        // localStorage.setItem("email", "");

        console.log(resp, "response..");
        if (resp.status == "true") {
          swal(resp.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);

          // return <Navigate to="/dashboard" />;
        } else {
          setResponse(resp);
        }
      });
  }

  //Login With Google

  //Validation Box

  var myInput = document.getElementById("password");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");

  // Show the Validation Box

  function _onfocus() {
    document.getElementById("validation-box").style.display = "block";
  }

  // hide the Validation Box

  // function _onblur() {
  //   document.getElementById("validation-box").style.display = "none";
  // }

  // when User Start To type letter Validation

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

  const handelFormSubmit = (password, confirmPassword) => {
    if (password == "") {
      setPassworderror(true);
    }
    if (confirmPassword == "") {
      setConfirmPassworderror(true);
    }
  };
  const params = useParams();
  console.log(params.restcode, "params");
  return (
    <div>
      <div className="nk-content ">
        <div className="nk-split nk-split-page nk-split-md">
          <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
            <div className="absolute-top-right d-lg-none p-3 p-sm-5">
              <Link
                to=""
                className="toggle btn-white btn btn-icon btn-light"
                data-target="athPromo"
              >
                <em className="icon ni ni-info"></em>
              </Link>
            </div>
            <div className="nk-block nk-block-middle nk-auth-body">
              <div className="brand-logo pb-5">
                <Link to="" className="logo-link">
                  <img
                    className="logo-light logo-img logo-img-lg"
                    src="./images/logo.png"
                    srcSet="./images/logo2x.png 2x"
                    alt="logo"
                  />
                  <img
                    className="logo-dark logo-img logo-img-lg"
                    src="./images/logo-dark.png"
                    srcSet="./images/logo-dark2x.png 2x"
                    alt="logo-dark"
                  />
                </Link>
              </div>
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <h5 className="nk-block-title">Choose a new password.</h5>
                  <div className="nk-block-des">
                    <p>
                      Connect with <b>Analog Inceptive</b> of{" "}
                      <b>INRX Blockchain</b>.
                    </p>
                  </div>
                </div>
              </div>

              {/* {res.status == true ? (
                <h1 style={{ color: "green", fontSize: 20 }}>{res.message}</h1>
              ) : res.status == false ? (
                <h1 style={{ color: "red", fontSize: 20 }}>{res.message}</h1>
              ) : null} */}

              {response.status == true ? (
                <h1 style={{ color: "green", fontSize: 20 }}>
                  {response.message}
                </h1>
              ) : (
                <h1 style={{ color: "red", fontSize: 20 }}>
                  {response.message}
                </h1>
              )}

              <form
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();

                  handelFormSubmit(password, confirmPassword);
                }}
              >
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" for="password">
                      Password
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <Link
                      tabIndex="-1"
                      to=""
                      className="form-icon form-icon-right passcode-switch"
                      data-target="password"
                    >
                      {
                        oldPasswordShown == false ? <AiOutlineEyeInvisible onClick={togglePassword1} /> : <AiOutlineEye onClick={togglePassword1} />
                      }
                    </Link>
                    <input
                      type={oldPasswordShown ? "text" : "password"}
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      minLength={8}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPassworderror(false);
                      }}
                      // onBlur={() => {
                      //   if (password === "") {
                      //     setPassworderror(true);
                      //   }
                      // }}
                      onFocus={() => _onfocus()}
                      onKeyUp={() => _onkeyup()}
                    />
                  </div>

                  <div id="validation-box">
                    <h6 className="passvalid" id="capital">
                      1 Uppercase Character
                    </h6>
                    <h6 className="passvalid" id="number">
                      1 Numeric Value
                    </h6>
                    <h6 className="passvalid" id="letter">
                      1 Special Symbol eg:@#
                    </h6>
                    <h6 className="passvalid" id="length">
                      length should be greater than 8
                    </h6>
                  </div>
                </div>
                {passworderror == true ? (
                  <p style={{ color: "red", marginTop: -20 }}>
                    Password Is Requierd *
                  </p>
                ) : null}

                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" for="confirm-password">
                      Confirm Password
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <Link
                      tabIndex="-1"
                      to=""
                      className="form-icon form-icon-right passcode-switch"
                      data-target="confirm-password"
                    >
                      {
                        newPasswordShown == false ? <AiOutlineEyeInvisible onClick={togglePassword2} /> : <AiOutlineEye onClick={togglePassword2} />
                      }
                    </Link>
                    <input
                      type={newPasswordShown ? "text" : "password"}
                      className="form-control form-control-lg"
                      id="confirm-password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setConfirmPassworderror(false);
                      }}
                      onBlur={() => {
                        if (confirmPassword === "") {
                          setConfirmPassworderror(true);
                        }
                      }}
                    />
                  </div>
                </div>
                {confirmPassworderror == true ? (
                  <p style={{ color: "red", marginTop: -20 }}>
                    Password Is Requierd *
                  </p>
                ) : null}

                <div className="form-group">
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    onClick={ResetPasswordApi}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
              <div className="form-note-s2 pt-4">
                {" "}
                Already Interact <Link href="/login">Sign in</Link>
                {/* Otp Interact <Link href="/EmailOtp">Resend Otp</Link> */}
              </div>

              <div className="text-center pt-4 pb-3">
                <h6 className="overline-title overline-title-sap">
                  <span>OR</span>
                </h6>
              </div>
              <ul className="nav justify-center gx-4">
                <li className="nav-item ">
                  {/* <FacebookLogin
                      className="facebook-button"
                      appId="1088597931155576"
                      autoLoad={true}
                      //   cssclassName="my-facebook-button-class"
                      fields="name,email,picture"
                      scope="public_profile,user_friends,user_actions.books"
                      callback={this.responseFacebook}
                    /> */}
                  {/* <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={props.SocialSignUp}
                    cssclassName="btnFacebook"
                    icon={<i className="fa fa-facebook" className="logo-fb"></i>}
                    textButton="Sign up with Facebook"
                  /> */}
                </li>
                <li className="nav-item">
                  <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign up with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </li>
              </ul>
            </div>
            <div className="nk-block nk-auth-footer">
              <div className="nk-block-between">
                <ul className="nav nav-sm">
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Terms & Condition
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Help
                    </Link>
                  </li>
                  <li className="nav-item dropup">
                    <Link
                      className="dropdown-toggle dropdown-indicator has-indicator nav-link"
                      data-toggle="dropdown"
                      data-offset="0,10"
                    >
                      <small>English</small>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                      <ul className="language-list">
                        <li>
                          <Link to="" className="language-item">
                            <img
                              src="./images/flags/english.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">English</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="language-item">
                            <img
                              src="./images/flags/spanish.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">Español</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="language-item">
                            <img
                              src="./images/flags/french.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">Français</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="language-item">
                            <img
                              src="./images/flags/turkey.png"
                              alt=""
                              className="language-flag"
                            />
                            <span className="language-name">Türkçe</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <p>&copy; 2022 INRX ECOSYSTEM. All Rights Reserved.</p>
              </div>
            </div>
          </div>
          <div
            className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right"
            data-content="athPromo"
            data-toggle-screen="lg"
            data-toggle-overlay="true"
          >
            <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
              <div
                className="slider-init"
                data-slick='{"dots":true, "arrows":false}'
              >
                <div className="slider-item">
                  <div className="nk-feature nk-feature-center">
                    <div className="nk-feature-img">
                      <img
                        className="round"
                        src="./images/slides/promo-a.png"
                        srcSet="./images/slides/promo-a2x.png 2x"
                        alt=""
                      />
                    </div>
                    <div className="nk-feature-content py-4 p-sm-5">
                      <h4>INRX NETWORK</h4>
                      <p>INCEPTIVE ANALOG</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-dots"></div>
              <div className="slider-arrows"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
