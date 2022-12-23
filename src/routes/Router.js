import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Project = lazy(() => import("../views/ui/Project"));
const EmployeeRegistration = lazy(() => import("../views/ui/EmployeeRegistration"));
const ProjectAllocation = lazy(() => import("../views/ui/ProjectAllocation"));
const ProjectAllocationSearch = lazy(() => import("../views/ui/ProjectAllocationSearch"));
const TaskAllocation = lazy(() => import("../views/ui/TaskAllocation"));
const Employees = lazy(() => import("../views/ui/Employees"));
const Leaves = lazy(() => import("../views/ui/Leaves"));
const Reports = lazy(() => import("../views/ui/Reports"));
const ProjectCreation = lazy(() => import("../views/ui/ProjectCreation"));
const ProfileView = lazy(() => import("../views/ui/ProfileView"));
const CompanyProfileView = lazy(() => import("../views/ui/CompanyProfileView"));
const EmployeeDetails = lazy(() => import("../views/ui/EmployeeDetails"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/project", exact: true, element: <Project /> },
      { path: "/employeeregistration", exact: true, element: <EmployeeRegistration /> },
      { path: "/projectallocation", exact: true, element: <ProjectAllocation /> },
      { path: "/projectallocationsearch", exact: true, element: <ProjectAllocationSearch /> },
      { path: "/taskallocation", exact: true, element: <TaskAllocation /> },
      { path: "/employees", exact: true, element: <Employees /> },
      { path: "/leaves", exact: true, element: <Leaves /> },
      { path: "/reports", exact: true, element: <Reports /> },
      { path: "/projectcreation", exact: true, element: <ProjectCreation /> },
      { path: "/profileview", exact: true, element: <ProfileView /> },
      { path: "/companyprofileview", exact: true, element: <CompanyProfileView /> },
      { path: "/employeedetails", exact: true, element: <EmployeeDetails /> },
    ],
  },
];

export default ThemeRoutes;
