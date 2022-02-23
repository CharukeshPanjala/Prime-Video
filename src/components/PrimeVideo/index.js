import MoviesSlider from '../MoviesSlider'

import {
  BgContainer,
  PrimeVideoImage,
  MovieGenre,
  MoviesContainer,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props
  const ActionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const ComedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )
  console.log(ComedyMovies)
  return (
    <BgContainer>
      <PrimeVideoImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MovieGenre>Action Movies</MovieGenre>
        <MoviesSlider ActionMovies={ActionMovies} />
        <MovieGenre>Comedy Movies</MovieGenre>
        <MoviesSlider ActionMovies={ComedyMovies} />
      </MoviesContainer>
    </BgContainer>
  )
}

export default PrimeVideo
