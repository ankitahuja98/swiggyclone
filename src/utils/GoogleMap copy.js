import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const GoogleMap = () => {
  const [address, setaddress] = useState("");
  const [coordinate, setCoordinates] = useState({
    lat: null,
    long: null,
  });

  const handleSelect = async value => {
    const result = await geocodeByAddress(value);
    const ll = await getLatLng(result[0]);
    console.log(ll);
    setaddress(value);
    setCoordinates(ll);
  };

  return (
    <div>
      <p>lat : {coordinate.lat}</p>
      <p>long : {coordinate.long}</p>
      <p>Address : {address}</p>

      <PlacesAutocomplete
        value={address}
        onChange={setaddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default GoogleMap;
