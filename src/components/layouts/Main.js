import React, { Component } from 'react';
import CatCard from './../common/CatCard';
import { connect } from 'react-redux';
import { getCats } from './../../store/actions/CatActions';
import { getBreeds } from './../../store/actions/BreedActions';
import { getCategories } from './../../store/actions/CategoryActions';
import HeaderImage from './../img/1.jpg';

class Main extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    componentDidMount = async () => {

        await this.props.getCats();

        await this.props.getBreeds();

        await this.props.getCategories();

    }
    
    render() {

        const { cats, breeds, categories } = this.props;

        console.log(categories);

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

                <div className="container px-12 py-5 mx-auto grid grid-cols-1 md:grid-cols-4 min-h-screen gap-3">

                    {cats.data.map((cat, i) => 

                        <CatCard key={i} cat={cat} />

                    )}

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

const mapStateToProps = (state, ownProps) => {

    return {

        cats: state.cats,

        breeds: state.breeds,

        categories: state.categories

    }

};

export default connect(mapStateToProps, { getCats, getBreeds, getCategories })(Main);
