import React from 'react';
import { HorizontalCard } from './HorizontalCard';

const ShowBooks = ({data}) => {
    return (
        <div className='grid grid-cols-1 gap-6'>
            {
                data.map((item, idx) => <HorizontalCard key={idx} data={item}></HorizontalCard>)
            }
        </div>
    );
};

export default ShowBooks;