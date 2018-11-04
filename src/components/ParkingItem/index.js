import React from 'react'
import styled from 'styled-components'

const ParkingContainer = styled.label`
	font-weight: 500;
	font-size: 18px;
	border-radius: 3px;
	margin: 5px;
	padding: 5px 10px;
	font-family: ${({ theme }) => theme.fonts.roboto};
	background-color: ${({ theme, state }) => state ? theme.colors.green : theme.colors.red};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
`

const ParkingItem = props => {
	const handleParkingOnClick = () => {
		let p = props.parking;
		p.isOccupied = !p.isOccupied;
		props.onClick(p)
	}

	return (
		<ParkingContainer state={props.parking.isOccupied} onClick={handleParkingOnClick}>
			{`x: ${props.parking.x} y: ${props.parking.y}`}
		</ParkingContainer>
	)
}



export default ParkingItem