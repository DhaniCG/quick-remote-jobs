import JobItem from "./components/jobItem";
import { jobList } from "./components/jobList";

export default function Home() {

    return (
        <>
            <header>
                <img src="/bg-blue-line.svg" alt="" className="background bg-1" />
                <img src="/bg-blue-line.svg" alt="" className="background bg-2" />
                <div className="container">
                    <div className="sponsorship">We're Sponsored!</div>
                    <h1>Finding a High-Paying Remote Job Is <span className="blue-highlight">Quick</span> And <span className="orange-highlight">Easy</span></h1>
                    <p>Quick Remote Jobs connects you with top companies offering lucrative remote positions, making your job search effortless.</p>
                    <div className="header-cta">
                        <a href="#jobList" className="main-btn">Find Jobs</a>
                        <a href="#process" className="secondary-btn">How it Works</a>
                    </div>
                </div>
            </header>
            <main>
                <section id="jobList" className="job-categories">
                    <h2>Job Categories</h2>
                    <p>Which company would you like to work with?</p>
                    <div className="job-list container">
                        { jobList.map((jobItem, i) => <JobItem jobs={ jobItem } key={ i } />) }
                    </div>
                    <div className="more-border">
                        <hr /> More companies will come in the future. <hr />
                    </div>
                </section>
                <section className="about">
                    <img src="/bg-orange-line.svg" alt="" className="background bg-1" />
                    <img src="/bg-orange-line.svg" alt="" className="background bg-2" />
                    <img src="/bg-orange-line.svg" alt="" className="background bg-3" />
                    <div className="container">
                        <div>
                            <h2>About Quick Remote Jobs</h2>
                            <p>Quick Remote Jobs is an affiliate website dedicated to helping job seekers find high-paying remote positions with ease.</p>
                            <p>
                                Quick Remote Jobs is an affiliate website dedicated to helping job seekers find high-paying remote positions with ease.
                                By partnering with HigherIncomeJobs, we provide daily updates on the latest job opportunities. HigherIncomeJobs is a leading
                                search engine that leverages AI-Matching technology to identify and recommend job openings tailored to the everyday job seeker.
                                This collaboration ensures that our users have access to the most relevant and lucrative remote job listings available.
                            </p>
                            <p>This collaboration ensures that our users have access to the most relevant and lucrative remote job listings available.</p>
                        </div>
                        <img src="/about-img.jpg" alt="About Us" />
                    </div>
                </section>
                <section id="process" className="process">
                    <h2>How it Works</h2>
                    <p>Follow these steps to get started</p>
                    <div className="step-list">
                        <div className="step">
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-1" />
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-2" />
                            <h5 className="step-num">Step 1</h5>
                            <h3>Choose one of the company</h3>
                            <p>Just click on one of the box in the Categories section, then you’ll be redirected to a sign up page</p>
                        </div>
                        <div className="step">
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-1" />
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-2" />
                            <h5 className="step-num">Step 2</h5>
                            <h3>Choose a job type of your choice</h3>
                            <p>You’ll be asked to choose one of the few job type options</p>
                        </div>
                        <div className="step">
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-1" />
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-2" />
                            <h5 className="step-num">Step 3</h5>
                            <h3>Register yourself</h3>
                            <p>Fill out the forms to sign up and get started.</p>
                        </div>
                        <div className="step">
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-1" />
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-2" />
                            <h5 className="step-num">Step 4</h5>
                            <h3>Finish a short questionnaire</h3>
                            <p>A questionnaire to help the algorithm understands you more and it only took a few seconds</p>
                        </div>
                        <div className="step">
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-1" />
                            <img src="/bg-blue-line-s.svg" alt="" className="background bg-2" />
                            <h5 className="step-num">Step 5</h5>
                            <h3>Start applying for jobs!</h3>
                            <p>Finally, you can apply to as many jobs as you want</p>
                        </div>
                    </div>
                    <a href="#jobList" className="main-btn">Find Jobs Now!</a>
                </section>
            </main>
        </>
    );
}