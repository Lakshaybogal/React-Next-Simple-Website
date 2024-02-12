'use client'
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

const Home: React.FC = () => {
    const route = useRouter();

    return (
        <div className="flex justify-center flex-col items-center min-h-screen bg">
            <h1 className="font-mono font-black text-6xl pt-10 mb-8 text-center">
                React Hooks Projects
            </h1>
            <div className='flex flex-col items-center text-3xl font-bold gap-4'>
                <h3 className="mt-8 mb-4 text-xl font-semibold ">UseState</h3>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/tabsComponent')}>
                    Tab Component <FaArrowRight className="ml-2 animate-bounce" />
                </button>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/toggleButton')}>
                    Toggle Button <FaArrowRight className="ml-2 animate-bounce" />
                </button>

                <h3 className="mt-8 mb-4 text-xl font-semibold ">UseEffect</h3>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/infiniteScroll')}>
                    Infinite Scroll <FaArrowRight className="ml-2 animate-bounce" />
                </button>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/timer')}>
                    Timer <FaArrowRight className="ml-2 animate-bounce" />
                </button>

                <h3 className="mt-8 mb-4 text-xl font-semibold ">UseRef</h3>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/drawingCanvas')}>
                    Drawing Canvas <FaArrowRight className="ml-2 animate-bounce" />
                </button>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/videoPlayer')}>
                    Video Player <FaArrowRight className="ml-2 animate-bounce" />
                </button>

                <h3 className="mt-8 mb-4 text-xl font-semibold ">UseContext</h3>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/context-pages')}>
                    Context Page <FaArrowRight className="ml-2 animate-bounce" />
                </button>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/Auth')}>
                    Authentication <FaArrowRight className="ml-2 animate-bounce" />
                </button>

                <h3 className="mt-8 mb-4 text-xl font-semibold ">UseReducer</h3>
                <button className='mbutton w-72 flex justify-center items-center' onClick={() => route.push('/TicTacToe')}>
                    TicTacToe <FaArrowRight className="ml-2 animate-bounce" />
                </button>
            </div>
        </div>
    );
};

export default Home;
