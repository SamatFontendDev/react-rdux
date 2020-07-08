import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS} from "./types"

export const createPost = (post) => {
    return{
        type: CREATE_POST,
        payload: post
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}
export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const showAlert = (text) => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}

export const fetchPosts = () => {
    return{
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    //         const json = await response.json();
    //         dispatch({type: FETCH_POSTS, payload: json})
    //         dispatch(hideLoader())
    //     } catch (e) {
    //         dispatch(showAlert('Что то пошло не так'))
    //         dispatch(hideLoader())
    //     }
    // }
}