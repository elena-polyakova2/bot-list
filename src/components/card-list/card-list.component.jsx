// import { Component } from 'react';
import './card-list.style.css';
import Card from '../card/card.component.jsx';

const CardList = ({bots}) => (
  <div className='card-list'>
    {bots.map((bot) => {
      return (
        <Card bot={bot} key={bot.id}/>
      );
    })
    }
  </div>
);

// class CardList extends Component {

//   render () {
//     const { bots } = this.props;

//     return (
//       <div className='card-list'>
//         {bots.map((bot) => {
          
//           return (
//             <Card bot={bot}/>
//           );
//         })
//         }
//       </div>
//     );
//   }  
// };

export default CardList;