import React, {Component} from 'react';
class Footer extends React.Component{
   render(){
       return (
           <>
            
            <div className="nk-footer nk-footer-fluid">
                    <div className="container-fluid">
                        <div className="nk-footer-wrap">
                            <div className="nk-footer-copyright"> &copy; 2021 ANALOG  INCEPTIVE BY <a href="#">INRX NETWORK</a>
                            </div>
                            <div className="nk-footer-links">
                                <ul className="nav nav-sm">
                                    <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
   
           </>
       )
   }
}
export default Footer
