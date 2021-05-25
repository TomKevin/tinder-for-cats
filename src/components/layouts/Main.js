import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCats } from './../../store/actions/CatActions';
import { getBreeds } from './../../store/actions/BreedActions';
import { getCategories } from './../../store/actions/CategoryActions';

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

        return (

            <div className="bg-gray-50 min-h-screen">

                <nav className="bg-white shadow" role="navigation">

                    <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">

                        <Link to="/">

                            <div className="mr-4 md:mr-8 flex flex-row space-x-2 text-red-600 items-center">

                                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>

                                <h1 className="text-red-600 uppercase text-md">Tinder Cats</h1>

                            </div>

                        </Link>

                        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">

                            <ul className="w-full flex flex-col justify-end mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">

                                <li>

                                    <Link className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" to="/">Home</Link>

                                </li>

                                <li>

                                    <Link className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" to="/breeds">Breeds</Link>

                                </li>

                                <li>

                                    <Link className="block px-4 py-1 md:p-2 lg:px-4 text-red-600" to="/favourites">Favourites</Link>

                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>

                {this.props.children}
                
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
