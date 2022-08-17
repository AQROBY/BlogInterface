import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }: { editFormData: any; handleEditFormChange: any; handleCancelClick: any }) => {
    return (
        <tr>
            <td>
                <input type="text" required placeholder="Enter a title..." name="title" value={editFormData.title} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required placeholder="Enter contents..." name="contents" value={editFormData.contents} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required placeholder="Enter created at date..." name="created_at" value={editFormData.created_at} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input type="text" required placeholder="Enter modified at date..." name="modified_at" value={editFormData.modified_at} onChange={handleEditFormChange}></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;
