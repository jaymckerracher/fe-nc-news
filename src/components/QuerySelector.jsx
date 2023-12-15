import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useState } from 'react';



function QuerySelector () {
    const [sortDown, setSortDown] = useState(false)
    const [filterDown, setFilterDown] = useState(false)

    return (
        <>
            <div className="query-selector">
                <p onClick={() => {
                    if (!sortDown) {
                        setSortDown(true)
                        setFilterDown(false)
                    }
                    else {
                        setSortDown(false)
                    }
                }}>Sort Articles {sortDown ? <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>}</p>
                <p onClick={() => {
                    if (!filterDown) {
                        setFilterDown(true)
                        setSortDown(false)
                    }
                    else {
                        setFilterDown(false)
                    }
                }}>Filter Articles {filterDown ? <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>}</p>
            </div>
            
        </>
    )
}

export default QuerySelector;