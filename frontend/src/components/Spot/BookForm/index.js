import { useState } from 'react';

import './index.css';

const BookForm = ({ price, checkIn, checkOut, maxGuests }) => {

  const guestOptions = ((maxGuests) => {
    const guests = [];
    for (let i = 1; i <= maxGuests; i++) guests.push(i);
    return guests;
  })(maxGuests);

  const [numGuests, setNumGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')

  const submitHandler = e => {
    e.preventDefault();
  }

  return (
    <div className='book-form'>
      <form className='book-form__form' onSubmit={submitHandler}>
        <div className='book-form__price'>
          <div>${price}</div>
          <div>per night ({maxGuests} guests)</div>
        </div>
        <div className='book-form__checkin book-form__check'>
          <label>Check in</label>
          <input
            className='book-form__check-date-picker'
            type='date'
            value={checkInDate}
            onChange={e => setCheckInDate(e.target.value)}
          />
        </div>
        <div className='book-form__checkout book-form__check'>
          <label>Check out</label>
          <input
            className='book-form__check-date-picker'
            type='date'
            value={checkOutDate}
            onChange={e => setCheckOutDate(e.target.value)}
          />
        </div>
        <div className='book-form__guests'>
          <label>Guests</label>
          <select
            value={numGuests}
            onChange={e => setNumGuests(e.target.value)}
          >
            {guestOptions.map((num, index) => (
              <option value={num} key={index}>{num === 1 ? `${num} guest` : `${num} guests`}</option>
            ))}
          </select>
        </div>
        <div className='book-form__subtotal'>
          Subtotal
        </div>
        <div className='book-form__button'>
          <button className='book-form__button-button submit-button' type='submit'>Book</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm;
