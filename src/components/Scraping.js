
import { useEffect, useState } from 'react';
import axios from 'axios';
import './scraping.css';

function Scraping({job}){

    return(
        <div className='container' >
            <ul>
                {job!=null && job.information.map((item) =>
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


export default Scraping;
