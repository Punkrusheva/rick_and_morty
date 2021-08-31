import React, {
  Suspense,
  lazy,
  //useEffect
} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
 // useDispatch,
  useSelector
} from 'react-redux';
import { ToastContainer } from "react-toastify";
import { charactersSelectors } from "../redux/characters";
import Layout from "./Layout/Layout";
import routes from "../routes";
import Load from "./Loader/Loader";
import Notification from '../components/Notification/Notification';

const Characters = lazy(() => import('../views/CharactersView/Characters.js' /*webpackChunkName: 'characters' */));
const Episodes = lazy(() => import('../views/EpisodesView/Episodes.js' /*webpackChunkName: 'episodes' */));
const Locations = lazy(() => import('../views/LocationsView/Locations.js' /*webpackChunkName: 'locations' */));
const MyWatchList = lazy(() => import('../views/MyWatchListView/MyWatchList.js' /*webpackChunkName: 'myWatchList' */));

/**componentDidMount() {
    this.props.onGetCurrentUser();
  };
  
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
} */
export default function App() {
 /* const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
   }, [dispatch]);*/
  
  //const isLoadingAuth= useSelector(authSelectors.getAuthLoading);
  const isLoadingCharacters= useSelector(charactersSelectors.getLoading);
  const errorCharacters= useSelector(charactersSelectors.getError);
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
        {(isLoadingCharacters) && <Load />}
        {errorCharacters && <Notification  message={`${errorCharacters.message}`} />}
        </Layout>
    )
};