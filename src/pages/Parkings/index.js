import React from 'react'
import { connect } from 'react-redux'
import { fetchParkings, editParking } from 'actions/parkings'
import Page from 'components/Page'
import ParkingsList from 'components/ParkingsList'
import ParkingsCanvas from 'components/ParkingsCanvas'
import SectionHeader from 'components/SectionHeader'

class Parkings extends React.Component {
	componentDidMount() {
		setInterval(() => { this.props.fetchParkings() }, 500)
	}

	render() {
		return (
			<Page justify={'flex-start'} align={'flex-start'} withHeader withSideBar>
				<SectionHeader title={'Parkings Live State'} />
				<ParkingsCanvas parkings={this.props.parkings.data} editParking={this.props.editParking} />
				{false && <ParkingsList parkings={this.props.parkings.data} editParking={this.props.editParking} />}
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