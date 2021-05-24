import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats } from './../../store/actions/CatActions';
import CatCard from './../common/CatCard';
import MainLayout from './../layouts/Main';
import HeaderImage from './../img/1.jpg';

class Index extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    componentDidMount = async () => {

        await this.props.getCats();

    }
    
    render() {

        const { cats } = this.props;

        return (

            <MainLayout>

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

            </MainLayout>

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

export default connect(mapStateToProps, { getCats })(Index);
