
import axios from "axios";

export function UploadPictureAPi(data) {
    console.log(data)
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
    return () =>
    
      axios
        .post("http://localhost:5000/Upload/image",data,config).then((res) => console.log(res));
        
  }