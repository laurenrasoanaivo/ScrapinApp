
import './jobList.css';

function JobList({job}:{job:any}){

    return(
        <div className='container' >
            <ul>
                {job!=null && job.information.map((item:any) =>
                    <li key={item.href}>
                        <h2>{item.title}</h2>
                        <h3>{item.company}</h3>
                        <p>{item.description}</p>
                        <p>{item.limit_date}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}


export default JobList;
