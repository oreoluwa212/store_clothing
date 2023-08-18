import { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Catalogue from './catalogue.jsx';

const Catalog = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div>
      <NavBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <Catalogue searchValue={searchValue}/>
      <Footer />
    </div>
  );
};

export default Catalog;
