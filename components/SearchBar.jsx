import { useEffect, useRef, useState } from 'react';
import { Input } from 'antd';
import Image from 'next/image';

const fetchSearchReportData = async (searchValue) => {
  try {
    const response = await fetch("https://degen.bunnydream.site/api/audit/?is_onboarding=False&search=" + searchValue);
    const data = await response.json();
    //console.log("Search Origin: ", data['results']);
    var dataRes = [];
    for (const item of data['results']) {
      var itemRes = { "name": "", "slug": "", "coin_icon": "", "create_at": ""} 
      itemRes['name'] = item.name;
      itemRes['coin_icon'] = item.coin_icon;
      itemRes['slug'] = item.slug;
      itemRes['created_at'] = item.created_at.split('T')[0];

      dataRes.push(itemRes);
    }
    return dataRes;
  } catch (error) {
    //console.log("Error fetching data:", error);
    return [];
  }
}

const SearchBarResult = ({ results }) => {
    
  return (
    <div className="search-bar-result">
      {results.map((result) => (
        <a class="StyledAnchor-sc-1rp7lwl-0 FzcRR sc-f73ebca4-0 hLbcyf" href={"/audits/" + result.slug}>
        <div className="result-item">
          <div className="image-column">
            {result.coin_icon && (
              <Image
                src={result.coin_icon}
                alt={result.name}
                width={32}
                height={32}
                loading="lazy"
              />
            )}
          </div>
          <div className="text-column">
            <div className="name">{result.name}</div>
            <div className="created-at" style={{ fontSize: '10px', color: '#888' }}>
              {result.created_at}
            </div>
          </div>
        </div>
        </a>
      ))}
    </div>
  );

};

const SearchBar = () => {
  
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
  
    async function getAuditReport(searchValue) {
      const dataSearch = await fetchSearchReportData(searchValue);
      setSearchResult(dataSearch);
      setShowResults(true);
      //console.log("Search report: ", dataSearch);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        getAuditReport(searchValue);
      }
    };
  
    const handleInputChange = (event) => {
      setSearchValue(event.target.value);
      console.log(event.target.value);
    };

    const ref = useRef(null);

    useEffect(() => {
      const handleOutSideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
          setShowResults(false);
        }
      };
  
      window.addEventListener("mousedown", handleOutSideClick);
  
      return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
      };
    }, [ref]);
  
    return (
    <>
      <div className="searchbar-ngoai">
        <div className="searchbar" ref={ref}>
          <div className="searchbar_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <Input
            autoComplete='off'
            type="text"
            placeholder="Search Project "
            className="searchbar_input"
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {showResults && searchResult && searchResult.length > 0 && (
          <SearchBarResult results={searchResult} className='search-bar-result' />
          )}
        </div>
        
      </div>
    </>
    )
};

export default SearchBar;