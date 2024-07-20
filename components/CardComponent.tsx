import React from 'react';
import { Card } from './ui/card';

interface CardComponentProps {
  emoji: string;
  title: string;
  cardStyle:string;
}

const CardComponent: React.FC<CardComponentProps> = ({ emoji, title,cardStyle, }) => {
  return (
    <Card className={`w-64 h-52 p-4 rounded-lg ${cardStyle}`}>
      <h3 className="text-2xl ">{emoji}</h3>
      <p className="text-black font-bold ">{title}</p>
      <p className='text-black text-sm text-clip'>
      You get angry and defensive, <br/>instead of staying open and<br/> working towards common ground
      </p>
    </Card>
  );
};

export default CardComponent;