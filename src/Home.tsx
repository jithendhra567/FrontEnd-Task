import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import CanvasJSReact from './assets/canvasjs.react';
import { barChart3, splineChart } from './data';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Home = () => {

    const [tab, setTab] = useState(0);

    const [touchStart, setTouchStart] = useState(null)
    const navigate = useNavigate();
    const [touchEnd, setTouchEnd] = useState(null)
    
    const minSwipeDistance = 10 

    const onTouchStart = (e:any) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e:any) => setTouchEnd(e.targetTouches[0].clientY)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isTop = distance > minSwipeDistance
        const isBottom = distance < -minSwipeDistance
        if (isTop||isBottom) {
            if(isTop){
                gsap.to('.sheet',{
                    duration: 0.5,
                    top: '10%'
                })
                setTimeout(()=> navigate("./dashboard"), 1000);
            }
        }
    }

    useEffect(()=>{
        const chartLabel = document.getElementsByClassName('canvasjs-chart-credit');
        for(let i = 0; i < chartLabel.length; i++) chartLabel[i].remove();
        setTimeout(() => {
        const chartLabel = document.getElementsByClassName('canvasjs-chart-credit');
        for(let i = 0; i < chartLabel.length; i++) chartLabel[i].remove();
        }, 1000);
    },[])

    return (
        <div className='home'>
            <div className='header'>
                <i className="fa-solid fa-bars"></i>
                <p>Home</p>
                <i className="fa-solid fa-arrows-rotate"></i>
            </div>
            <div className='content'>
                <p style={{fontSize: 24}}>Real time</p>
                <p style={{fontSize: 14, marginTop: 10, color: 'GrayText'}}>Active users right now</p>
                <p style={{fontSize: 44, marginTop: 24}}>48</p>
            </div>

            <CanvasJSChart options = {barChart3} />

            <div className="sheet" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <div className="head" id='handle'>
                        <div style={{textAlign: 'left'}}>
                            <h2>Sep 2 - Sep 8</h2>
                            <p style={{fontSize: 14, marginTop: 10, color: 'GrayText'}}>vs. Aug 26 - Sep 1</p>
                        </div>
                        <div className="nav" style={{fontSize: 24}}>
                            <i className="fa-solid fa-arrow-left"></i>
                            <i style={{marginLeft: 20, color: 'GrayText'}} className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="tabs">
                        <div className="tabhead">
                            <p className={tab==0?'active':''} onClick={()=>setTab(0)}>User<span className='right'/></p>
                            <p className={tab==1?'active':''} onClick={()=>setTab(1)}><span className='left'/>Sessions<span className='right'/></p>
                            <p className={tab==2?'active':''} onClick={()=>setTab(2)}><span className='left'/>New User</p>
                        </div>
                        <div className="tabbody">
                            <div className="stats">
                                <div style={{color: 'white'}}>
                                    <p style={{fontSize: 30}}>12,181</p>
                                    <p style={{fontSize: 12}}>+4.7k (+62.7%)</p>
                                </div>
                                <div style={{color: 'white', width: '150px', textAlign: 'start', fontSize: 14}}>
                                    <div>
                                        <input className='checkbox-round' checked type="checkbox" name="Cur" id="" />
                                        <label style={{marginLeft: 8}} htmlFor="">Current Period</label>
                                    </div>
                                    <div style={{marginTop: 8}}>
                                        <input className='checkbox-round' type="checkbox" name="Cur" id="" />
                                        <label style={{marginLeft: 8}} htmlFor="">Comparison Period</label>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: 30}}>
                                <CanvasJSChart options = {splineChart} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home