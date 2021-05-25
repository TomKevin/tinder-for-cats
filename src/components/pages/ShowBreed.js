import React, { Component } from 'react';
import MainLayout from './../layouts/Main';
import { connect } from 'react-redux';
import { getBreedById } from './../../store/actions/BreedActions';

class ShowBreed extends Component {

    constructor(props) {

      super(props);
    
      this.state = {


         
      };

    };

    componentDidMount = async () => {

        const { match: { params } } = this.props;

        await this.props.getBreedById(params.id);

    }
    
    render() {

        const { breeds: { breed } } = this.props;

        console.log(breed);

        return (

            <MainLayout>

                
                
            </MainLayout>

        )

    }

};

const mapStateToProps = (state, ownProps) => {

    return {

        breeds: state.breeds

    }

};

export default connect(mapStateToProps, { getBreedById })(ShowBreed);
