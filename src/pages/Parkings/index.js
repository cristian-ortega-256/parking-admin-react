import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchParkings, editParking } from 'actions/parkings'
import Page from 'components/Page';
import ParkingList from 'components/ParkingList';

const Title = styled.label`
	font-family: ${({ theme }) => theme.fonts.roboto};
	font-weight: 700;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.blue};
`

class Parkings extends React.Component {
	componentDidMount() {
		this.props.fetchParkings()
	}

	render() {
		return (
			<Page withHeader withSideBar>
				<Title> PARKINGS PAGE </Title>
				<Title> Parkings </Title>
				<ParkingList parkings={this.props.parkings.data} editParking={this.props.editParking} />
				{this.props.parkings.error && <label>error</label>}
			</Page>
		)
	}
}

const mapStateToProps = ({ parkings, parkingsRequest }) => ({
	parkings,
	parkingsRequest
})

const mapDispatchToProps = {
	fetchParkings,
	editParking
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Parkings)