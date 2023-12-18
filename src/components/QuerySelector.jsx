import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function QuerySelector ({params}) {
    const [sortDown, setSortDown] = useState(false)
    const [filterDown, setFilterDown] = useState(false)
    
    function sortRadioHandler (param) {
        params.sort_by = param;
        console.log(params, '<<<<<')
    }
    
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
            {sortDown ? 
            <div className='query-options-container'>
                <p>Sort By:</p>
                <div className='query-option'>
                    <input type="radio" id='date-radio' name='sort-by-radio'/>
                    <label htmlFor="date-radio">Date</label>
                </div>
                <div className='query-option'>
                    <input type="radio" id='comment-radio' name='sort-by-radio'/>
                    <label htmlFor="comment-radio">Number of comments</label>
                </div>
                <div className='query-option'>
                    <input type="radio" id='votes-radio' name='sort-by-radio'/>
                    <label htmlFor="votes-radio">Number of likes</label>
                </div>
                <hr />
                <p>Order:</p>
                <div className='query-option'>
                    <input type="radio" id='ascending-radio' name='order-by-button'/>
                    <label htmlFor="ascending-radio">Ascending</label>
                </div>
                <div className='query-option'>
                    <input type="radio" id='descending-radio' name='order-by-button'/>
                    <label htmlFor="descending-radio">Descending</label>
                </div>
            </div>
            : null}
        </>
    )
}

export default QuerySelector;