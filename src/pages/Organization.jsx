// import React from 'react'
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrganization } from "../redux/organizationSlice";
// import { useEffect } from 'react';
// import {CardActions} from '@mui/material';
// import CardContent from '@mui/material';

const Organization = () => {
  const { organization } = useSelector((state) => state);

  console.log(organization);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchOrganization());
  // },[])
  // const handleBtnClick = (e)=>{
  //   e.preventDefault();
  //   organization = dispatch(fetchOrganization());
  // }

  // console.log(handleBtnClick());
  const handleBtnClick = () => {
    console.log("clicked");
    dispatch(fetchOrganization());
  };
  return (
    <>
      <Button
        onClick={handleBtnClick}
        style={{ justifyContent: "center" }}
        variant="contained"
        sx={{ margin: 5 }}
      >
        Get Organizations List
      </Button>
      <div>
        {organization.loading && <div>loading...</div>}
        {!organization.loading && organization.error ? (
          <div>Error: {organization.error}</div>
        ) : null}
        {!organization.loading && organization.organizations.length ? (
          <>
            <h2 style={{ textAlign: "center" }}>Organization Lists</h2>
            <ul>
              {organization.organizations.map((organization) => (
                <li style={{ listStyleType: "none" }} key={organization.id}>
                  <Card
                    elevation={5}
                    sx={{ minWidth: 250, marginBottom: "10px" }}
                  >
                    <CardContent>
                      <Typography>
                        Organization ID: {organization._id}
                      </Typography>
                      <Typography>
                        Organization Name: {organization.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Organization;
