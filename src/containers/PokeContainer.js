import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestGetListPokemon } from '../actions/PokeAction'

import PokePage from '../pages/pokePage'

class PokeContainer extends Component {

    componentDidMount(){
        this.props.requestGetListPokemon()
    }
    
    render() {
        return (
            <PokePage
                {...this.props}
                {...this.state}
            />

        );
    }
}

const mapStateToProps = state => {
    return ({
        ...state.pokeReducer
    })
}

const mapDispatchToProps = dispatch => ({
    requestGetListPokemon: () => dispatch(requestGetListPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeContainer)