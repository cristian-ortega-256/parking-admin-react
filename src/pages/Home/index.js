import React from 'react'
import Page from 'components/Page';
import Title from 'components/Title'
class Home extends React.Component {
	render() {
		return (
			<Page withHeader withSideBar>
				<Title>{'Home Page'}</Title>
			</Page>
		)
	}
}

export default Home