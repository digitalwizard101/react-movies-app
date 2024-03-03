import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const AddFavorite = () => {
    return (
        <div className='d-flex align-item-center'>
            <span>
                Add to favorite
            </span>
            <span>


                <FontAwesomeIcon icon={faHeart} style={{ marginLeft: "10px" }} id='heart-icon' />
            </span>


        </div>
    )
}

export default AddFavorite