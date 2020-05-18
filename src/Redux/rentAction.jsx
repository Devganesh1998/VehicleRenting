import {
  SEARCH_VEHICLE,
  FILTER_VEHICLE,
  SHOW_BOOKINGS,
  ADD_VEHICLE,
  UPDATE_VEHICLE,
  FILTER_EQUAL_DATA,
  SORT_DATA,
  CHANGE_AVAILABILITY,
} from "./actionTypes";

export const searchVehicle = (name) => {
  return {
    type: SEARCH_VEHICLE,
    payload: name,
  };
};

export const filterVehicle = (item) => {
  return {
    type: FILTER_VEHICLE,
    payload: item,
  };
};

export const ChangeAvailability = (VehicleID) => {
  return {
    type: CHANGE_AVAILABILITY,
    payload: VehicleID,
  };
};

export const showBookings = (item) => {
  return {
    type: SHOW_BOOKINGS,
    payload: item,
  };
};

export const addVehicle = (vehicle) => {
  return {
    type: ADD_VEHICLE,
    payload: vehicle,
  };
};

export const updateVehicle = (vehicle, id) => {
  return {
    type: UPDATE_VEHICLE,
    payload: vehicle,
    id: id,
  };
};

export const sortVehicles = (fieldName, sortType, isNumber) => {
  const sortDataType = "filteredData";
  return {
    type: SORT_DATA,
    payload: {
      fieldName,
      sortType,
      isNumber,
      sortDataType,
    },
  };
};

export const filterVehicleEq = (category, value) => {
  const filterDataType = "data",
    dataDestination = "filteredData";
  return {
    type: FILTER_EQUAL_DATA,
    payload: {
      category,
      value,
      filterDataType,
      dataDestination,
    },
  };
};
