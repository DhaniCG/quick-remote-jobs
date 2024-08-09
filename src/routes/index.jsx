import { Outlet } from "react-router-dom";

export default function Index() {
    const pathname = window.location.pathname;
    return (
        <>
            <nav>
                <div className="container">
                    <a href="/" className="logo">
                        <img src="/logo.svg" alt="Quick Remote Jobs" /> Quick Remote Jobs
                    </a>
                    <a href={pathname === "/" ? "#jobList" : "/#jobList"} className="main-btn">Get Started</a>
                </div>
            </nav>

            <Outlet />

            <footer>
                <div className="btns">
                    <a href="/privacy" rel="nofollow">Privacy Policy</a>
                    <div>|</div>
                    <a href="/terms" rel="nofollow">Terms & Conditions</a>
                </div>
                <div className="copy">© Copyright Quick Remote Jobs. All rights reserved</div>
            </footer>
        </>
    );
}