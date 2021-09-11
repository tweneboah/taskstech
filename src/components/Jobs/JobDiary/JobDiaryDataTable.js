import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const diaryColumns = [
  {
    field: 'description',
    headerName: 'Description',
    width: 170,
    editable: true,
  },
  {
    field: 'upload_photo',
    headerName: 'Upload Photo',
    width: 180,
    editable: true,
  },
  { field: 'job_id', headerName: 'ID', width: 90 },
];

const diaryRows = [
  { id: 1, description: 'Snow', upload_photo: "1", job_id: 1 },
  { id: 2, description: 'Lannister', upload_photo: "2", job_id: 2 },
  { id: 3, description: 'Lannister', upload_photo: "3", job_id: 3 },
];

export default function JobDiaryDataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={diaryRows}
        columns={diaryColumns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
