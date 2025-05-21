import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { FiSearch } from 'react-icons/fi';

import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom'; // for dynamic routing
import allContent from '../constants/content'; // file with flattened data

import { scrollAndHighlight } from '../utils/scrollAndHighlight';
import { Highlight } from './common';

const SearchBar = ({ searchQuery, setSearchQuery, results, setResults, navigate, handleSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();

  const handleResultClick = (result) => {
    setSearchQuery('');
    setResults([]);
    const [path, hash] = result.url.split('#');
    navigate(`${path}?q=${encodeURIComponent(searchQuery)}#${hash}`);

    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <>
      {/* 🔍 Mobile Search Bar (< lg) */}
      <div className="absolute left-[30%] w-[50%] z-20 md:left-[35%] lg:hidden">
        <div className="relative flex items-center w-full sm:w-64">
          <input
            type="text"
            className="w-full pl-3 pr-10 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <FiSearch className="absolute right-3 text-gray-400" />
        </div>

        {results.length > 0 && (
          <div className="absolute right-0 mt-1 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
            {results.slice(0, 6).map((result, idx) => {
              const query = searchQuery.toLowerCase();
              const index = result.text.toLowerCase().indexOf(query);
              const snippetStart = Math.max(0, index - 30);
              const snippetEnd = Math.min(result.text.length, index + 70);
              const rawSnippet = result.text.substring(snippetStart, snippetEnd);
              const highlightedSnippet = rawSnippet.replace(
                new RegExp(`(${searchQuery})`, 'gi'),
                '<mark>$1</mark>'
              );

              return (
                <div
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm border-b"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="font-semibold">{result.title}</div>
                  <div
                    className="text-gray-500 text-xs"
                    dangerouslySetInnerHTML={{ __html: `...${highlightedSnippet}...` }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 🔍 Desktop Search Bar (lg and up) */}
      <div className="hidden lg:flex items-center relative ml-4">
        <button
          onClick={() => {
            setIsSearchOpen((prev) => !prev);
            setTimeout(() => searchInputRef.current?.focus(), 100);
          }}
          className="text-gray-600 hover:text-black"
        >
          <FiSearch className="text-2xl" />
        </button>

        <div
          className={`transition-all duration-300 overflow-hidden ml-2 ${
            isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
          }`}
        >
          <div className="relative w-full">
            <input
              ref={searchInputRef}
              type="text"
              className="w-full h-9 pl-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-green-600 transition-shadow duration-150"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
            />
          </div>
        </div>

        {results.length > 0 && (
          <div className="absolute right-0 top-10 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
            {results.slice(0, 6).map((result, idx) => {
              const query = searchQuery.toLowerCase();
              const index = result.text.toLowerCase().indexOf(query);
              const snippetStart = Math.max(0, index - 30);
              const snippetEnd = Math.min(result.text.length, index + 70);
              const rawSnippet = result.text.substring(snippetStart, snippetEnd);
              const highlightedSnippet = rawSnippet.replace(
                new RegExp(`(${searchQuery})`, 'gi'),
                '<mark>$1</mark>'
              );

              return (
                <div
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm border-b"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="font-semibold">{result.title}</div>
                  <div
                    className="text-gray-500 text-xs"
                    dangerouslySetInnerHTML={{ __html: `...${highlightedSnippet}...` }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const fuse = new Fuse(allContent, {
    keys: ['title', 'text'],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const matches = fuse.search(query);
      setResults(matches.map(match => match.item));
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    const targetId = location.hash.replace('#', '');
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    scrollAndHighlight({ query, targetId });
    window.history.replaceState({}, '', window.location.pathname + window.location.hash);
  }, [location]);
  


  return (
    <nav 
      className={`fixed ${styles.paddingX} mx-64 w-full max-w-[1920px] flex items-center top-0 z-20 bg-white`}
    >
      <div className="w-full h-100% flex justify-between items-center py-3 mx-auto border-b-2 border-green-950">
        <Link to={`/`}>
          <img src={logo} alt="logo" className="w-20 h-20 z-1" />
        </Link>
        

        <ul className="list-none hidden lg:flex flex-row gap-5">
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`${
              location.pathname === `/${link.id}`
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
            } flex justify-center items-center w-20 h-15 hover:text-gray-700 text-[18px] font-medium cursor-pointer`}
          >
            <Link to={`/${link.id}`}><Highlight text={link.title} /></Link>
          </li>
          ))}
        </ul>

        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          results={results}
          setResults={setResults}
          navigate={navigate}
          handleSearch={handleSearch}
        />

        {/* <div className="relative lg:block lg:ml-4"> */}
        {/* <div className="absolute left-[30%] w-[50%] z-2 lg:block lg:ml-4 lg:relative lg:left-auto lg:w-auto">
          <div className="relative flex items-center w-full sm:w-64">
            <input
              type="text"
              className="w-full pl-3 pr-10 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <FiSearch className="absolute right-3 text-gray-400" />
          </div>

          {results.length > 0 && (
            <div className="absolute right-0 mt-1 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
              {results.slice(0, 6).map((result, idx) => {
                const query = searchQuery.toLowerCase();
                const index = result.text.toLowerCase().indexOf(query);
                const snippetStart = Math.max(0, index - 30);
                const snippetEnd = Math.min(result.text.length, index + 70);
                const rawSnippet = result.text.substring(snippetStart, snippetEnd);
                const highlightedSnippet = rawSnippet.replace(
                  new RegExp(`(${searchQuery})`, 'gi'),
                  '<mark>$1</mark>'
                );

                return (
                  <div
                    key={idx}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm border-b"
                    onClick={() => {
                    setSearchQuery('');
                    setResults([]);
                    const [path, hash] = result.url.split('#');
                    navigate(`${path}?q=${encodeURIComponent(searchQuery)}#${hash}`);



                    // Delay scroll to allow route to render
                    setTimeout(() => {
                      const el = document.getElementById(hash);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 200);
                  }}

                  >
                    <div className="font-semibold">{result.title}</div>
                    <div
                      className="text-gray-500 text-xs"
                      dangerouslySetInnerHTML={{ __html: `...${highlightedSnippet}...` }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div> */}

        
        <div className="lg:hidden flex flex-1 justify-end items-center z-1">
          <img
            src={toggle ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    location.pathname === `/${link.id}` //active === link.title
                      ? "text-white"
                      : "text-gray-400"
                  }  hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`/${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
