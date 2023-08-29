import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../redux/devicesSlice";
import { Button } from "@mui/material";

const Devices = () => {
  const { devices } = useSelector((state) => state);
  console.log(devices);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("btn clicked");
    dispatch(fetchDevices());
    console.log(fetchDevices());
  };
  return (
    <>
      <Button variant="contained" sx={{ margin: 5 }} onClick={handleClick}>
        Get Devices List
      </Button>
      {/* <div>{devices.loading && <div>loading...</div>}</div> */}
    </>
  );
};

export default Devices;
