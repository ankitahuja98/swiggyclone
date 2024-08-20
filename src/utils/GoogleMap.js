const GoogleMap = () => {
  var autocomplete;
  var id = "location";
  const google = window.google;

  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById(id),
    {
      types: ["geocode"],
    }
  );

  return (
    <div>
      <input type="text" id="location"  className="border-2"/>
    </div>
  );
};

export default GoogleMap;
