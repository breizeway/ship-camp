import './SearchForm.css'

const SearchForm = () => {
  return (
    <form className='search-form'>
      <div className='search-form__inputs-div'>
        <div>
          <label>Where to?</label>
          <div>
            <div className='search-form__input-icon'>
              <i className='fas fa-search' />
            </div>
            <input></input>
          </div>
        </div>
        <div>
          <label>Dates</label>
          <div>
            <div className='search-form__input-icon'>
              <i className='fas fa-calendar' />
            </div>
            <input></input>
          </div>
        </div>
        <div>
          <label>Accomodations</label>
          <div>
            <div className='search-form__input-icon'>
              <i className='fas fa-campground' />
            </div>
            <select></select>
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
