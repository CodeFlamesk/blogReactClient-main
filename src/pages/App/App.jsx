import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dashboardAction from "action/dashboardAction";
import authAction from "action/authAction";
import LoadingApp from "components/Loading/LoadingApp";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import { changeLoadingAuth } from "store/userReducer";
import Layout from "../Layout/Layout";
import UserDashboard from "pages/Game/UserDashboard/UserDashboard";

// 📌 Додаємо lazy імпорт
const Home = lazy(() => import("../Home/Home"));
const Blog = lazy(() => import("../Blog/Blog"));
const Podcast = lazy(() => import("../Podcast/Podcast"));
const LayoutGame = lazy(() => import("pages/Game/LayoutAdmin/LayoutAdmin"));
const AddGame = lazy(() => import("pages/Game/AddGame/AddGame"));
const Contact = lazy(() => import("../Contact/Contact"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const Login = lazy(() => import("../Auth/Login"));
const Sign = lazy(() => import("../Auth/Sign"));
const Settings = lazy(() => import("../UserSettings/UserSettings"));

function App() {
    const activePostId = useSelector(store => store.dashboard.activePostId);
    const categoryId = useSelector(store => store.dashboard.categoryId);
    const { isLoading, isAuth } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dashboardAction.getPost(activePostId));
    }, [activePostId]);

    useEffect(() => {
        dispatch(dashboardAction.getAllPost(categoryId));
    }, [categoryId]);

    useEffect(() => {
        dispatch(dashboardAction.getCategory());
    }, []);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(authAction.checkAuth());
        } else {
            dispatch(changeLoadingAuth(false));
        }
    }, []);

    if (isLoading) {
        return <LoadingApp />;
    }

    return (
        <Suspense fallback={<LoadingApp />}>
            <Routes>
                <Route path="admin" element={<LayoutGame />}>
                    <Route path="addgame" element={<AddGame />} />
                    <Route path="userinfo" element={<UserDashboard />} />
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="podcast" element={<Podcast />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Sign />} />

                    <Route
                        path="settings"
                        element={isAuth ? <Settings /> : <Navigate to="/login" />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
