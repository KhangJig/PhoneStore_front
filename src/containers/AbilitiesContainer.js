import React, { Component } from 'react'
import { connect } from 'react-redux'

class AbilitiesContainer extends Component {

    render() {
        return (
            <div>
                AbilitiesContainer
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
    })
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AbilitiesContainer)