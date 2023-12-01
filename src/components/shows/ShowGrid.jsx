import { useReducer, useEffect } from "react";
import ShowCard from "./ShowCard";


const usePresistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const presistedValue = localStorage.getItem(localStorageKey)

    return presistedValue ? JSON.parse(presistedValue) : initial;
  } );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey] );

  return [state, dispatch];

};

const starredShowsReducer = (currentStarred, action) => {

  switch(action.type) {
    case 'STAR': return currentStarred.concat(action.showId)
    case 'UNSTAR': return currentStarred.filter( (showId) => showId !== action.showId );
    default:
      return currentStarred;
  }
}

const ShowGrid = ( {shows}) => {

  const [starredShows, dispatchStarred] = useReducer(starredShowsReducer, [], 'starredShows');

  const onStarMeClick = (showId) => {
    const isStarred = starredShows.includes(showId);

    if(isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'Star', showId });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard 
          key={data.show.id} 
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/nofoundimg.png'}
          summary = {data.show.summary}
          onStarMeClick = {onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowGrid;