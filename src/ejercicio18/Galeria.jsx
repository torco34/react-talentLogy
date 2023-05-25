import { useState } from "react";
import Photo from "./Photo";
export const Galeria = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const [photos, setPhotos] = useState(Photo);

  const handlePhotoClick = (photoId) => {
    if (selectedPhotos.includes(photoId)) {
      setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId));
    } else {
      setSelectedPhotos([...selectedPhotos, photoId]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedPhotos = photos.filter(
      (photo) => !selectedPhotos.includes(photo.id)
    );
    setPhotos(updatedPhotos);
    setSelectedPhotos([]);
  };

  return (
    <div>
      <ul>
        {photos.map((photo) => (
          <li
            key={photo.id}
            onClick={() => handlePhotoClick(photo.id)}
            style={{
              cursor: "pointer",
              textDecoration: selectedPhotos.includes(photo.id)
                ? "line-through"
                : "none",
            }}
          >
            <img src={photo.url} alt={`Photo ${photo.id}`} />
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteSelected}>Eliminar seleccionados</button>
    </div>
  );
};
