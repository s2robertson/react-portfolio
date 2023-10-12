import { useNavigation } from '../Navigation';

function Body() {
    const [activePage] = useNavigation();
    console.log('Rendering Body');
    return (
        <main className='container p-3 clearfix'>
            {activePage.component}
        </main>
    );
}

export default Body;