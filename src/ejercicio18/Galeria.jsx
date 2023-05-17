import { useState } from "react";
import Photo from "./Photo";
export const Galeria = () => {
  const [photos, setPhotos] = useState(Photo);

  const deletePhoto = (photoId) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
    setPhotos(updatedPhotos);
  };
  return (
    <div>
      <h1>Galería de Fotos</h1>
      <div>
        {photos.map((photo) => (
          <div className="photo" key={photo.id}>
            <img src={photo.url} alt="Foto" />
            <button onClick={() => deletePhoto(photo.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
