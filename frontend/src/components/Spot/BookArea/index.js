import './index.css';

const BookArea = ({ price, checkIn, checkOut, maxGuests }) => {
  return (
    <div className='book-area'>
      <form className='book-area__form'>
        <div className='book-area__price'>
          <div>${price}</div>
          <div>per night ({maxGuests} guests)</div>
        </div>
        <div className='book-area__checkin book-area__check'>
          <label>Check in</label>
          <div>Select date</div>
        </div>
        <div className='book-area__checkout book-area__check'>
          <label>Check out</label>
          <div>Select date</div>
        </div>
        <div className='book-area__guests'>
          <label>Guests</label>
          <select>
            <option>test</option>
          </select>
        </div>
        <div className='book-area__subtotal'>
          Subtotal
        </div>
        <div className='book-area__button'>
          <button className='book-area__button-button submit-button' type='submit'>Book</button>
        </div>
      </form>
    </div>
  )
}

export default BookArea;
