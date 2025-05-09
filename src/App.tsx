import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getDistanceInMiles } from "./utils";
import LocationSearch from "./components/LocationSearch";

// Fix icon issue for Leaflet default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/assets/marker-icon-2x.png",
  iconUrl: "/assets/marker-icon.png",
  shadowUrl: "/assets/marker-shadow.png",
});

const App = () => {
  const [pendingSelection, setPendingSelection] = useState<{ lat: number; lon: number; label: string } | null>(null);
const [unassignedAssignments, setUnassignedAssignments] = useState<{
  lat: number;
  lon: number;
  label: string;
  date: string;
  timeBlock: string;
  duration: number;
}[]>([]);


const [assignmentTimeBlock, setAssignmentTimeBlock] = useState("Morning");
const [assignmentDuration, setAssignmentDuration] = useState(2); // default to 2 hours
const [assignmentDate, setAssignmentDate] = useState(() => new Date().toISOString().split("T")[0]);



const confirmAssignment = () => {
  if (pendingSelection) {
    setUnassignedAssignments(prev => [
      ...prev,
      {
        ...pendingSelection,
        date: assignmentDate,
        timeBlock: assignmentTimeBlock,
        duration: assignmentDuration
      }
    ]);
    setPendingSelection(null);
  }
};


  const cancelAssignment = () => {
    setPendingSelection(null);
  };

  return (
    <div className="relative h-screen w-screen">
      <MapContainer center={[39.7392, -104.9903]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        <LocationSearch
          onSelect={(place) => {
            setPendingSelection({
              lat: place.lat,
              lon: place.lon,
              label: place.display_name
            });
          }}
        />
		
		</MapContainer>
{pendingSelection && (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 shadow-md rounded-lg z-[1000] text-sm">
    <p>Save this location to assignments?</p>
    <p className="text-gray-600 mb-2">{pendingSelection.label}</p>

    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Date:</label>
      <input
        type="date"
        value={assignmentDate}
        onChange={(e) => setAssignmentDate(e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded"
      />
    </div>
	
	<div className="mb-3">
  <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Time:</label>
  <select
    value={assignmentTimeBlock}
    onChange={(e) => setAssignmentTimeBlock(e.target.value)}
    className="border border-gray-300 px-2 py-1 rounded w-full"
  >
    <option>Morning</option>
    <option>Afternoon</option>
    <option>Evening</option>
    <option>Night</option>
  </select>
</div>
<div className="mb-3">
  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours):</label>
  <input
    type="number"
    min={1}
    max={12}
    value={assignmentDuration}
    onChange={(e) => setAssignmentDuration(parseInt(e.target.value))}
    className="border border-gray-300 px-2 py-1 rounded w-full"
  />
</div>



    <div className="flex gap-2 justify-end">
      <button onClick={cancelAssignment} className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
      <button onClick={confirmAssignment} className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">Confirm</button>
    </div>
  </div>
)}

    </div>
  );
};

export default App;
