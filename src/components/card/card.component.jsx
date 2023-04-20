//import { Component } from 'react';
import './card.styles.css';

const Card = ({bot}) => {
  const { username, email, id } = bot;

  return (
  <div className='card-container' key={id}>
    <img alt={`bot ${username}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
    <h2>{username}</h2>
    <p>{email}</p>
  </div>
  );
  };



// class Card extends Component {

//   render() {
//     const { username, email, id } = this.props.bot;

//     return (
//       <div className='card-container' key={id}>
//         <img alt={`bot ${username}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
//         <h2>{username}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// };

export default Card;