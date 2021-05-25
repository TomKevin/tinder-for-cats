import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ breed }) => {

    return (

        <Link to={`/breeds`}>

            <div className="bg-white w-full relative h-80 rounded-2xl shadow-lg">

                <img className="h-full w-full object-cover rounded-2xl" src={breed.image.url} alt="TinderCats" />

                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 h-full flex flex-row justify-end items-start rounded-2xl p-8">

                    <div className="relative flex flex-row justify-between items-end w-full h-full">

                        <div className="flex flex-col">

                            <h2 className="text-white capitalize text-md">{breed.name}</h2>

                            <p className="text-gray-400 text-sm capitalize"></p>

                        </div>

                    </div>

                </div>

            </div>

        </Link>

    )

};

export default Card;