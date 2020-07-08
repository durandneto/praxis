import React from 'react'
import Color from "."

export default {
  title: 'Brand|Colors',
  component: Colors,
};

export const Colors = () => {
  const div = document.createElement('DIV')
  Object.entries(Color).forEach(([key, value]) => {
    div.innerHTML +=  `<span
      style='border: solid 1px silver;height: 150px; width: 150px; background-color: ${Color[key].hex}; color: #222; padding: 8px; margin: 8px; display:inline-table;'
    >
      ${key}
    </span>`
  })

  return <div dangerouslySetInnerHTML={{__html: div.innerHTML}} />

}


Colors.story = {
  name: 'All',
};