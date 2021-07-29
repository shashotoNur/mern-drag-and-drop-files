import axios from 'axios';

const API_URL = 'http://localhost:5000';

const uploadFileFn = async (fileData, file) =>
{
    try
    {
      const { title, description } = fileData;
      if (title.trim() !== '' && description.trim() !== '')
      {
        if (file)
        {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('description', description);

          await axios.post(`${API_URL}/upload`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
        }
        else return { error: 'Please select a file to add.' };
      }
      else return { error: 'Please enter all the field values.' };

    }
    catch (error) { if(error?.response) return { error: error.response?.data }; };
}

export default uploadFileFn;