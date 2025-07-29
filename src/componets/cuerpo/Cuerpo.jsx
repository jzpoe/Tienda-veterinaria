import { useEffect, useState } from 'react'
import './cuerpo.css'
import { Upload } from '../upload-img/Upload'
import { Lateranavbar } from '../navbar/navbar-lateral/Lateranavbar'

export const Cuerpo = () => {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=6',

                    {
                        headers: {
                            'x-api-key': 'live_w30tLiVQm251nJY5BBGSsRtBlshEvAIhK043eHq3p8RJcrZO1FyoTMjUJk3HvKp0'
                        }
                    })

                const datos = await response.json()
                setProducts(datos);
                setProducts(datos.products); // accede correctamente al array

                console.log(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }



        }


        // fetchProducts()
    }, [])

    const imagenes = [{
        id: 1,
        url: '/img/7707205150303.webp',
        informacion: 'Agility Gold',
        precio: '$20.000',
        alt: 'Imagen 1'
    }, {
        id: 2,
        url: '/img/agility-gold.webp',
         informacion: 'Agility Gold',
        precio: '$20.000',
        alt: 'Imagen 2'
    }, {
        id: 3,
        url: '/img/agility.webp',
         informacion: 'Agility Gold',
        precio: '$20.000',
        alt: 'Imagen 3'
    }, {
        id: 4,
        url: '/img/alimento-crudo-para-perro-whole-barf-tasty-lamb.png',
         informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 4'
    }, {
        id: 5,
        url: '/img/chunky.webp',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 5'
    }, {
        id: 6,
        url: '/img/EAN-7707205156855.webp',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 6'

    }, {
        id: 6,
        url: '/img/POUCH-WOW-CAN-SALMON-300Gr.webp',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 6'

    }, {
        id: 6,
        url: '/img/wow-can-carne.png',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 6'

    },
    {
        id: 6,
        url: '/img/141007.webp',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 6'

    }, {
        id: 6,
        url: '/img/7707205150303.webp',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 6'

    }, {
        id: 6,
        url: '/img/7708242538437.webp',
        informacion: 'Alimento',
        precio: '$20.000',
        alt: 'Imagen 6'

    }
    ]

    return (
        <div className="layout-cuerpo">
            <Lateranavbar />
            <div className="container-cuerpo">
                <div className="card-grid">
                    {imagenes.map((image) => (
                        <div key={image.id} className="card">
                            <img src={image.url} alt={image.alt} />
                            <p className="informacion">{image.informacion}</p>
                            <p className='precio'>{image.precio}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
