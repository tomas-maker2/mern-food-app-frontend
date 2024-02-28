import landImg from '../assets/landing.png'
import appDI from '../assets/appDownload.png'
import SearchBar, { SearchForm } from '@/components/SearchBar'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {

    const navigate = useNavigate()

    const handleSearchSubmit = (searchFromValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFromValues.searchQuery}`
        })
    }
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 md:px-32">
            <h1 className="text-5xl font-bold tracking-tighter text-orange-600">
                Tuck into a takeaway today
            </h1>
            <span className="text-xl">Food is just a click away</span>
            <SearchBar placeHolder='Search by city or town' onSubmit={handleSearchSubmit}/>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landImg} alt='land'/>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Order takeaway even faster
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reiciendis
                </span>
                <img src={appDI} alt="appd" />
            </div>
        </div>
    </div>
  )
}
