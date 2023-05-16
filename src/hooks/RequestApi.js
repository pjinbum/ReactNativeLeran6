//  src/hooks/RequestApi.js

import { useState, useEffect } from 'react';

export const RequestApi = url =>{
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [inProg , setInProg] = useState(false)


  useEffect(   ()=> {
   const RequestDate = async () => {
      try {
        setInProg(true);
        const res = await fetch(url);
        const result = await res.json();
        if(res.ok){
          setData(result);
          setError(null);
        }else {
          throw result;
        }
      }catch( error ){
        setError(error);
      }finally{
        setInProg(false);
      }
    };
    RequestDate();
    }, [data] 
  );

    return { data,error, inProg};

};

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data)); //자바스크립트 객체 형식으로 변환된다.