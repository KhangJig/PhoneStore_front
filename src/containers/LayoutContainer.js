import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import { withCookies } from 'react-cookie'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import {
    ACCESS_COOKIE_NAME
} from '../config'
const { Header, Content } = Layout


const AsyncPokemonContainer = asyncComponent({
    resolve: () => import('./PokeContainer'),
    ErrorComponent: ({ error }) => <div>{error.message}</div>
})
const AsyncAbilitiesContainer = asyncComponent({
    resolve: () => import('./AbilitiesContainer'),
    ErrorComponent: ({ error }) => <div>{error.message}</div>
})
const AsyncSpeciesContainer = asyncComponent({
    resolve: () => import('./SpeciesContainer'),
    ErrorComponent: ({ error }) => <div>{error.message}</div>
})


class LayoutContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedKeys: null
        }
    }

    componentWillMount() {
        switch (true) {
            case this.props.location.pathname.includes('/pokemons'):
                this.setState({ selectedKeys: ['1000'] })
                break
            case this.props.location.pathname.includes('/abilities'):
                this.setState({ selectedKeys: ['1001'] })
                break
            case this.props.location.pathname.includes('/species'):
                this.setState({ selectedKeys: ['1002'] })
                break
            default:
                break
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location !== nextProps.location) {
            switch (true) {
                case nextProps.location.pathname.includes('/pokemons'):
                    this.setState({ selectedKeys: ['1000'] })
                    break
                case nextProps.location.pathname.includes('/abilities'):
                    this.setState({ selectedKeys: ['1001'] })
                    break
                case nextProps.location.pathname.includes('/species'):
                    this.setState({ selectedKeys: ['1002'] })
                    break
                default:
                    break
            }
        }
    }

    render() {
        return (
            <Layout>
                <Header>
                    <div style={{
                        width: 120, height: 31, backgroundColor: (0, 0, 0), margin: (16, 28, 16, 0), float: 'left'
                    }} />
                    <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }} selectedKeys={this.state.selectedKeys ? this.state.selectedKeys : [this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1)]}>
                        <Menu.Item
                            key="1000"
                            onClick={() => {
                                this.props.history.push(`/pokemons`)
                                this.setState({ selectedKeys: ['1000'] })
                            }
                            }>
                            <span>Pokémon</span>
                        </Menu.Item>
                        
                        <Menu.Item
                            key="1001"
                            onClick={() => {
                                this.props.history.push(`/abilities`)
                                this.setState({ selectedKeys: ['1001'] })
                            }
                            }>
                            <span>Abilities</span>
                        </Menu.Item>
                        
                        <Menu.Item
                            key="1002"
                            onClick={() => {
                                this.props.history.push(`/species`)
                                this.setState({ selectedKeys: ['1002'] })
                            }
                            }>
                            <span>Species</span>
                        </Menu.Item>
                        
                        <Menu.Item
                            key="1003"
                            onClick={() => {
                                this.props.cookies.remove(ACCESS_COOKIE_NAME, {
                                    path: '/',
                                    domain: '',
                                    httpOnly: false
                                })
                            }
                            }>
                            <span>Logout</span>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content>
                    <Switch>
                        <Route exact path='/pokemons' component={AsyncPokemonContainer} />
                        <Route exact path='/abilities' component={AsyncAbilitiesContainer} />
                        <Route exact path='/species' component={AsyncSpeciesContainer} />
                    </Switch>
                </Content>
            </Layout>
        )
    }
}


const mapStateToProps = state => {
    return (
        {}
    )
}

const mapDispatchToProps = dispatch => ({
})

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(LayoutContainer))