import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restName: [],
    temp: [],
    ItemOccurArr: [],
    ItemOccurStore: [],
    val: [],
    all_Restuarants: [],
    tempstateStore: true,
    lat:28.6273928,
    long:77.1716954,
    latlongInputStore:"Delhi",
    LatLongDisplayName : "Delhi"
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    addRestName: (state, action) => {
      state.restName.push(action.payload);
    },
    addVal: (state, action) => {
      state.val.push(action.payload);
    },
    clearVal: (state) => {
      state.val.length = 0;
    },
    removeRestName: (state) => {
      // state.restName.shift()
    },
    clearItems: (state) => {
      state.items.length = 0;
      // return { items: [] };
    },
    clearRestName: (state) => {
      state.restName.length = 0;
    },
    addTempRest: (state, action) => {
      state.temp.push(action.payload);
    },
    removeTempRest: (state) => {
      state.temp.shift();
    },
    clearTempRest: (state) => {
      state.temp.length = 0;
    },
    addItemOccurArr: (state, action) => {
      state.ItemOccurArr.push(action.payload);
    },
    clearItemOccurArr: (state) => {
      state.ItemOccurArr.length = 0;
    },
    ItemOccurStore: (state, action) => {
      state.ItemOccurStore.push(action.payload);
    },
    clearItemOccurStore: (state) => {
      state.ItemOccurStore.length = 0;
    },
    tempstateStore: (state, action) => {
      return { ...state, tempstateStore: action.payload };
    },
    lat: (state, action) => {
      return { ...state, lat: action.payload };
    },
    long: (state, action) => {
      return { ...state, long: action.payload };
    },
    latlongInputStore: (state, action) => {
      return { ...state, latlongInputStore: action.payload };
    },
    LatLongDisplayName: (state, action) => {
      return { ...state, LatLongDisplayName: action.payload };
    },
    all_Restuarants: (state, action) => {
      state.all_Restuarants.push(action.payload);
    },
  },
});

export default cartSlice.reducer;

export let {
  addItems,
  addRestName,
  removeItems,
  removeRestName,
  clearItems,
  clearRestName,
  addTempRest,
  removeTempRest,
  clearTempRest,
  ItemOccurStore,
  clearItemOccurStore,
  addVal,
  clearVal,
  addItemOccurArr,
  clearItemOccurArr,
  tempstateStore,
  lat,long,
  latlongInputStore,
  LatLongDisplayName,
  all_Restuarants,
} = cartSlice.actions;
