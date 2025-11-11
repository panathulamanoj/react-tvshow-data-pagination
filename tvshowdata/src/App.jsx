import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card';
import Showl from './showlist'
// import Showlist from './showlist';
import {v4 as uuid} from 'uuid';
function App() {
  const [data,setData]=useState(new Array());
  const [q,setq]=useState("");
  const [pages,setpages]=useState([]);
  const [cpage,setcpage]=useState(1);
  const searchq = async()=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${q}`).then((res)=>{
        return res.json();
    }).then((d)=>{
        const td=d.filter((ele)=>{
          return ele.show.image && ele.show.image.original;
        });
        const tp=[];
        for(let i=1;i<=Math.ceil(td.length/4);i++)
  {
    tp.push(i);
  }
        setpages(tp);
        setData(td);
        setcpage(1);
    }).catch((err)=>{
      return;
    })
  }
  const sindex=(cpage-1)*4;
  const eindex=cpage*4;
  return (
    <>
    <div className="gridContainer">
      <span>
    <input placeholder="Enter Tv Show Name" value={q} onChange={(evt)=>(setq(evt.target.value))} />
    <button onClick={searchq}>Search</button>
    </span>
    <div className="cardWrapper">
    <Showl data={data.slice(sindex,eindex)}/>
   </div>
   <div id="pagesc">
    {pages.map((ele)=>{
      return <button key={uuid()} onClick={()=>(setcpage(ele))} style={{backgroundColor:(cpage==ele?'rgb(120, 156, 66)':'rgba(255,255,255,0.2')}}>{ele}</button>
    })}
   </div>
   </div>
    </>
  )
}

export default App
