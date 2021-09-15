import { useState, useEffect } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import LocationsTable from '../../components/LocationsTable/LocationsTable'
import Filter from '../../components/Filter/Filter';
import "../../stylesheets/animation.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import {
  getAllLocations,
  getFilteredLocations,
  pagination
} from '../../services/rick-and-morty-api';

function Locations() {
  const [locations, setLocations] = useState([])
  const [filterName, setFilterName] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterDimension, setFilterDimension] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')

  const changeNameFilter = e => {
    setFilterName(e.currentTarget.value)
  }
  const changeTypeFilter = e => {
    setFilterType(e.currentTarget.value)
  }
  const changeDimensionFilter = e => {
    setFilterDimension(e.currentTarget.value)
  }
    
  useEffect(() => {
    getAllLocations()
      .then(res => {
        if (res.results) {
          setLocations(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
        } else { toast.error('Nothing found') }
      }
      )
    
    getFilteredLocations(filterName, filterType,
        filterDimension
      )
        .then(res => {
            if (res.results) {
              setLocations(res.results)
              setNextPage(res.info.next)
              setPrevPage(res.info.prev)
            } else {toast.error('Nothing found')}
          });
  }, [filterName, filterType, filterDimension])

  const onPaginationClick = link => {
    pagination(link)
      .then(res => {
        if (res.results) {
          setLocations(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
          window.scrollTo(0, 0)
        } else { toast.error('Nothing found') }
      }
      )
  }

    return (
      <Layout >
        <Logo text='Locations'/>
        <Filter
          value={filterName}
          placeholder='Set name'
          onChange={changeNameFilter} />
         <Filter
          value={filterDimension}
          placeholder='Set dimension'
          onChange={changeDimensionFilter} />
        <Filter
          value={filterType}
          placeholder='Set type'
          onChange={changeTypeFilter} />
       
        <LocationsTable locations={locations} />
        <PaginationGroup
          prevPage={prevPage}
          nextPage={nextPage}
          onClickPrev={() => onPaginationClick(prevPage)}
          onClickNext={() => onPaginationClick(nextPage)} />
      </Layout>
    )
  }

export default Locations
