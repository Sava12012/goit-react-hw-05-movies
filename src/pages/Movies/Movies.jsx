import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovieByName } from 'services/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieByName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
      <MoviesList movies={movies} />
    </>
  );
};

// function Cast() {
//   const [movieDetails, config] = useOutletContext();
//   const cast = movieDetails.credits.cast;
//   return (
//     <List>
//       {cast.map(actor => {
//         if (!actor.profile_path) {
//           return null;
//         }
//         return (
//           <ListItem key={actor.id}>
//             <img
//               ml="auto"
//               mr="auto"
//               src={`${config.base_url}${config.profile_sizes[2]}${actor.profile_path}`}
//               alt=""
//             />
//             <Box p="6px">
//               <Text>{actor.name}</Text>
//               <Text>
//                 <b>Character: </b>
//                 {actor.character}
//               </Text>
//             </Box>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }

// export default Cast;
