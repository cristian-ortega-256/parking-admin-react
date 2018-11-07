import React from 'react'
import styled from 'styled-components'
import { Stage, Layer } from 'react-konva';
import ParkingDrawable from 'components/ParkingDrawable';


const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.transparent};
	margin-top: 15px;
	border: 1px dashed ${({ theme }) => theme.colors.blue};
`

class ParkingsCanvas extends React.Component {
	handleParkingClick = parking => {
		let p = Object.assign({}, parking)
		p.isOccupied = !p.isOccupied
		this.props.editParking(p)
	}

	render() {
		return (
			<Container>
				<Stage width={this.props.width} height={this.props.height} >
					<Layer>
						{
							this.props.parkings.map((p, i) =>
								<ParkingDrawable key={`parking-${i}`} index={i} parking={p} onClick={this.handleParkingClick} />
							)
						}
					</Layer>
				</Stage>
			</Container>
		)
	}
}

export default ParkingsCanvas