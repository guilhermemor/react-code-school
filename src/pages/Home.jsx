import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Carousel from 'react-bootstrap/Carousel';
import Produtos from "../Produtos";


function Home(){
    return(
        <div className="site">
            <Cabeca/>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/vsaNSjSNn0w/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://melhordonocode.com.br/wp-content/uploads/2022/08/programadores-profesionistas-con-incrementos-salariales-constantes.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imagens.itforum.com.br/itforum.com.br/wp-content/uploads/2020/08/desenvolvedor-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <h2 className="text-center">Produtos</h2>
    <div className="produtocont">
      <Produtos image="https://www.devmedia.com.br/arquivos/Salas/Linguagem/Java/45/2328/thumb.jpg" preco="79,99"/>
      <Produtos image="https://i.ytimg.com/vi/Jy_pzpKlmu0/maxresdefault.jpg" preco="49,99"/>
      <Produtos image="https://i.ytimg.com/vi/8i4ltPu5a5w/maxresdefault.jpg" preco="69,90"/>
      <Produtos image="https://universidadedatecnologia.com.br/wp-content/uploads/2017/12/Principais-linguagens-2.jpg" preco="279,99"/>
    </div>
    <Rodape/>
        </div>
    )
}

export default Home