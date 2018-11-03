import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page';

const Title = styled.label`
	font-family: ${({ theme }) => theme.fonts.roboto};
	font-weight: 700;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.blue};
`

class Home extends React.Component {
	render() {
		return (
			<Page withHeader withSideBar>
				<Title> HOME PAGE </Title>
			</Page>
		)
	}
}

export default Home