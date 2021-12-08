import React from 'react';
import  './Warning.css';

function Warning() {
    return (
        <div className="warning-page">
            <h1>
                Warning! Download only with VPN ...
            </h1>
            <hr className="warning-hr"></hr>
            <p>
            Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your <b>ISP</b> and <b>Government Agencies</b>. Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like <b>VeePN</b>. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.
            </p>
            <p className="green-para">
            Personal data disclosing your real identity: your IP address,  202.51.76.84   is exposed, which points directly to your location in  Kathmandu, NEPAL . You are browsing with  Chrome 94.0.4606.61 (Windows 10) , monitor res.  1366x768px ,  4-cores CPU .
            </p>
            <strong className="strong">
            ″Do not risk it! Protect yourself right now by downloading FAST VPN″ - William
            </strong><br/>
            <button className="vpnbtn"> <i className="fas fa-download"></i> &nbsp; &nbsp; Download FAST VPN</button>
            
        </div>
    )
}

export default Warning;
