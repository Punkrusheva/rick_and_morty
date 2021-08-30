import React, {
  Suspense,
  lazy,
  //useEffect
} from "react";
import Layout from "./Layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import Load from "./Loader/Loader";
/*import {
  authOperations,
  authSelectors
} from "../redux/auth";*/
import {
 // useDispatch,
  useSelector
} from 'react-redux';
import { ToastContainer } from "react-toastify";
import { contactsSelectors } from "../redux/phoneBook";
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
  const isLoadingContacts= useSelector(contactsSelectors.getLoading);
  const errorContacts= useSelector(contactsSelectors.getError);
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
        {(isLoadingContacts) && <Load />}
        {errorContacts && <Notification  message={`${errorContacts.message}`} />}
        </Layout>
    )
};