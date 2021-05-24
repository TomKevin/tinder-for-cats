import React, { Component } from 'react';
import HeaderImage from './../img/1.jpg';

class Main extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        return (

            <div className="bg-gray-50 min-h-screen">

                <nav className="bg-white shadow" role="navigation">

                    <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">

                        <div className="mr-4 md:mr-8 flex flex-row space-x-2 text-red-600 items-center">

                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>

                            <h1 className="text-red-600 uppercase text-md">Tinder Cats</h1>

                        </div>

                        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">

                            <ul className="w-full flex flex-col justify-end mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">

                                <li>

                                    <a className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" href="#" title="Link">Breeds</a>

                                </li>

                                <li>

                                    <a className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" href="#" title="Link">Categories</a>

                                </li>

                                <li>

                                    <a className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" href="#" title="Link">Favourites</a>

                                </li>

                                <li>

                                    <a className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" href="#" title="Link">Votes</a>

                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>

                <div className="flex flex-col w-full relative h-96">

                    <img className="object-cover h-full" src={HeaderImage} alt="TinderCats" />

                    <div className="absolute inset-0 bg-red-900 bg-opacity-60 h-full flex flex-col justify-center items-center">

                        <h2 className="text-6xl text-white capitalize">Tinder Cats</h2>

                        <p className="text-gray-100 capitalize my-6">Tinder Cats is the world's most popular cats dating app.</p>

                        <button className="py-3 bg-white shadow-lg px-6 my-3 text-red-900 rounded-full">Get Started</button>

                    </div>

                </div>

                <div className="container px-12 py-5 mx-auto grid grid-cols-1 md:grid-cols-4 min-h-screen">

                    <div className="bg-white w-full relative h-80 rounded-2xl shadow-lg">

                        <img className="object-cover h-full rounded-2xl" src={HeaderImage} alt="TinderCats" />

                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 h-full flex flex-row justify-end items-start rounded-2xl p-8">

                            <div className="relative flex flex-row justify-between items-end w-full h-full">

                                <div className="flex flex-col">

                                    <h2 className="text-white capitalize text-md">Name</h2>

                                    <p className="text-gray-400 text-sm capitalize">Long Description</p>

                                </div>

                                <div className="flex flex-row justify-between items-center gap-x-3">

                                    <button className="text-gray-50 bg-gray-50 bg-opacity-20 p-2 rounded-full shadow-lg">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>

                                    </button>

                                    <button className="text-gray-50 bg-gray-50 bg-opacity-20 p-2 rounded-full shadow-lg">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                        </svg>

                                    </button>

                                    <button className="text-gray-50">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                
                <footer className="flex flex-wrap items-center justify-between p-3 m-auto bg-red-900">

                    <div className="container mx-auto flex flex-col flex-wrap items-center justify-between py-4">

                        <div className="flex mx-auto text-white text-center">

                            Designed by Kevin © 2021

                        </div>

                    </div>

                </footer>
                
            </div>

        )

    }

};

export default Main;
