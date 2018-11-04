import React from 'react'
import styled from 'styled-components'
import Title from '../Title';
import theme from 'config/theme'

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.blue};
	padding: 30px 20px;
`

const SectionHeader = props => (
	<Container>
		<Title color={theme.colors.white} >
			{props.title}
		</Title>
	</Container>
)

export default SectionHeader