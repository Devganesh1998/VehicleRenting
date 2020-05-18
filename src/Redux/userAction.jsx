import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  BOOKING_DATA,
  SORT_USER_DATA,
  FILTER_EQUAL_USER_DATA,
  UPDATE_BILLS,
  BOOK_VEHICLE,
} from "./actionTypes";

export const register_user = (data) => {
  return {
    type: REGISTER_USER,
    data,
  };
};

export const login_user = (email, password) => {
  return {
    type: LOGIN_USER,
    email,
    password,
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT_USER,
    payload,
  };
};

export const booking_data = (start, end, destination, vehicle) => {
  return {
    type: BOOKING_DATA,
    start,
    end,
    destination,
    vehicle,
  };
};

export const bookVehicle = (data) => {
  return {
    type: BOOK_VEHICLE,
    payload: data,
  };
};

export const sortUsers = (fieldName, sortType, isNumber) => {
  const sortDataType = "user_data";
  return {
    type: SORT_USER_DATA,
    payload: {
      fieldName,
      sortType,
      isNumber,
      sortDataType,
    },
  };
};

export const updateBills = () => {
  return {
    type: UPDATE_BILLS,
  };
};

export const sortBills = (fieldName, sortType, isNumber) => {
  const sortDataType = "AllBills";
  return {
    type: SORT_USER_DATA,
    payload: {
      fieldName,
      sortType,
      isNumber,
      sortDataType,
    },
  };
};

export const filterBillsEq = (category, value) => {
  const filterDataType = "AllBills",
    dataDestination = "AllBills";
  return {
    type: FILTER_EQUAL_USER_DATA,
    payload: {
      category,
      value,
      filterDataType,
      dataDestination,
    },
  };
};
