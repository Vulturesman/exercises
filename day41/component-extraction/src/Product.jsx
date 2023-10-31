export default function Product({id, img_url, name}) {
    return (
        <>
                <div key={id} className="product">
                    <img src={img_url} alt={name} />
                     <div className="name">{name}</div>
                </div>

            </>
    )
}