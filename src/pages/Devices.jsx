import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../redux/devicesSlice";
import { Button, Card, CardContent, Typography } from "@mui/material";

const Devices = () => {
  const { devices } = useSelector((state) => state);
  console.log(devices);
  const dispatch = useDispatch();
  const handleBtnClick = () => {
    console.log("btn clicked");
    dispatch(fetchDevices());
    console.log(fetchDevices());
  };
  return (
    <>
      <Button variant="contained" sx={{ margin: 5 }} onClick={handleBtnClick}>
        Get Devices List
      </Button>
      <div>
        {devices.loading && <div>loading...</div>}
        {!devices.loading && devices.error ? (
          <div>Error: {devices.error}</div>
        ) : null}
        {!devices.loading && devices.devices.length?(
          <>
            <h2 style={{textAlign: "center"}}>Devices Lists</h2>
            <ul>
              {devices.devices.map((device)=>(
                 <li style={{listStyleType: 'none'}} key={device._id}>
                    <Card
                     elevation={5}
                     sx={{minWidth:250, marginBottom: "10px"}}
                    >
                      <CardContent>
                          <Typography>
                            Device ID: {device._id}
                          </Typography>
                          <Typography>
                            Device Name: {device.deviceName}
                          </Typography>
                          <Typography>
                            Type: {device.deviceType}
                          </Typography>
                      </CardContent>
                    </Card>
                 </li> 
              ))}
            </ul>
          </>
        ): null}
      </div>
    </>
  );
};

export default Devices;
