import "../../index.css"
import placeholderAvatar from "../../assets/images/placehoder-avatar.png"
import { useEffect, useState } from "react";



function UpdateAvatar() {
    const [previewAvatar, setPreviewAvatar] = useState("");
    


    const handleChange = (e) => {
        const file = e.target.files[0];
        setPreviewAvatar(file ? URL.createObjectURL(file) : "" );

    };

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewAvatar);
        };
    }, [previewAvatar]);



    return (
        <div>
            <label >
                <input type="file" multiple hidden onChange={handleChange} accept="image/*" />
                <img className="rounded-full w-50 h-50 bg-amber-300" src={previewAvatar || placeholderAvatar} alt="" />
                <p className="text-center text-gray-600 mt-4 text-sm">
                    Click vào ảnh để chọn avatar lam hinh nen nhe .
                </p>
            </label>
        </div>
    );
}


export default UpdateAvatar;