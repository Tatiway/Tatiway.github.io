import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'


export default class App extends Component {
  render(){

    const {  page  }  = this.props
    const { getPhotos, getMorePhotos, getPhotoInfo, addLike, toggleClass }  = this.props.pageActions


    return (
      <div className='container'>
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotos}
          fetching={page.fetching}
          count={page.count}
          photoId={page.photoId}
          condition={page.condition}
          getMorePhotos={getMorePhotos}
          getPhotoInfo={getPhotoInfo}
          addLike={addLike}
          toggleClass={toggleClass}
        ></Page>
      </div>
    )
  }
}


//возьми полностью "стейт" приложения и присоедини его в переменную user,
// дабы она была доступна из компонета App.js как this.props.user
function mapStateToProps (state) {
  return {
    // это определяет пропсы в данном компонентк
    user: state.user,
    page: state.page,
    post: state.post,
    days: state.days,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// <User name={user.name}></User>
