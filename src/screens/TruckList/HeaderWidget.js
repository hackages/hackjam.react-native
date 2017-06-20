import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {globalStyles} from "../../styles/globalStyles";
import {EFilter, filters,} from "../../types/entites";
import {connect} from "react-redux";
import {setFilter} from "../../actions/filters";

const filtring = {
  [EFilter.NONE]: trucks => trucks.length,
  [EFilter.ACTIVE]: (trucks, activeTrucks) =>trucks.filter(truck => activeTrucks[truck.uuid]).length,
  [EFilter.INACTIVE]: (trucks, activeTrucks) => trucks.filter(truck => !activeTrucks[truck.uuid]).length
};

export const _HeaderWidget = props => {
  const {filter, setFilter, trucks, activeTrucks} = props;
  const nextFilterIndex = (filters.indexOf(filter) + 1) % filters.length;
  const nextFilter = filters[nextFilterIndex];
  console.log(props.activeTrucks);
  console.log(EFilter.INACTIVE, filter);

  let amountOfTrucks = filtring[filter](trucks, activeTrucks);
  return (
    <TouchableOpacity
      style={globalStyles.widget}
      onPress={() => setFilter(nextFilter)}>
      <Text
        style={globalStyles.title}>{`${amountOfTrucks} ${filter !== filters[0] ? filter : 'trucks'}`}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({activeTrucks, trucks, filter}) => ({
  trucks, filter, activeTrucks
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export const HeaderWidget = connect(mapStateToProps, mapDispatchToProps)(_HeaderWidget);
