import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react';
import { ErrorMessageContext } from "../contexts/ErrorContext";
import { ErrorClassContext } from "../contexts/ErrorContext";

function QuerySelector ({setParams}) {
    const [sortDown, setSortDown] = useState(false)
    const [filterDown, setFilterDown] = useState(false)
    const [sortByValue, setSortByValue] = useState('created_at')
    const [orderValue, setOrderValue] = useState('DESC')
    const [filterField, setFilterField] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)
    const {errorClass, setErrorClass} = useContext(ErrorClassContext)
    
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
                <div className='options-box'>
                    <p>Sort By:</p>
                    <div className='query-option'>
                        <input type="radio" id='date-radio' name='sort-by-radio' checked={sortByValue==='created_at'} onClick={() => {
                            setSortByValue('created_at');
                        }}/>
                        <label htmlFor="date-radio">Date</label>
                    </div>
                    <div className='query-option'>
                        <input type="radio" id='comment-radio' name='sort-by-radio' checked={sortByValue==='comment_count'} onClick={() => {
                            setSortByValue('comment_count');
                        }}/>
                        <label htmlFor="comment-radio">Number of comments</label>
                    </div>
                    <div className='query-option'>
                        <input type="radio" id='votes-radio' name='sort-by-radio' checked={sortByValue==='votes'} onClick={() => {
                            setSortByValue('votes');
                        }}/>
                        <label htmlFor="votes-radio">Number of likes</label>
                    </div>
                </div>
                <hr />
                <div className='options-box'>
                    <p>Order:</p>
                    <div className='query-option'>
                        <input type="radio" id='ascending-radio' name='order-by-button' checked={orderValue === 'ASC'} onClick={() => setOrderValue('ASC')}/>
                        <label htmlFor="ascending-radio">Ascending</label>
                    </div>
                    <div className='query-option'>
                        <input type="radio" id='descending-radio' name='order-by-button' checked={orderValue === 'DESC'} onClick={() => {setOrderValue('DESC')}}/>
                        <label htmlFor="descending-radio">Descending</label>
                    </div>
                </div>
                <button className='sign-button' onClick={(event) => {
                    event.preventDefault();
                    setParams({
                        sort_by: sortByValue,
                        order: orderValue,
                        [filterField]: filterValue 
                    })
                }}>Edit Search</button>
            </div>
            : null}

            {filterDown ?
            <div className='query-options-container'>
                <div className='options-box'>
                    <p>Filter By:</p>
                    <div className='query-option'>
                        <input type="radio" id='topic-radio' name='filter-button' checked={filterField === 'topic'} onClick={() => {setFilterField('topic')}}/>
                        <label htmlFor="topic-radio">Topic</label>
                    </div>
                    <div className='query-option'>
                        <input type="radio" id='author-radio' name='filter-button' checked={filterField === 'author'} onClick={() => {setFilterField('author')}}/>
                        <label htmlFor="author-radio">Author</label>
                    </div>
                    <div className='query-option'>
                        <input type="radio" id='title-radio' name='filter-button' checked={filterField === 'title'} onClick={() => {setFilterField('title')}}/>
                        <label htmlFor="title-radio">Title</label>
                    </div>
                </div>
            </div>
            : null}

            {filterField && filterDown ?
            <div className='query-options-container'>
                <div className='options-box-text'>
                    <p>Filter by {filterField}:</p>
                    <input type="text" id='filter-value' value={filterValue} placeholder='What would you like to filter by?' onChange={(event) => {
                        setFilterValue(event.target.value)
                    }}/>
                </div>
                <button className='sign-button' onClick={(event) => {
                    event.preventDefault();
                    if (filterField && !filterValue) {
                        setErrorMessage(`Please enter a valid ${filterField}`)
                        setErrorClass("error-container show-error")
                        setTimeout(() => {
                            setErrorClass("error-container hide-error")
                        } ,10000)
                    }
                    else {
                        setParams({
                            sort_by: sortByValue,
                            order: orderValue,
                            [filterField]: filterValue 
                        })
                    }
                }}>Edit Search</button>
                <button className='sign-button remove-filter-button' onClick={() => {
                    setFilterField('')
                    setFilterValue('')
                    setParams({
                        sort_by: sortByValue,
                        order: orderValue
                    })
                }}>Remove Filter</button>
            </div>
            : null
            }
        </>
    )
}

export default QuerySelector;