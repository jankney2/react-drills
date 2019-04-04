import React, {Component} from 'react'

 class Photo extends Component {
  constructor(props) {
    super(props)

  }

render() {
  return(


    <img src={this.props.url} alt={this.props.alt}/>








  )
}


}

export default Photo