import { useState, useEffect } from 'react';
import Layout from '../../components/MainLayout/MainLayout';
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import {
  getAllCharacters,
  //getCharactersById,
  pagination,
  getFilteredCharacters
} from '../../services/rick-and-morty-api';

function Characters() {
  const [characters, setCharacters] = useState([])
  const [filterSpecies, setFilterSpecies] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterGender, setFilterGender] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')

  const changeSpeciesFilter = e => {
    setFilterSpecies(e.currentTarget.value)
  }
  const changeStatusFilter = e => {
    setFilterStatus(e.currentTarget.value)
  }
  const changeGenderFilter = e => {
    setFilterGender(e.currentTarget.value)
  }

  useEffect(() => {
    getAllCharacters()
      .then(res => {
        if (res.results) {
          setCharacters(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
        } else { toast.error('Nothing found') }
      }
    )
    
    getFilteredCharacters(filterSpecies, filterStatus, filterGender)
        .then(res => {
          if (res.results) {
            setCharacters(res.results)
            setNextPage(res.info.next)
            setPrevPage(res.info.prev)
          } else {toast.error('Nothing found')}
        }
      )
  }, [filterSpecies, filterStatus, filterGender])

  const onPaginationClick = link => {
    pagination(link)
      .then(res => {
        if (res.results) {
          setCharacters(res.results)
          setNextPage(res.info.next)
          setPrevPage(res.info.prev)
          window.scrollTo(0, 0)
        } else { toast.error('No data came') }
      }
      )
  }

    return (
      <Layout >
        <Logo text='Characters'/>
        <Filter
          value={filterSpecies}
          placeholder='Set species'
          onChange={changeSpeciesFilter} />
        <Filter
          value={filterStatus}
          placeholder='Set status'
          onChange={changeStatusFilter} />
        <Filter
          value={filterGender}
          placeholder='Set gender'
          onChange={changeGenderFilter} />
        {characters.length > 0 &&
          <CharactersList characters={characters} />
        }
        <PaginationGroup
          prevPage={prevPage}
          nextPage={nextPage}
          onClickPrev={() => onPaginationClick(prevPage)}
          onClickNext={() => onPaginationClick(nextPage)} />
      </Layout>
    )
  }

export default Characters