import ReactDOM from 'react-dom'
// import Firstcomponent from './components/Firstcomponent';
// import Secondcomponent from './components/Secondcomponent';
// import './components/style.css';
// import Forms from './components/Forms'
// import LoggedIn from './components/LoggedIn'
// import Arrays from './components/Arrays';
import Search from './components/search/Search';
import "./global.css"

// const Boxes = ({size = 'small', ...restOfProps}) => {
//   return <div className={`box ${ size ? `box--${size}` : '' }`}  {...restOfProps} />
// }

// const smallBox = <div className='box box--small' children='small lightBlue Box'></div>
// const mediumBox = <div className='box box--medium' children='Medium Pink Box'></div>
// const largeBox = <div className='box box--large' children='Large Orange Box'></div>

ReactDOM.render (
  <>
  <Search title='Monster'/>
  </>,
  document.getElementById('root')
)