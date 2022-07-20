
import { IonApp,setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Import components */
import Header from './components/Header';
import Footer from './components/Footer';
import JobList from './components/JobList';
import './app.css';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

setupIonicReact();


const App: React.FC = () => {
  const [inputPage, setInputPage] = useState(1);
  const [getJob, setGetJob] = useState(null);

  useEffect(() => {
    axios.get('http://wspc52.herokuapp.com/'+inputPage)
    .then(response => {
        setGetJob(response.data)
    })
  }, [inputPage]) 

  return(
    <IonApp>
      <IonReactRouter>
        <Header />
        <JobList job={getJob} />
        <Footer onChange={(e) => setInputPage(Number(e.target.value))}/>
      </IonReactRouter>
    </IonApp>
)};

export default App;
