import {
  Suspense,
  lazy
} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import routes from "../routes";
import Load from "./Loader/Loader";
//import Notification from '../components/Notification/Notification';

const Characters = lazy(() => import('../views/CharactersView/Characters.js' /*webpackChunkName: 'characters' */));
const Episodes = lazy(() => import('../views/EpisodesView/Episodes.js' /*webpackChunkName: 'episodes' */));
const Locations = lazy(() => import('../views/LocationsView/Locations.js' /*webpackChunkName: 'locations' */));
const MyWatchList = lazy(() => import('../views/MyWatchListView/MyWatchList.js' /*webpackChunkName: 'myWatchList' */));

export default function App() {
   
  //const isLoadingCharacters= useSelector(charactersSelectors.getLoading);
 // const errorCharacters= useSelector(charactersSelectors.getError);
    return (
      <Layout>
        <ToastContainer autoClose={2500} />
        <Suspense fallback={<Load
                  type="ThreeDots"
                  color="#3f51b5"
                  height={45}
                  width={45}
                  timeout={6000}
                    />}>
          <Switch>
            <Route exact path={routes.characters} component={Characters}/>
            <Route exact path={routes.episodes} component={Episodes}/>
            <Route exact path={routes.locations} component={Locations}/>
            <Route exact path={routes.myWatchList} component={MyWatchList}/>
            <Redirect to={routes.characters}/>
          </Switch>
        </Suspense>
       </Layout>
    )
};

/** {(isLoadingCharacters) && <Load />}
        {errorCharacters && <Notification  message={`${errorCharacters.message}`} />}
         */