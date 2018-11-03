import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchParkings } from 'actions/parkings'
import Page from 'components/Page';

const Title = styled.label`
	font-family: ${({ theme }) => theme.fonts.roboto};
	font-weight: 700;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.blue};
`

const ParkingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	`

const Parking = styled.label`
	font-weight: 500;
	font-size: 18px;
	border-radius: 3px;
	margin: 5px;
	padding: 5px 10px;
	font-family: ${({ theme }) => theme.fonts.roboto};
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};
`

class Home extends React.Component {

	componentDidMount() {
		this.props.fetchParkings()
	}

	render() {
		return (
			<Page withHeader withSideBar>
				<Title> PARKINGS PAGE </Title>
				<Title> Parkings </Title>
				<ParkingsContainer>
					{
						this.props.parkings.data.map(
							parking =>
								<Parking>
									{`x: ${parking.x} y: ${parking.y}`}
								</Parking>
						)
					}
				</ParkingsContainer>
			</Page>
		)
	}
}

const mapStateToProps = ({ parkings }) => ({
	parkings
})

const mapDispatchToProps = {
	fetchParkings
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)