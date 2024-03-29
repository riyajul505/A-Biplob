import React from 'react';
import useBookData from '../../Hooks/useBookData';
import BookCard from './BookCard';

const BookSection = () => {
    const {bookData} = useBookData();
    // console.log(bookData);

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-10'>Books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14'>
            
            {
                bookData.map((book,idx) => <BookCard key={idx} data={book}/>)
            }
        </div>
        </div>
    );
};

export default BookSection;