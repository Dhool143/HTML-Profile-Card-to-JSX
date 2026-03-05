import React from "react"
import UserProfile from "./UserProfile"
import './App.css'


function App () {

  return (

    

 <div className="App">
  {/*Normal case*/}


<UserProfile name="Hanna Ali" email="henna.ali@seattle.com"/>
<UserProfile name="Sarah Yusuf" email="sarah@email.com"/>
<UserProfile name="Jessica Smith" email="jessica.smith@gmail.com"/>


{/* Edge case */}

<UserProfile name="" email="noName@email.com"/>
<UserProfile name="Intisar Ali" email=""/>
<UserProfile/>

 </div>


  );
}
 export default App;