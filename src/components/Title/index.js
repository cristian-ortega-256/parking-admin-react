import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.label`
	font-family: ${({ theme }) => theme.fonts.roboto};
	font-weight: 700;
	font-size: 24px;
	color: ${({ theme, color }) => color ? color : theme.colors.blue};
`

const Title = props => (
	<StyledTitle color={props.color}>
		{props.children}
	</StyledTitle>
)

export default Title