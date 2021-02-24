const AddProduct = ({ submitHandler, newItem, itemAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter item name:"
                type="text"
                onChange={newItem}
            />
            <button
                type="button"
                onClick={itemAdd}
            >
                Add Item
          </button>
        </form>
    );
}

export default AddProduct;