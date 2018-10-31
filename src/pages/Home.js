import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchParkings } from 'actions/parkings'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.blue};
`

const Title = styled.label`
	font-family: ${({ theme }) => theme.fonts.roboto};
	font-weight: 700;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.alto};
`

class Home extends React.Component {

	componentDidMount() {
		this.props.fetchParkings()
	}

	componentDidUpdate() {
		console.log(this.props.parkings)
	}

	render() {
		return (
			<Container>
				<Title> HOME PAGE </Title>
				<Title> Parkings </Title>
				<Title>{this.props.parkings.data.length}</Title>
			</Container>
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