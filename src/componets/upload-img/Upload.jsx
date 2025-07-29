import './upload.css';
import { useState } from "react";

export const Upload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const archivo = e.target.files[0];
        setFile(archivo);
        setPreview(URL.createObjectURL(archivo));
        console.log(archivo);
    };

    return (
        <div className='upload-container'>
            <input type="file" accept="image/*" onChange={handleFileChange} />

            <div className="preview-container">
                <section>
                    <p>Imagen previa</p>
                    {preview && <img src={preview} alt="Preview" width="150" />}
                </section>
            </div>
        </div>
    );
};