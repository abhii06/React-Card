 import React, { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      setUserData(data.results[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="grid place-items-center h-screen " >
      <div className='rounded-3xl p-6 w-[600px] text-white h-[250px] bg-[#171822]'>
      {userData && (
        <div className="flex justify-between items-center px-5 py-7 ">
          <img className="w-50 h-50 border-white border-2 rounded-xl p-2" src={userData.picture.large} alt="user" />
          
          <div className="p-4 ">
            <p className="text-xl font-bold not-italic">{userData.name.first} {userData.name.last}</p>
            <p className="text-white text-xl font-bold not-italic"> {userData.gender}</p>
            
            <p className="text-white text-xl font-bold not-italic "> {userData.phone}</p>
            <p className="text-white text-xl font-bold not-italic ">{userData.email}</p>
            
            
            {/* Add other data fields as needed */}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;