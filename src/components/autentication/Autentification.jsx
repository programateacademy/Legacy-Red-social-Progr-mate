// React imports
import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

//Login imports
import Login from "../../pages/auth/login/Login";
import ForgotPassword from "../../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../../pages/auth/resetPassword/ResetPassword";

//Not found import
import NotFound from "../notFound/NotFound";
import Redirect from "../Redirect/Redirect";
import DontAllow from "../Messages/DontAllow";

//Forms import
import CompletePerfil from "../../pages/CompletePerfil";
import EditProfile from "../../pages/EditProfile";
import FormEventPage from "../../pages/FormEventPage";
import FormEventEdit from "../../components/FormEvent/FormEventEdit";
import FormNewsPage from "../../pages/FormNewsPage";
import FormJobsPage from "../../pages/FormJobsPage";

//Community imports
import CommunityPage from "../../pages/CommunityPage";

//Forum imports
import ForumPage from "../../pages/ForumPage";
import ForumAnswersPage from "../../pages/ForumAnswersPage";
import ForumQuestionsPage from "../../pages/ForumQuestionsPage";

//home
import HomePage from "../../pages/HomePage";

//Profile
import ProfilePage from "../../pages/ProfilePage";
import FormProject from "../../components/FormProject/FormProject";


//admin
import AdminHomePage from "../../pages/AdminHomePage";
import { AdminCohort } from "../../pages/AdminCohort";


/* This component manage routes*/
function Autentification() {
    const auth = useSelector((state) => state.auth);
    const { isLogged, isAdmin } = auth;

    return (
        <>
            <Routes>
                {/* Login */}
                <Route
                    exact
                    path="/"
                    element={isLogged ? <HomePage /> : <Login />}
                />
                <Route
                    exact
                    path="/login"
                    element={isLogged ? <HomePage /> : <Login />}
                />
                <Route
                    exact
                    path="/forgot_password"
                    element={<ForgotPassword />}
                />
                <Route
                    exact
                    path="/user/reset/:token"
                    element={isLogged ? <NotFound /> : <ResetPassword />}
                />

                {/* Flow elements */}
                <Route exact path="/redirect" element={<Redirect />} />
                <Route exact path="/dontallow" element={<DontAllow />} />

                {/* Home */}
                <Route
                    exact
                    path="/home"
                    element={isLogged ? <HomePage /> : <DontAllow />}
                />

                {/* Community */}
                <Route
                    exact
                    path="/community"
                    element={isLogged ? <CommunityPage /> : <DontAllow />}
                />

                {/* Profile */}
                <Route
                    exact
                    path="/formprofile"
                    element={isLogged ? <CompletePerfil /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/formprofile/:id"
                    element={isLogged ? <EditProfile /> : <DontAllow />}
                />

                <Route
                    exact
                    path="/profile"
                    element={isLogged ? <ProfilePage /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/profile/:id"
                    element={isLogged ? <ProfilePage /> : <DontAllow />}
                />
                
                <Route
                    exact
                    path="/formproject"
                    element={isLogged ? <FormProject /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/formproject/:id"
                    element={isLogged ? <FormProject /> : <DontAllow />}
                />

                {/* Forms */}
                <Route
                    exact
                    path="/formevent"
                    element={isLogged ? <FormEventPage /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/formeventedit/:id"
                    element={isLogged ? <FormEventEdit /> : <DontAllow />}
                />

                <Route
                    exact
                    path="/formnews"
                    element={isLogged ? <FormNewsPage /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/formnews/:id"
                    element={isLogged ? <FormNewsPage /> : <DontAllow />}
                />

                <Route
                    exact
                    path="/formjobs"
                    element={isLogged ? <FormJobsPage /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/formjobs/:id"
                    element={isLogged ? <FormJobsPage /> : <DontAllow />}
                />

                {/* Forum */}
                <Route
                    exact
                    path="/questions"
                    element={isLogged ? <ForumPage /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/questions/:questionId"
                    element={isLogged ? <ForumAnswersPage /> : <DontAllow />}
                />
                <Route
                    exact
                    path="/addquestion"
                    element={isLogged ? <ForumQuestionsPage /> : <DontAllow />}
                />

                {/* Admin Routes */}

                <Route
                    exact
                    path="admincohort"
                    element={isAdmin ? <AdminCohort /> : <DontAllow />}
                />

                <Route
                    exact
                    path="/adminhome"
                    element={isAdmin ? <AdminHomePage /> : <DontAllow />}
                />

                {/* 404 */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Autentification;
