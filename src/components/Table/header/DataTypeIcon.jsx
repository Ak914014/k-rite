import React from 'react';
import { DataTypes } from '../utils';
import TextIcon from '../img/Text';
import MultiIcon from '../img/Multi';


export default function DataTypeIcon({ dataType }) {
  function getPropertyIcon(dataType) {
    switch (dataType) {
      case DataTypes.NUMBER:
      case DataTypes.TEXT:
      case DataTypes.SELECT:
      
      default:
        return null;
    }
  }

  return getPropertyIcon(dataType);
}
