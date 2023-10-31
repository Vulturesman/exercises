import Product from "./Product"

export default function ProductList() {
    const products = [
    {
        "id": 1,
        "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg",
        "name": "Propulsion gel"
    },
    {
        "id": 2,
        "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg",
        "name": "Weight cube"
    },
    {   
        "id": 3,
        "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg",
        "name": "A friend"
    },
    {
        "id": 4,
        "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg",
        "name": "Portal gun"
    },
    {
        "id": 5,
        "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg",
        "name": "Home-defense robot"
    },
    {
        "id": 6,
        "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg",
        "name": "Cake (not a lie)"
    }
]

    return (
        <div className="content">
                <h1>Products</h1>

                <div className="product-list">

              
                    {products.map((product) => (
                        <Product
                        key={product.id}
                        img_url={product.img_url}
                        name={product.name}
                        />
                    ))}
                
                </div>

            </div>
    )
}