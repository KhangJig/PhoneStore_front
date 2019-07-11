import React, { Component } from 'react'

import LoadingComponent from '../components/LoadingComponent'
import { Layout, List, Avatar } from 'antd'

class PokePage extends Component {

    render() {
        return (
            <Layout.Content>
                {
                    this.props.isLoadingGetPoke ?
                        <LoadingComponent size="50px" /> :
                        <List
                            itemLayout='horizontal'
                            dataSource={this.props.pokeList}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar shape='square' src={`http://pokestadium.com/sprites/xy/${item.name}.gif`} />}
                                        title={<a href={`${item.url}`}>{item.name}</a>}
                                        description="asdada"
                                    />
                                </List.Item>
                            )}
                        />
                }
            </Layout.Content>   
        )
    }

}

export default PokePage