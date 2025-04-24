import '../App.css'
import logo from '../assets/logo.svg'

export function Header() {
    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 0',
                marginBottom: '3rem'
            }}
        >
            <img
                src={logo}
                alt='logo'
                style={{ width: '4rem', height: '4rem', marginRight: '0.5rem' }}
            />
            <h1>
                Translator
                <a
                    className='header-link'
                    href='https://tibecalderon.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    by Tibecvp
                </a>
            </h1>
        </section>
    )
}