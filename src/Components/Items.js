import React from 'react'

export default function Items(props) {
  return (
    <div className='InvoiceItemContainer'>
    <div className={props.data.status} style={{ height: "80%", marginLeft: '5px', borderRadius: "7px", width: "7%", display: "flex", justifyContent: "center", alignItems: "center" }}><span>{props.data.status}</span></div>
    <div>

        <h6 style={{ margin: "0", padding: "0" }}>{props.data.invoiceNo}</h6>
        <p style={{ margin: "0", padding: "0" }}>{props.data.invoiceDate}</p>
    </div>
    <div>
        <h6 style={{ margin: "0", padding: "0" }}>{props.data.companyName}</h6>
        <p style={{ margin: "0", padding: "0" }}>{props.data.emailId}</p>
    </div>
    <div>
        {/* <h6 style={{ margin: "0", padding: "0" }}>Rs. {props.data.ammount}</h6> */}
        <p style={{ margin: "0", padding: "0" }}>Discription</p>
    </div>
    <div>
        {/* <h6 style={{ margin: "0", padding: "0" }}>Rs. {props.data.ammount}</h6> */}
        <button style={{ margin: "0", padding: "0" }}>View Image</button>
    </div>
    <div style={{ height: "70%", marginRight: "10px" }}>
        {/* <span className='patreview'>Pay</span>
         */}
        <span className='patreview'>Mark Resolve</span>
        <span className='patreview'>Send Spesific Dept</span>
    </div>
</div>
  )
}
