import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts, hideLoader, showLoader} from '../redux/actions';
import {connect} from 'react-redux';
import { Loader } from './Loader';
import { postsReducer } from '../redux/postsReducer';



class FetchedPosts extends React.Component{

    render() {
        const {fetchPosts, asyncPosts, loading} = this.props;
        
        if (loading) return <Loader/>

        if (!asyncPosts.length) return <button onClick={fetchPosts} className="btn btn-primary">Загрузить</button>
        
        return asyncPosts.map(post => <Post post={post} key={post.id} />)
    }
}

const mapStateToProps = state => ({
    asyncPosts: state.posts.fetchedPosts,
    loading: state.app.loading
});

const mapDispatchToProps = {
    fetchPosts,
    showLoader,
    hideLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);