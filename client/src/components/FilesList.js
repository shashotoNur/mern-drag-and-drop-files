import React, { useState, useEffect } from 'react';
import axios from 'axios';

//utils
import downloadFile from '../utils/downloadFile'; 

const API_URL = 'http://localhost:5000';

const FilesList = () =>
{
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() =>
  {
    const fetchFileData = async () =>
    {
        try
        {
          const { data } = await axios.get(`${API_URL}/files`);
          setErrorMsg('');
          setFilesList(data);
        }
        catch (error) { error.response && setErrorMsg(error.response.data); };
    }

    fetchFileData();
  }, []);

  const startDownload = (_id, file_path, file_mimetype) =>
  {
    setErrorMsg('');

    const result = downloadFile(_id, file_path, file_mimetype);

    if(result?.error) setErrorMsg(result?.error);
    else return result;
  };

  

  return (
    <div className="files-container">
      { errorMsg && <p className="errorMsg">{ errorMsg }</p> }

      <table className="files-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Download File</th>
          </tr>
        </thead>

        <tbody>
          { filesList.length > 0 ?
          (
            filesList.map(
              ({ _id, title, description, file_path, file_mimetype }) =>
              (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{description}</td>

                  <td>
                    <input type="button" value="Download" onClick={ () => startDownload(_id, file_path, file_mimetype) } />
                  </td>

                </tr>
              )
            )
          ) :
          (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilesList;