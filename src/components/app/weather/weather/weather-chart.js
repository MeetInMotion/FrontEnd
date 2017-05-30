//epi 64, a class base component or a function component
//need to decide what is the function to do
//epi 65, we adding the SparklinesReferenceLine for average line and will do the text for teh chart
import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
  //using lodash sum function and round function, this is average helper function
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  //take the Sparklines tag code from weather_list.js
  //from the original in the weather_list.js file
  /*
  return(
    <tr key={name}>
      <td>{name}</td>
      <td>
        <Sparklines height={120} width={180} data={temps}>
          <SparklinesLine color="green"/>
        </Sparklines>
      </td>
    </tr>
  )

  note that we are passing props.data in the data instead of data={temps}
  temps will be used in the weather_list file
  */
  //epi 65, need to get teh aveage data from the props.data

  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
