import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavourite } from './../../store/actions/FavouriteActions';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ cat, addFavourite, history, likes, addLike, removeLike, checkLikeExists }) => {

    const [response, setResponse] = useState(null);

    const [error, setError] = useState(null);

    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        
        return async () => {

            let result = checkLikeExists(cat.id);

            setIsLiked(result);

            // console.log(result);

        }

    }, [response, error, checkLikeExists, cat, isLiked]);

    const setLiked = () => {

        let result = checkLikeExists(cat.id);

        setIsLiked(result);

    }

    const addImageFavourite = async id => {

        try {

            let obj = {};

            obj.image_id = id;

            const response = await addFavourite(obj);

            setResponse(response);

            toast.success("Favourite Added Successfully !");

            setTimeout(() => {

                return history.push('/favourites');
                
            }, 3000);
            
            
        } catch (error) {

            setError(error);
            
        }

    };

    return (

        <div className="bg-white w-full relative h-80 rounded-2xl shadow-lg">

            <img className="h-full w-full object-cover rounded-2xl" src={cat.url} alt="TinderCats" />

            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 h-full flex flex-row justify-end items-start rounded-2xl p-8">

                <div className="relative flex flex-row justify-between items-end w-full h-full">

                    <div className="flex flex-col">

                        {/* <h2 className="text-white capitalize text-md"></h2>

                        <p className="text-gray-400 text-sm capitalize"></p> */}

                    </div>

                    <div className="flex flex-row justify-between items-center gap-x-3">

                        <button className="text-gray-50 bg-gray-50 bg-opacity-20 p-2 rounded-full shadow-lg focus:outline-none" onClick={() => {

                            toast.success("Thank you for liking the photo !");
                            
                            addLike(cat.id);

                            setLiked();
                            
                        }}>

                            {isLiked === false ?

                                (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>)

                                :

                                (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                </svg>)

                            }

                        </button>

                        <button className="text-gray-50 bg-gray-50 bg-opacity-20 p-2 rounded-full shadow-lg focus:outline-none" onClick={() => {

                            toast.warn("Like Removed !");
                            
                            removeLike(cat.id);

                            setLiked();
                            
                        }}>

                        {isLiked === false ?

                            (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg>)

                            :

                            (<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                            </svg>)

                        }

                        </button>

                        <button className="text-gray-50 focus:outline-none" onClick={() => { addImageFavourite(cat.id) }}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>

                        </button>

                    </div>

                </div>

            </div>

            <ToastContainer />

        </div>

    )

};

const mapStateToProps = (state, ownProps) => {

    return {

        favourites: state.favourites

    }

};

export default connect(mapStateToProps, { addFavourite })(withRouter(Card));
