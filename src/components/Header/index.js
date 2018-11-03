import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10px 20px;
	width: 100%;
	height: 100px;
	-webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);
	-moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);
	box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);
`

const Title = styled.label`
	font-family: ${({ theme }) => theme.fonts.roboto};
	font-weight: 500;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.blue};
`

class Header extends React.Component {
	render() {
		return (
			<HeaderContainer>
				<Title>{'Parking Admin'}</Title>
			</HeaderContainer>
		)
	}
}

export default Header