import { Route } from "react-router-dom";

import { Box } from "@mui/material";

import Courses from "../components/courses/Courses";

import classes from "./Page.module.css";

const CoursesPage = () => {
  return (
    <Route
      path="/courses"
      render={() => (
        <Box className={classes["page-content"]}>
          <Courses />
        </Box>
      )}
    />
  );
};

export default CoursesPage;
