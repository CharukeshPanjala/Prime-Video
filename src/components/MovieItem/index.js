import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import {ImageItem, CloseBtn, PopupContainer} from './styledComponents'

import './index.css'

const MovieItem = props => {
  const {details} = props
  return (
    <Popup
      modal
      trigger={<ImageItem src={details.thumbnailUrl} alt="thumbnail" />}
    >
      {close => (
        <PopupContainer>
          <CloseBtn onClick={() => close()} data-testid="closeButton">
            <IoMdClose className="close" />
          </CloseBtn>
          <ReactPlayer url={details.videoUrl} />
        </PopupContainer>
      )}
    </Popup>
  )
}

export default MovieItem
