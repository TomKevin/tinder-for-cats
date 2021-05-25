import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFavourite } from './../../store/actions/FavouriteActions';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ favourite, deleteFavourite }) => {

    const [response, setResponse] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {
        
        return async () => {

            

        }

    }, [response, error]);

    const removeFavourite = async id => {

        try {

            const response = await deleteFavourite(id);

            setResponse(response);

            toast.warn("Favourite Removed !");

            setTimeout(() => {

                return window.location.href = '/favourites';
                
            }, 3000);
            
            
        } catch (error) {

            setError(error);
            
        }

    };

    return (

        <div className="bg-white w-full relative h-80 rounded-2xl shadow-lg">

            <img className="h-full w-full object-cover rounded-2xl" src={favourite.image.url} alt="TinderCats" />

            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 h-full flex flex-row justify-end items-start rounded-2xl p-8">

                <div className="relative flex flex-row justify-between items-end w-full h-full">

                    <div className="flex flex-col">

                        {/* <h2 className="text-white capitalize text-md"></h2>

                        <p className="text-gray-400 text-sm capitalize"></p> */}

                    </div>

                    <div className="flex flex-row justify-between items-center gap-x-3">

                        <button className="text-gray-50 focus:outline-none" onClick={() => {removeFavourite(favourite.id)}}>

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

export default connect(mapStateToProps, { deleteFavourite })(withRouter(Card));