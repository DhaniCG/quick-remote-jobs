export default function JobItem(props) {
    return (
        <a href={props.jobs.link} className={`job-item ${props.jobs.name.toLowerCase()}`}>
            <img src={props.jobs.src} alt={props.jobs.name} />
            <h3>{props.jobs.name} Jobs</h3>
            <p>{props.jobs.desc}</p>
            <div className="gap"></div>
            <div className="jobs-btn">Find Jobs <img src="/right-arrow.svg" alt="" /></div>
        </a>
    );
}