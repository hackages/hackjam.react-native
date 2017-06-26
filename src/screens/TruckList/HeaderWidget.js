import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {filters, ITruck, IFilters, EFilter} from "../../types/entites";
import {setFilter} from "../../actions/filters";
import {connect} from "react-redux";


const filtring = {
  [EFilter.NONE]: (trucks) => trucks.length,
  [EFilter.ACTIVE]: (trucks) => trucks.filter(truck => truck.active).length,
  [EFilter.INACTIVE]: (trucks) => trucks.filter(truck => !truck.active).length,
};

export const _HeaderWidget = ({filter = filters[EFilter.NONE], setFilter, trucks = []}) => {

  const nextFilterIndex = filters.indexOf(filter) + 1;
  const nextFilter = nextFilterIndex >= filters.length ? filters[0] : filters[nextFilterIndex];

  let amountOfTrucks = filtring[nextFilterIndex - 1](trucks);

  return (
    <TouchableOpacity
      style={globalStyles.widget}
      onPress={() => setFilter(nextFilter)}>
      <Text style={globalStyles.title}>{`${amountOfTrucks} ${filter !== filters[0] ? filters[nextFilterIndex - 1] : 'trucks'}`}</Text>
    </TouchableOpacity>
  );
};

// TODO
// This component should receive the trucks and the filter from the store
const mapStateToProps = () => {

};

// TODO
// return an object that contains the following action:
// - setFilter
const mapDispatchToProps = (dispatch) => ({

});

export const HeaderWidget = connect(mapStateToProps, {})(_HeaderWidget);
