import { logo } from '../assets'
const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='AIExpress_logo' className='w-16 object-contain' />
                <button
                    type='button'
                    onClick={() => window.open('https://github.com/javad-eb')}
                    className='black_btn'>
                    GitHub
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Article with <br className='max-md:hidden'/>
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
            Use AIExpress Summarizer, an open-source article summarizer, to make reading easier by condensing long articles into succinct summaries.
            </h2>
        </header>
    )
}

export default Hero