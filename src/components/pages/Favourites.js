import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavourites } from './../../store/actions/FavouriteActions';
import MainLayout from './../layouts/Main';
import FavouriteCard from './../common/FavouriteCard';

class Favourites extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    componentDidMount = async () => {

        await this.props.getFavourites();

    }
    
    render() {

        const { favourites } = this.props;

        return (

            <MainLayout>

                <div className="container px-12 py-3 mx-auto">

                    <h1 className="text-red-700 text-2xl tracking-wider uppercase">Cats Favourites</h1>

                </div>

                <div className="container px-12 py-5 mx-auto grid grid-cols-1 md:grid-cols-4 min-h-screen gap-3">

                {favourites.data.map((favourite, i) => 

                    <FavouriteCard key={i} favourite={favourite} />

                )}

                </div>
                
            </MainLayout>

        )

    }

};

const mapStateToProps = (state, ownProps) => {

    return {

        favourites: state.favourites

    }

};

export default connect(mapStateToProps, { getFavourites })(Favourites);
