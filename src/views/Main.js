import React from 'react'
import { Route, Routes } from 'react-router'
import { Navbar } from '../components/Navbar'
import { Contact } from './Contact'
import { Home } from './Home'
import { PostSingle } from './PostSingle'
import { Explore } from './Explore'

export const Main = ( props ) => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home posts={ props.posts } />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route path="/blog/:id" element={<PostSingle />} />
        </Routes>
        {/*<About />
            <Contact />
            */}
      </main>
      <footer></footer>
    </React.Fragment>
  );
}
