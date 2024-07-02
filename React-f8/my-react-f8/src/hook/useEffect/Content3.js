//ví dụ về chọn hình ảnh tải lên
//xử lí rò rỉ bộ nhớ
import { useEffect, useState } from "react";

const Content3 = () => {
    const [avatar , setAvatar] = useState();

    useEffect(() => {

        //cleanup
        return() => {
           avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const handlePreviewAvatar = (event) => {
        const file = event.target.files[0]

        file.preview = URL.createObjectURL(file);
        
        setAvatar(file);

        //bug ko chọn 1 hình 2 lần
        // event.target.value = null
    }
    return(
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} width="5%" />
            )}
        </div>
    );
}

export default Content3;