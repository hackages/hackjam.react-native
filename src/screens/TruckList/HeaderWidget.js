import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {setFilter} from "../../actions/filters";
import {connect} from "react-redux";
import { EFilter, filters } from "../../types/entites";


const filtring = {
  [EFilter.NONE]: (trucks) => trucks.length,
  [EFilter.ACTIVE]: (trucks) => trucks.filter(truck => truck.active).length,
  [EFilter.INACTIVE]: (trucks) => trucks.filter(truck => !truck.active).length,
};

export const _HeaderWidget = ({filter, setFilter, trucks}) => {

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

const mapStateToProps = ({trucks, filter}) => ({
  trucks, filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export const HeaderWidget = connect(mapStateToProps, mapDispatchToProps)(_HeaderWidget);
