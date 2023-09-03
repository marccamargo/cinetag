import { Outlet } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho';
import Container from '../../components/Container';
import FavoritosProvider from '../../contextos/Favoritos';
function PaginaBase(){
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
        </main>
    )
}

export default PaginaBase;