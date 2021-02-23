import SearchForm from './SearchForm';

import './index.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Ship it outside.</h1>
      <h2>Discover and book every type of camp site. Any destination. As long as it's on a ship.</h2>
      <SearchForm />
    </div>
  )
}

export default HomePage;
