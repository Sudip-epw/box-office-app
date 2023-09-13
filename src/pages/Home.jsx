import { useState } from "react";

const Home = () => {

  const [searchStr, setSearchStr] = useState("");
  
  const onSearchInputChange = (ev) => { 
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) =>{
    ev.preventDefault();

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
    const body = await response.json();
  } 
    return (
      <div>
        <form onSubmit={onSearch}></form>
        <input type="text" value={searchStr} onChange={onSearchInputChange}/>
        <button type="submit">Search</button>
      </div>
    );
};

export default Home;