import React, { Fragment } from 'react'
import { Rect, Text } from 'react-konva';
import theme from 'config/theme'

const ParkingDrawable = props => {
	const { id, tl_x, tl_y, br_x, br_y, isOccupied } = props.parking
	const scaleFactor = 4
	const width = (br_x - tl_x) * scaleFactor
	const height = (br_y - tl_y) * scaleFactor
	const fontSize = 16

	return (
		<Fragment>
			<Rect
				key={props.index}
				x={tl_x * scaleFactor}
				y={tl_y * scaleFactor / 2}
				width={width}
				height={height}
				shadowBlur={0}
				stroke={isOccupied ? theme.colors.red : theme.colors.green}
				strokeWidth={3}
				onClick={() => props.onClick(props.parking)}
			/>
			<Text
				x={(tl_x * scaleFactor) + (width / 2 - fontSize / 2)}
				y={(tl_y * scaleFactor / 2) + (height / 2 - fontSize / 2)}
				text={id}
				fill={theme.colors.black}
				fontSize={fontSize}
				fontFamily={theme.fonts.roboto}
			/>
		</Fragment>
	)
}

export default ParkingDrawable