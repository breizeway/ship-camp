import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchForm.css'
import './SearchForm-media.css'

const SearchForm = () => {
  const history = useHistory();

  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [accom, setAccom] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    history.push(`/spots/?text=${text}${date && `&date=${date}`}${accom && `&accom=${accom}`}`);
  }

  return (
    <div className='search-form'>
      <div className='search-form__space-top'></div>
      <form className='search-form__form' onSubmit={submitHandler}>
        <div className='search-form__inputs-div'>
          <div>
            <label>Where to?</label>
            <div>
              <div className='search-form__input-icon'>
                <i className='fas fa-search' />
              </div>
              <input
                type='text'
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder='Try Titanic or Pacific Ocean...'
              ></input>
            </div>
          </div>
          {/* <div>
            <label>Dates</label>
            <div>
              <div className='search-form__input-icon'>
                <i className='fas fa-calendar' />
              </div>
              <input
                type='text'
                value={date}
                onChange={e => setDate(e.target.value)}
                placeholder='mm/dd/yyyy'
              ></input>
            </div>
          </div> */}
          <div>
            <label>Accomodations</label>
            <div>
              <div className='search-form__input-icon'>
                <i className='fas fa-campground' />
              </div>
              <select
                value={accom}
                onChange={e => setAccom(e.target.value)}
              >
                <option value='1'>All listings</option>
              </select>
            </div>
          </div>
        </div>
        <div className='search-form__button-div'>
          <button type='submit'>
            <div className='search-form__button-icon submit-button'>
              <i className='fas fa-search' />
            </div>
          </button>
        </div>
      </form>
      <div
        className='search-form__image'
        style={{backgroundImage: 'url(https://ship-camp.s3.us-west-002.backblazeb2.com/home-page-med.jpg)'}}
      ></div>
    </div>
  )
}

export default SearchForm;
