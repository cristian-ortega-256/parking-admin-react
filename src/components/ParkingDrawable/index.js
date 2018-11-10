import React, { Fragment } from 'react'
import { Rect, Text } from 'react-konva';
import theme from 'config/theme'

const ParkingDrawable = props => {
	const { id, tl_x, tl_y, br_x, br_y, isOccupied } = props.parking
	const width = br_x - tl_x
	const height = br_y - tl_y
	const fontSize = 16

	return (
		<Fragment>
			<Rect
				key={props.index}
				x={tl_x}
				y={tl_y}
				width={width}
				height={height}
				shadowBlur={0}
				stroke={isOccupied ? theme.colors.red : theme.colors.green}
				strokeWidth={3}
				onClick={() => props.onClick(props.parking)}
			/>
			<Text
				x={tl_x + (width / 2 - fontSize / 2)}
				y={tl_y + (height / 2 - fontSize / 2)}
				text={id}
				fill={theme.colors.black}
				fontSize={fontSize}
				fontFamily={theme.fonts.roboto}
			/>
		</Fragment>
	)
}

export default ParkingDrawable