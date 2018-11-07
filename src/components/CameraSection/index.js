import React from 'react'
import styled from 'styled-components'

const Streaming = styled.img`
    width: 640px;
    height: 480px;
    border: 0px;
`

//const ip = 'https://192.168.0.10:8080/video?loginuse=admin&amp;loginpas='
const ip = 'https://192.168.43.1:8080/video'

const CameraSection = () => (
    <Streaming src={ip} />
)

export default CameraSection