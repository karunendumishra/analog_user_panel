import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";



const AffiliatCard = (props) => {


    return (
        <>
            <div className=" col-md-6 col-lg-4 col-12 p-3" style={{borderRadious: "10px solid black"}}>
                <div className="card-bordered card-inner" style={{backgroundColor: "#0b3175",color: "white", borderRadius: "10px"}}>
                    <h5 className="card-title" style={{color:"white"}}>{props.level}</h5>
                    <div className="row">
                        <div className="col-6">
                        <h6 className="card-subtitle mb-2">Total User</h6> <p>{props.totalUser}</p>
                    <h6 className="card-subtitle mb-2">Total Analog Buy</h6> <p>{props.totalAnalogBuy}</p>
                    <h6 className="card-subtitle mb-2">Total Expense</h6> <p>{props.totalExpence}</p>
                        </div>
                        <div className="col-6">
                        <h6 className="card-subtitle mb-2">Total Affiliates</h6> <p>{props.totalAffiliates}</p>
                    <h6 className="card-subtitle mb-2">Total Withdrawal</h6> <p>{props.widthdrawl}</p>
                    <h6 className="card-subtitle mb-2">Total Remaining</h6> <p>{props.toalRemaining}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=" col-md-6 col-lg-4 col-12 p-3" >
                <div className=" card-bordered card-inner" style={{backgroundColor: "#0b3175",color: "white"}}>
                    <h5 className="card-title" style={{color: "white"}}>Level 2</h5>
                    <div className="row">
                        <div className="col-6">
                        <h6 className="card-subtitle mb-2">Total user</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Analog buy</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Expense</h6> <p>1234.99</p>
                        </div>
                        <div className="col-6">
                        <h6 className="card-subtitle mb-2">Total Affiliates</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Withdrawal</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Remaining</h6> <p>1234.99</p>
              
                        </div>
                    </div>  
                </div>
            </div> */}
            {/* <div className="p-3 col-md-6 col-lg-4 col-12" >
                <div className=" card-bordered card-inner" style={{backgroundColor: "#0b3175", color: "white"}}>
                    <h5 className="card-title" style={{color: "white"}}>Level 3</h5>
                    <div className="row">
                        <div className="col-6">
                        <h6 className="card-subtitle mb-2">Total user</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Analog buy</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Expense</h6> <p>1234.99</p>
                        </div>
                        <div className="col-6">
                        <h6 className="card-subtitle mb-2">Total Affiliates</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Withdrawal</h6> <p>1234.99</p>
                    <h6 className="card-subtitle mb-2">Total Remaining</h6> <p>1234.99</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default AffiliatCard;