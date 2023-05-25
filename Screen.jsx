import React, { useEffect,useState } from 'react'

const Screen = () => {
    const[city,setCity]=useState('Ludhiana');
    let myApi=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36`

    const[apilink,setApi]=useState(myApi);
    const[apiData,setApiData]=useState({
      main:{
        temp:0
      }
    });

    useEffect(()=>{
      const getApi= async()=>{
        const response =await fetch(apilink);
        const result=await response.json();

        setApiData(()=>({
            ...result
          })
        )
        console.log(apiData);
      }
      getApi();
    },[apilink])
    const handleCityInput=(e)=>{
        setCity(e.target.value)
        
    }
    
    const handleSearch=()=>{
      setApi(myApi)
    }
    
  return (
    <div>
<h2>weather application</h2>
<hr/>
<input type='text' placeholder='enter the city name' onChange={handleCityInput}/>
<button onClick={handleSearch}>Search</button>
<div>
  <h2 style={{display:'inline' }}>Temperature</h2>
  <h5 style={{display:'inline' }}>{apiData.main.temp}<sup>o</sup>f</h5>
</div>
    </div>
  )
}

export default Screen