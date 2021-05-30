import React, { useState, useRef, useCallback } from 'react'
import { Search, Locate } from './MapFunctions'

import { makeStyles } from '@material-ui/core/styles'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

import '@reach/combobox/styles.css'

import { libraries, mapContainerStyle, center } from './MapConst'

const useStyles = makeStyles((theme) => ({
  map: {
    marginTop: '30px',
    marginRight: '10px',
    marginBottom: '15px',
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
  },
}))

export const Map = (props) => {
  const { setLongitude, setLatitude } = props
  const [marker, setMarker] = useState(null)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCEbMl51eshDuU7zH8SFgkkuTbd4AjGeys',
    libraries,
  })
  const classes = useStyles()

  const onMapClick = useCallback((ev) => {
    setLongitude(ev.latLng.lng())
    setLatitude(ev.latLng.lat())
    const newMarker = { lat: ev.latLng.lat(), lng: ev.latLng.lng() }
    setMarker(newMarker)
  }, [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
    console.log('Ucitavanje mape')
  }, [])

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(15)
  }, [])

  if (loadError) return 'Error loading map'
  if (!isLoaded) return 'Loading Map'

  return (
    <div className={classes.map}>
      <Search panTo={panTo} />
      <Locate panTo={panTo} />
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {marker ? (
          <Marker
            key={`${marker.lat - marker.lng}`}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
          />
        ) : null}
      </GoogleMap>
    </div>
  )
}
