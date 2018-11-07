import React from 'react'
import { connect } from 'react-redux'
import { fetchConfiguration } from 'actions/configuration'
import Page from 'components/Page'
import SectionHeader from 'components/SectionHeader'
import CameraSection from 'components/CameraSection'

class Camera extends React.Component {
	componentDidMount() {
		this.props.fetchConfiguration()
	}

    render(){
        return (
            <Page justify={'flex-start'} align={'flex-start'} withHeader withSideBar>
                <SectionHeader title={'Camera Live Streaming'} />
                <CameraSection ip={this.props.configurations.data.ip} port={this.props.configurations.data.port}/>
            </Page>
        )
    }
}

const mapStateToProps = ({  configurations }) => ({
	configurations
})

const mapDispatchToProps = {
	fetchConfiguration
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Camera)