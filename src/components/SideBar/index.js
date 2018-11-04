import React from 'react'
import styled from 'styled-components'
import sideBarLinks from 'config/sideBarLinks'
import { withRouter } from 'react-router'

const SideBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	-webkit-box-shadow: 1px 5px 5px 0px rgba(0,0,0,0.2);
	-moz-box-shadow: 1px 5px 5px 0px rgba(0,0,0,0.2);
	box-shadow: 1px 5px 5px 0px rgba(0,0,0,0.2);
`

const Section = styled.div`
	height: 80px;
	width: 200px;
	display: flex;
	align-items: center;
	padding: 10px 20px;
	cursor: pointer;
	transition: border .3s ease;
	color: ${({ theme }) => theme.colors.gray};
	border-left: 5px solid ${({ theme, active }) => active ? theme.colors.blue : theme.colors.transparent};

	&:hover{
		border-left: 5px solid ${({ theme, active }) => active ? theme.colors.blue : theme.colors.gray};
		label{
			color: ${({ theme, active }) => active ? theme.colors.blue : theme.colors.gray};
		}
	}
`

const SectionTitle = styled.label`
	font-size: 18px;
	cursor: pointer;
	transition: all .3s ease;
	color: ${({ theme, active }) => active ? theme.colors.blue : theme.colors.gray};
	font-family: ${({ theme }) => theme.fonts.roboto};
`

class SideBar extends React.Component {
	onLinkClick = link => this.props.history.push(`/${link}`)
	render() {
		const currentPath = window.location.pathname.replace('/', '');
		return (
			<SideBarContainer>
				{
					sideBarLinks.map((section, i) => {
						const active = currentPath === section.link;
						return (
							<Section key={`s-${i}`} active={active} onClick={() => this.onLinkClick(section.link)}>
								<SectionTitle active={active} >{section.title}</SectionTitle>
							</Section>
						)
					}
					)
				}
			</SideBarContainer>
		)
	}
}

export default withRouter(SideBar)