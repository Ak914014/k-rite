import React, { useState, useRef } from 'react';
import { Resizable } from 'react-resizable';

const EditableTable = () => {
  const [headers, setHeaders] = useState(['Header 1', 'Header 2']);
  const [data, setData] = useState([
    ['Cell 1', 'Cell 2'],
    ['Cell 3', 'Cell 4']
  ]);

  const tableRef = useRef(null);
  const [resizing, setResizing] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(null);
  const [currentHeight, setCurrentHeight] = useState(null);
  const [resizerPosition, setResizerPosition] = useState(null);

  const handleHeaderChange = (index, value) => {
    const newHeaders = [...headers];
    newHeaders[index] = value;
    setHeaders(newHeaders);
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = new Array(headers.length).fill('');
    setData([...data, newRow]);
  };

  const handleAddHeader = () => {
    const newHeaders = [...headers, 'New Header'];
    const newData = data.map(row => [...row, '']);
    setHeaders(newHeaders);
    setData(newData);
  };

  const handleResizeStart = (event, { size }) => {
    setResizing(true);
    setCurrentWidth(size.width);
    setCurrentHeight(size.height);
    const { clientX } = event;
    setResizerPosition(clientX);
  };

  const handleResize = (event, { size }) => {
    const { clientX } = event;
    const delta = clientX - resizerPosition;
    const newWidth = currentWidth + delta;
    if (newWidth > 0) {
      setCurrentWidth(newWidth);
      setResizerPosition(clientX);
    }
  };

  const handleResizeStop = () => {
    setResizing(false);
  };

  return (
    <div className="overflow-x-auto">
      <table
        ref={tableRef}
        className="min-w-full border-collapse border border-gray-500"
        style={{ tableLayout: 'fixed' }}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="resize">
                <Resizable
                  height={0}
                  width={10}
                  onResizeStart={handleResizeStart}
                  onResize={handleResize}
                  onResizeStop={handleResizeStop}
                >
                  <div>{header}</div>
                </Resizable>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <Resizable
                    height={10}
                    width={0}
                    onResizeStart={handleResizeStart}
                    onResize={handleResize}
                    onResizeStop={handleResizeStop}
                  >
                    <div>{cell}</div>
                  </Resizable>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleAddHeader}
        >
          Add Header
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddRow}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default EditableTable;
