import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import './SecondStep.scss';

  const stores = [
      { 
        title: 'Limpiar Bicicletas',
        subtitle: 'Keith',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Noah\'s Arc Water',
        subtitle: 'Noah',
        img: '',
        background: 'red'
      },
      { 
        title: 'Limonada',
        subtitle: 'Alisson',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Arcada',
        subtitle: 'Jinjer',
        img: '',
        background: 'lightgreen'
      },
      { 
        title: 'Plantas',
        subtitle: 'Lukas',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Esculturas de Plastilina',
        subtitle: 'Avery',
        img: '',
        background: 'orange'
      },
      { 
        title: 'Limonada',
        subtitle: 'Lehanny',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Stokes Shop',
        subtitle: 'Stokes',
        img: '',
        background: 'darkblue'
      },
      { 
        title: 'Jack\'s lemonade and hot chocolate',
        subtitle: 'John',
        img: '',
        background: 'lightblue'
      },
      { 
        title: 'Endulzate la vida, pasteleria',
        subtitle: 'Angelique',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Lemonade',
        subtitle: 'Nolan',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Slime',
        subtitle: 'Jaidyn',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Reciclaje y vender',
        subtitle: 'Pippa',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Leche',
        subtitle: 'Kaden',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Zachary Limonade',
        subtitle: 'Zachary',
        img: '',
        background: 'blue'
      },
      { 
        title: 'Cupcakes',
        subtitle: 'Gabriela',
        img: '',
        background: 'blue'
      }
  ];


class SecondStep extends Component {

    render() {
        return (
            <>
                <h2>Productos Disponibles: </h2>
                <div class="item-container">
                    { stores.map( (item) => (
                        <div class="store-item" style={{ background: item.background }}>
                            <Card>
                                <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardSubtitle>{item.subtitle}</CardSubtitle>
                                </CardBody>
                                    <img width="100%" src="" alt="Card image cap" />
                                <CardBody>
                                <CardText>Description</CardText>
                                <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default SecondStep;