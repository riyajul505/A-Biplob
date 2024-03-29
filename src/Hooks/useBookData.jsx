import { useEffect, useState } from 'react';

const useBookData = () => {
    const [bookData, setBookData] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then( data => {setBookData(data)})
    },[]);
   
    return {bookData}
};

export default useBookData;