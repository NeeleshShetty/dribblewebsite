import CardComponent from "./CardComponent";

function Cards() {
    const cards = [
        { emoji: '😀', title: 'You get a promotion at work ',cardStyle:'bg-[#6341EF] text-white', },
        { emoji: '😁', title: 'You quabble with your partner', cardStyle:'bg-[#ffffff] text-black'},
        { emoji: '😠', title: 'You argue with colleague',cardStyle:'bg-[#ffefd5] text-black',  },
        { emoji: '😠', title: 'You attend a class ',cardStyle:'bg-[#d8f2ff] text-white' },
        { emoji: '😀', title: 'You get a promotion at work ',cardStyle:'bg-[#6341EF] text-white', },
        { emoji: '😁', title: 'You quabble with your partner', cardStyle:'bg-[#ffffff] text-black'},
        { emoji: '😠', title: 'You argue with colleague',cardStyle:'bg-[#ffefd5] text-black',  },
        { emoji: '😠', title: 'You attend a class ',cardStyle:'bg-[#d8f2ff] text-white' },
  
      ];
    
      return (
        <div className="relative py-4 mt-10">
          <h1 className="text-3xl md:text-4xl font-bold md:ml-10 sm:ml-[28%] ml-20 mb-5">Does this sound familiar...</h1>

        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide"> 
          <div className="inline-flex space-x-4  transition-all duration-100">
            {cards.map((card, index) => (
              <CardComponent key={index} emoji={card.emoji} title={card.title} cardStyle={card.cardStyle} />
            ))}
            
          </div>
        </div>
      </div>
      )
}

export default Cards