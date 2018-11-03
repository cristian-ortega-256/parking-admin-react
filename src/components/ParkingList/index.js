import React from 'react'
import styled from 'styled-components'
import Parking from 'components/Parking'

const ParkingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ParkingList = props => (
    <ParkingsContainer>
        {
			props.parkings.map(
				parking => <Parking parking={parking} onClick={parking => props.editParking(parking)}/>
			)
		}
    </ParkingsContainer>
);

export default ParkingList;