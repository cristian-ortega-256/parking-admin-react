import React from 'react'
import styled from 'styled-components'
import ParkingItem from 'components/ParkingItem'

const ParkingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ParkingsList = props => (
	<ParkingsContainer>
		{
			props.parkings.map(
				parking =>
					<ParkingItem parking={parking} onClick={parking => props.editParking(parking)} />
			)
		}
	</ParkingsContainer>
);

export default ParkingsList;