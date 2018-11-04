import React, { Fragment } from 'react'
import { Rect, Text } from 'react-konva';
import theme from 'config/theme'

const ParkingDrawable = props => {
	const { id, x, y, isOccupied } = props.parking
	const width = 75
	const height = 100
	const fontSize = 16

	return (
		<Fragment>
			<Rect
				key={props.index}
				x={x}
				y={y}
				width={width}
				height={height}
				shadowBlur={0}
				stroke={isOccupied ? theme.colors.red : theme.colors.green}
				strokeWidth={3}
				onClick={() => props.onClick(props.parking)}
			/>
			<Text
				x={x + (width / 2 - fontSize / 2)}
				y={y + (height / 2 - fontSize / 2)}
				text={id}
				fill={theme.colors.black}
				fontSize={fontSize}
				fontFamily={theme.fonts.roboto}
			/>
		</Fragment>
	)
}

export default ParkingDrawable