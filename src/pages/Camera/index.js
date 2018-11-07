import React from 'react'
import Page from 'components/Page'
import SectionHeader from 'components/SectionHeader'
import CameraSection from 'components/CameraSection'

class Camera extends React.Component {
    render(){
        return (
            <Page justify={'flex-start'} align={'flex-start'} withHeader withSideBar>
                <SectionHeader title={'Camera Live Streaming'} />
                <CameraSection />
            </Page>
        )
    }
}

export default Camera