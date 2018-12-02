import React from 'react'
import { connect } from 'react-redux'
import { fetchConfiguration } from 'actions/configuration'
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
	componentDidMount() {
		this.props.fetchConfiguration()
	}

	render() {
		return (
			<Page align='space-between' withHeader withSideBar>
				<SectionHeader title={'Dashboard'} />
				<CardsContainer>
					<Card title={'Estacionamientos Habilitados'} content={30} />
					<Card title={'Estacionamientos Libres'} content={12} />
					<Card title={'Estacionamientos Ocupados'} content={18} />
					<Card title={'Reporte Mensual'} />
				</CardsContainer>
			</Page>
		)
	}
}

const mapDispatchToProps = {
	fetchConfiguration
}

export default connect(
	null,
	mapDispatchToProps
)(Home)