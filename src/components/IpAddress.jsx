import { useEffect, useState }  from 'react'

export default function IpAddress() {

    const [ipAddress, setIpAddress] = useState("Loading...");
      
        // 3. The corrected useEffect hook
        useEffect(() => {
          const fetchIpAddress = async () => {
            const apiUrl = import.meta.env.VITE_API_URL
      
            try {
              const response = await fetch(`${apiUrl}`);
                
              if (!response.ok) {
                throw new Error(`API ERROR ${response.status}`);
              }
      
              const data = await response.json();
              console.log(data)
              setIpAddress(data.ip);
            } catch (err) {
              setIpAddress("NOT AVAILABLE");
              console.error(err.message);
            }
          };
      
          fetchIpAddress();
        }, []);
  return (
    <>
        <div> 
            <h3>Your IP: {ipAddress}</h3>
        </div>
        
    </>
  )
}
