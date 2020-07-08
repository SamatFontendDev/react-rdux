import React from 'react';
import {connect} from 'react-redux';
import {createPost} from '../redux/actions';
import {showAlert, hideAlert} from '../redux/actions';
import {Alert} from './Alert';

class PostForm extends React.Component {
    state={
        title: '',
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        
        if(this.props.alert){
            this.props.hideAlert()
        }
    }

    submitHandler = e => {
        e.preventDefault();

        const {title} = this.state;

        if (!title.trim()) {
            return this.props.showAlert('Название поста не может быть пустым')
        }

        const newPost = {
            title,
            id: Date.now().toString(),
        }

        this.props.createPost(newPost);

        this.setState({
            title: '',
        })
        
    }

    render() {
        const {alert} = this.props;
        return (
            <form onSubmit={this.submitHandler}>
                {alert &&  <Alert text={alert} />}
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                        <h3>Заголовок поста</h3>
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    onChange={this.inputChangeHandler}
                    value={this.state.title}
                    name='title'
                    />
                </div>
                <button className="btn btn-success">Создать</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    alert: state.app.alert,
})

const mapDispatchToProps = {
    createPost,
    showAlert,
    hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);