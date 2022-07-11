import React, { useEffect } from 'react'
import CanvasJSReact from './assets/canvasjs.react';
import { barChart, barchart2, donutChart, lineChart } from './data';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {

  useEffect(()=>{
    const chartLabel = document.getElementsByClassName('canvasjs-chart-credit');
    for(let i = 0; i < chartLabel.length; i++) chartLabel[i].remove();
    setTimeout(() => {
      const chartLabel = document.getElementsByClassName('canvasjs-chart-credit');
    for(let i = 0; i < chartLabel.length; i++) chartLabel[i].remove();
    }, 1000);
  },[])

  return (
    <div className='dashboard'>
      <div className='header' style={{color: 'black', padding: 10}}>
          <i className="fa-solid fa-bars"></i>
          <p>Dashboard</p>
          <i className="fa-solid fa-arrows-rotate"></i>
      </div>
      <div className="card b1">
        <div style={{textAlign: 'start'}}>
          <p style={{fontSize: 22, fontWeight: 600}}>10,032</p>
          <p style={{fontSize: 12, marginTop: 5, color: 'GrayText'}}>New Users</p>
          <div style={{marginTop: 10}}>
            <CanvasJSChart options = {lineChart} />
          </div>
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
        <div className="card b2">
          <div style={{textAlign: 'start'}}>
            <p style={{fontSize: 22, fontWeight: 600}}>12.2k</p>
            <p style={{fontSize: 12, marginTop: 5, color: 'GrayText'}}>Users</p>
          </div>
          <CanvasJSChart options = {barChart} />
        </div>
        <div className="card b2">
          <div style={{textAlign: 'start'}}>
            <p style={{fontSize: 22, fontWeight: 600}}>104.7k</p>
            <p style={{fontSize: 12, marginTop: 5, color: 'GrayText'}}>Sessions</p>
          </div>
          <CanvasJSChart options = {barchart2} />
        </div>
      </div>

      <p style={{marginTop: 40, textAlign: 'start', fontSize: 22, fontWeight: 600}}>Where are your users?</p>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
        <div className="card b2" style={{textAlign: 'start'}}>
          <h4>By Device</h4>
          <CanvasJSChart options = {donutChart} />
        </div>
        <div className="card b2" style={{textAlign: 'start', padding: '20px 10px 20px 20px'}}>
          <h4>By Country</h4>
          <div style={{marginTop: 20, width: '100%'}}>
            <div className='line'>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="https://cdn.countryflags.com/thumbs/india/flag-square-500.png" alt="" />
                <div style={{width: 60}} className='bar'></div> 
              </div>
              <p>14.6%</p>
            </div>
            <div className='line'>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="https://cdn.countryflags.com/thumbs/australia/flag-square-500.png" alt="" />
                <div style={{width: 40}} className='bar'></div> 
              </div>
              <p>14.6%</p>
            </div>
            <div className='line'>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="https://cdn.countryflags.com/thumbs/canada/flag-square-500.png" alt="" />
                <div style={{width: 30}} className='bar'></div> 
              </div>
              <p>14.6%</p>
            </div>
            <div className='line'>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="https://cdn.countryflags.com/thumbs/china/flag-square-500.png" alt="" />
                <div style={{width: 20}} className='bar'></div> 
              </div>
              <p>14.6%</p>
            </div>
            <div className='line'>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="https://cdn.countryflags.com/thumbs/austria/flag-square-500.png" alt="" />
                <div style={{width: 10}} className='bar'></div> 
              </div>
              <p>14.6%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard