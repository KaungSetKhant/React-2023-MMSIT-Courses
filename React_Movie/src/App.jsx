import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import {motion} from 'framer-motion'

const App = () => {
  const [popular, setPopular] = useState([]);

  const [filtered,setFiltered] = useState([])

  const [activeGenre,setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPopular(results);
    setFiltered(results)
  };

  return (
    <div className=" ">
      <Filter filtered={filtered} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} popular={popular} />
      <motion.div  animate={{scale:1,opacity:1}} initial={{opacity:1,scale:0.1}} exit={{opacity:0,scale:0}} transition={{duration:0.8}}  className="flex flex-wrap gap-10 justify-center mt-20 mb-20">
        
        {filtered.map((p) => {
          return <Movie key={p.id} {...p} />;
        })}
      </motion.div>
      <Footer/>
    </div>
  );
};

export default App;
