import axios from 'axios'
import React, {useEffect} from 'react';
import Header from './Header';
import Stage from './Stage';


const App = () => {

 useEffect(() => {
    const SECRET_KEY = "$2b$10$mDDPw85Qhc8zycOFyr9mAuJaIqoqaLd9nDH0mBFhCHyybApT5BEve"
    const TRY=process.env.REACT_APP_TRY
    console.log("SECRET_KEY: " + SECRET_KEY, "TRY: " + TRY)
    axios({
      method: 'get',
      url: "https://api.jsonbin.io/b/627b346c38be29676100ef94",
      headers: {
          "Secret-Key": SECRET_KEY
      },
  }).then(function (res) {
      console.log(JSON.stringify(res.data.moduleAccess.pictures))
  });
  }, []);

  return (
    <>
    <Header/>
    <div style={{alignItems: 'center',
     textAlign: 'center',
      justifyContent: 'center'}}>
      
      
      <Stage/>
    </div>
    </>
  )
};

export default App;
