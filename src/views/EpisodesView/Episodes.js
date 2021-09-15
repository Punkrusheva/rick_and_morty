import { useState, useEffect } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import EpisodesTable from '../../components/EpisodesTable/EpisodesTable'
import Filter from '../../components/Filter/Filter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import {
  getAllEpisodes,
  getEpisodesByName,
  pagination
} from '../../services/rick-and-morty-api';

function Episodes() {
  const [episodes, setEpisodes] = useState([])
  const [filter, setFilter] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')
  
  useEffect(() => {
    getAllEpisodes()
      .then(res => {
        if (res.results) {
          setEpisodes(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
        } else { toast.error('Nothing found') }
      }
    )
    
    getEpisodesByName(filter.toLowerCase())
      .then(res => {
        if (res.results) {
          setEpisodes(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
        } else { toast.error('Nothing found') }
      }
      )
  }, [filter])

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const onPaginationClick = link => {
    pagination(link)
     .then(res => {
        if (res.results) {
          setEpisodes(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
          window.scrollTo(0, 0)
        } else {toast.error('Nothing found')}
     }
    )
  }

    return (
      <Layout >
        <Logo text='Episodes'/>
        <Filter
          value={filter}
          placeholder='Set name'
          onChange={changeFilter} />
        <EpisodesTable episodes={episodes} />
        <PaginationGroup
          prevPage={prevPage}
          nextPage={nextPage}
          onClickPrev={() => onPaginationClick(prevPage)}
          onClickNext={() => onPaginationClick(nextPage)} />
      </Layout>
    )
  }

export default Episodes