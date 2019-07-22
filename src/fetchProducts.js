import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from 'actions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(' http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductsScuess(res.products);
                return res.products;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export default fetchProducts;