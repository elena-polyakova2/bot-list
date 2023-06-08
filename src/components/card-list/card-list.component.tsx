// import { Component } from 'react';
import './card-list.style.css';
import { Bot } from '../../App';
import Card from '../card/card.component';

type CardListProps = {
  bots: Bot[];
}

const CardList = ({bots}: CardListProps) => (
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