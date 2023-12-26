import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const RegisterPageThree = React.lazy(() => import("pages/RegisterPageThree"));
const EarnPage = React.lazy(() => import("pages/EarnPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const RegisterPageFive = React.lazy(() => import("pages/RegisterPageFive"));
const RegisterPageTwo = React.lazy(() => import("pages/RegisterPageTwo"));
const Marketplace = React.lazy(() => import("pages/Marketplace"));
const RegisterPageFour = React.lazy(() => import("pages/RegisterPageFour"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const DashboardOnlyAccessedbyaLoggedinUser = React.lazy(
  () => import("pages/DashboardOnlyAccessedbyaLoggedinUser"),
);
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const AdvertisingPage = React.lazy(() => import("pages/AdvertisingPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const SupportPage = React.lazy(() => import("pages/SupportPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/supportpage" element={<SupportPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/advertisingpage" element={<AdvertisingPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route
            path="/dashboardonlyaccessedbyaloggedinuser"
            element={<DashboardOnlyAccessedbyaLoggedinUser />}
          />
          <Route path="/registerpagefour" element={<RegisterPageFour />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/registerpagetwo" element={<RegisterPageTwo />} />
          <Route path="/registerpagefive" element={<RegisterPageFive />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/earnpage" element={<EarnPage />} />
          <Route path="/registerpagethree" element={<RegisterPageThree />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
