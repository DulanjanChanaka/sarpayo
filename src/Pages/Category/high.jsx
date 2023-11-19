import React from 'react'

const High = () => {
    const [snakedata, setSnakedata] = useState([]);
    useEffect(() => {
        const fetchdata = onSnapshot(collection(db, 'snakedata'), (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSnakedata(data);
        });
        console.log(snakedata)
    
        return () => {
          fetchdata();
        };
      }, []);
  return (
    <div>

    </div>
  )
}

export default High