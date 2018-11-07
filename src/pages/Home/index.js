import React from 'react'
import Page from 'components/Page';
import SectionHeader from 'components/SectionHeader'
import Card from '../../components/Card';
import styled from 'styled-components'


const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	padding: 20px 3px;
	justify-content: space-between;
`

class Home extends React.Component {
	render() {
		return (
			<Page align='space-between' withHeader withSideBar>
				<SectionHeader title={'Dashboard'} />
				<CardsContainer>
					<Card title={'Parkings'} content={30} />
					<Card title={'Avaiable parkings'} content={12} />
					<Card title={'Ocuppied parkings'} content={18} />
					<Card title={'Parkings'} content={30} />
					<Card title={'Avaiable parkings'} content={12} />
					<Card title={'Ocuppied parkings'} content={18} />
					<Card title={'Parkings'} content={30} />
					<Card title={'Avaiable parkings'} content={12} />
					<Card title={'Ocuppied parkings'} content={18} />
				</CardsContainer>
			</Page>
		)
	}
}

export default Home