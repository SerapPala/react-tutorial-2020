import React from 'react'


import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing'






function BookList() {
    console.log(greeting);
    return (
    <section className='booklist'>
        {data.map((book,index)=>{
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
        })}
    </section>
    );
}





export default BookList;