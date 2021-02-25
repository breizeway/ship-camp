import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as spotsActions from '../../store/spots';

import './SearchForm.css'

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [accom, setAccom] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    // const spots = dispatch(spotsActions.getSpots({ text, date, accom }))
    // .catch(async res => {

    //   // todo: set and display validation errors
    // })
    history.push(`/spots/?text=${text}${date && `&date=${date}`}${accom && `&accom=${accom}`}`);
  }

  return (
    <form className='search-form' onSubmit={submitHandler}>
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
        <div>
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
        </div>
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
          <div className='search-form__button-icon'>
            <i className='fas fa-search' />
          </div>
        </button>
      </div>
    </form>
  )
}

export default SearchForm;
