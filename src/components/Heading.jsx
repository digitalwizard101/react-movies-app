import React from 'react'
import { faClapperboard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Heading = ({ handleSetSearchMovie, handleSearchMovie }) => {
    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='d-flex justify-content-between align-items-centers'>
                        <h1>
                            Movies <FontAwesomeIcon icon={faClapperboard} flip style={{ color: "#16a085", }} id='heading-icon' />
                        </h1>

                        <div>
                            <input onChange={(e) => handleSetSearchMovie(e.target.value)} type="search" className="form-control rounded" placeholder="Search movies..." aria-label="Search movies..." aria-describedby="search-addon" />
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Heading