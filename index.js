import React, { Component, forwardRef } from 'react'
import PropTypes from 'prop-types'
class MoovitEmbed extends Component{
  constructor(){
    super(props)
    this.simpleMappings = [
      'metro',
      'lang',
      'from',
      'to'
    ]
  }
  componentDidMount(){
    if(!document.querySelector('#moovit-jsw')){
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];

        js = d.createElement(s); js.id = id;

        js.src = `https://widgets.moovit.com/wtp/${this.props.lang ? this.props.lang : 'en'}`;

        fjs.parentNode.insertBefore(js, fjs);

        })(document, 'script', 'moovit-jsw')
    }
  }
  render(){
    let attr = {}
    for(let [key, value] in this.props){
      if(simpleMappings.includes(key)){
        attr[`data-${key}`] = value
      }else if(key == 'fromCoords'){
        attr['data-from-lat-long'] = `${value[0]}_${value[1]}`
      }else if(key == 'toCoords'){
        attr['data-to-lat-long'] = `${value[0]}_${value[1]}`
      }
    }
    return (
      <div className="mv-wtp" {...attr} ref={this.props.innerRef}></div>
    )
  }
}
MoovitEmbed.propTypes = {
  metro: PropTypes.number,
  lang: PropTypes.string,
  from: PropTypes.string,
  fromCoords: PropTypes.arrayOf(PropTypes.number),
  to: PropTypes.string,
  toCoords: PropTypes.arrayOf(PropTypes.number)
}

export default forwardRef((props, ref) => <MoovitEmbed {...props} forwardedRef={ref} />)
