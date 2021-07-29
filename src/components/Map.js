import React, { useContext } from 'react';
import { ParcelContext } from '../context/ParcelContext';


const mapContainerStyle = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	height: '100%',
	width: '100%'
};


function Map(props) {
	
	const { mapContainer } = useContext( ParcelContext )

	return (
    <div ref={mapContainer} style={mapContainerStyle}></div>
  );
}

export default Map;