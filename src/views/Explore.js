import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Explore = () => {
     const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async e => {
    e.preventDefault();
    if (search === '') return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`

    const response = await fetch(endpoint);
    console.log(response);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();

    setResults(json.query.search);
    setSearchInfo(json.query.searchInfo);
  }

      return (
        <div>
          <h3>Explore</h3>
          <hr />
          <form action="" className="search-box" onSubmit={handleSearch}>
            <div className="form-group">
              <div className="row">
                <div className="results">
                  <div className="col-md-10">
                    <input
                      type="search"
                      name="user_status"
                      id=""
                      className="form-control"
                      placeholder="Search"
                      aria-describedby="helpId"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="results">
            {results.map((result, i) => {
              return (
                <div className="result" key={i}>
                  <h3>{result.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                  <a href="#">Read More</a>
                </div>
              );
            })}
          </div>
        </div>
      );
}
