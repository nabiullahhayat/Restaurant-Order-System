import { Link } from 'react-router-dom';
import background from '../images/willcome.jpg'


function Willcome(){
    return(
        <div className='grid grid-rows-4 h-screen w-screen'>
            <title>Willcome</title>
            <div>
                <img className=' min-w-screen h-screen blur-[2px] object-cover z-10 md:h-screen' src={background} alt="" />
            </div>
 <div  className="z-30 flex flex-col items-center justify-center space-y-[21px] row-start-2 row-span-2 md:mt-[-50px]">
        <h1 className=' font-bold text-5xl md:text-8xl'>WELLCOME!</h1>
        <h2 className=' font-bold text-2xl md:text-4xl'>THE BEST FOOD RESTURANT</h2>
            <Link to="home" className='bg-yellow-600 p-2.5 rounded-2xl w-[120px] animate-bounce md:hover:shadow-2xl md:shadow-yellow-300'>ORDER NOW</Link>
      </div>
        </div>
    )
};

export default Willcome;