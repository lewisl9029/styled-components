import React from 'react';
import * as useStyles from './useStyles.js'
import View from './View';

export default function Provider({ children }) {
  return (
    <useStyles.provider>
      <View>
        {children}
      </View>
    </useStyles.provider>
)

}
