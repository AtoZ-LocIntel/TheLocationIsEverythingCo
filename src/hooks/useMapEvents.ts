// hooks/useMapEvents.ts
import { useMapEvents } from 'react-leaflet';

const useMapEventsHandler = (onBoundsChange: (bounds: [[number, number], [number, number]]) => void) => {
  useMapEvents({
    moveend: (e) => {
      const map = e.target;
      const bounds = map.getBounds();
      const newBounds: [[number, number], [number, number]] = [
        [bounds.getSouth(), bounds.getWest()],
        [bounds.getNorth(), bounds.getEast()],
      ];
      onBoundsChange(newBounds);
    },
  });
};

export default useMapEventsHandler;
