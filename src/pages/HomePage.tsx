import landImg from '../assets/landing.png'
import appDI from '../assets/appDownload.png'

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tighter text-orange-600">
                Tuck into a takeaway today
            </h1>
            <span className="text-xl">Food is just a click away</span>
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
