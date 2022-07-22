import {
    NavBar,
    Footer,
} from '../../components';

export function HomePage() {
    return (
        <div className='Home'>
            <NavBar />
            <div className='Home-content'>
                <div className='Home-content-text'>
                    <h1>Welcome to the Home Page</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisi vel consectetur euismod,
                        nisi nisl consectetur nisi, euismod nisi nisl euismod
                        nisi.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
