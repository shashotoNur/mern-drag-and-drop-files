import download from 'downloadjs';
import axios from 'axios';

const API_URL = 'http://localhost:5000';
const downloadFile = async (id, path, mimetype) =>
{
  try
  {
    const result = await axios.get(`${API_URL}/download/${id}`,
                                            { responseType: 'blob' });

    const filename = path.slice(9, path.length);

    return download(result.data, filename, mimetype);
  }
  catch (error)
  {
    if (error.response && error.response.status === 400)
        return { error: 'Error while downloading file. Try again later' };
  };
};

export default downloadFile;