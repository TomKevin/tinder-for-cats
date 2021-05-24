import React, { Component } from 'react';
import MainLayout from './../layouts/Main';
import { connect } from 'react-redux';
import { getBreeds } from './../../store/actions/BreedActions';
import BreedCard from './../common/BreedCard';

class Breeds extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    componentDidMount = async () => {

        await this.props.getBreeds();

    }
    
    render() {

        const { breeds } = this.props;

        return (

            <MainLayout>

                <div className="container px-12 py-3 mx-auto">

                    <h1 className="text-red-700 text-2xl tracking-wider uppercase">Cats Breeds</h1>

                </div>

                <div className="container px-12 py-5 mx-auto grid grid-cols-1 md:grid-cols-4 min-h-screen gap-3">

                    {breeds.data.map((breed, i) => 

                        <BreedCard key={i} breed={breed} />

                    )}

                </div>
                
            </MainLayout>

        )

    }

};

const mapStateToProps = (state, ownProps) => {

    return {

        breeds: state.breeds

    }

};

export default connect(mapStateToProps, { getBreeds })(Breeds);
