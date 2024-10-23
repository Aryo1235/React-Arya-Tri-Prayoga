import axios from 'axios';
import  { useState, useEffect } from 'react';
export default function Fetchdata() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    const fetchData = async () => { 
        setLoading(true);
        try {
            const response = await axios.get("https://6718aacc7fc4c5ff8f4a7ab2.mockapi.io/nyoba");
           
            setData(response.data);
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
  if (loading) {
      return <div>Loading...</div>
  } 
  return (<>
      <div>Fetchdata</div>
      <ul>
          {data.map(item => (
              <div key={item.id}>
              <li> {item.name} </li>
              <li> {item.avatar} </li>
              </div>
          
          ))}
      </ul>
      </>
  )
}
