const Productlist = ({items}) => {

    const Display = ({ productName }) => <li>{productName}</li>
    return ( 
        <ul className="previousSearch">
            {items.map((productName, i) => (
                <Display
                    productName={productName}
                    // Prevent duplicate keys by appending index:
                    key={i}
                />
            ))}
        </ul>
     );
}

export default Productlist;