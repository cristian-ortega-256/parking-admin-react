import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header';
import SideBar from '../SideBar';

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.white};
`

const PageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	width: 100%;
`

const PageBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: stretch;
	height: 100%;
	width: 100%;
	padding: 20px;
`

class Page extends React.Component {
	render() {
		const { withHeader, withSideBar } = this.props
		return (
			<PageContainer>
				{withHeader && <Header />}
				<PageWrapper>
					{withSideBar && <SideBar />}
					<PageBlock>
						{this.props.children}
					</PageBlock>
				</PageWrapper>
			</PageContainer>
		)
	}
}

export default Page