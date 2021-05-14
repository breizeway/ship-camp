import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './ReviewAdd.css'
import { reviewSpot, getSpot } from '../../../../store/spots'


const ReviewAdd = ({ setEditMode }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const userId = useSelector(state => state.session.user.id);
    const [review, setReview] = useState('')
    const [recommended, setRecommended] = useState(true)

    const submit = async e => {
        e.preventDefault();
        await dispatch(reviewSpot(review, recommended, id, userId));
        await dispatch(getSpot(id));
        setEditMode(false);
    }

    return (
        <div className='review-add'>
            <form onSubmit={submit}>
                <div className='review-add__recommended'>
                    <div
                        className='spot-review__content-about-icon submit-button'
                        onClick={() => setRecommended(true)}
                    >
                        <i
                            className='fas fa-thumbs-up'
                            style={{paddingBottom: '1px'}}
                        />
                    </div>
                    <div
                        className='spot-review__content-about-icon submit-button'
                        onClick={() => setRecommended(false)}
                    >
                        <i
                            className='fas fa-thumbs-down'
                            style={{paddingTop: '2px'}}
                        />
                    </div>
                    <div className='review-add__recommended-text'>
                        {recommended === true ? 'Recommended' : 'Not Recommended'}
                    </div>
                </div>
                <div>
                    <textarea
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        className='review-add__text'
                    />
                </div>
                <div className='review-add__controls'>
                    <button className='button-cancel' onClick={() => setEditMode(false)}>Cancel</button>
                    <button type='submit' className='submit-button'>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default ReviewAdd
