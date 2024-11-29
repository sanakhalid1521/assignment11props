import Card from '../components/childone';

const Parent = () => {
  const cardsData = [
    {
      colorName: 'Blue',
      colorImage: '/blue.jpg',
      dishName: 'Biryani',
      dishImage: '/biryani.jpg',
      bgColor: 'bg-blue-500',
    },
    {
      colorName: 'Red',
      colorImage: '/red.jpg',
      dishName: 'Pizza',
      dishImage: '/pizza.jpg',
      bgColor: 'bg-red-500',
    },
    {
      colorName: 'Green',
      colorImage: '/green.jpg',
      dishName: 'Pasta',
      dishImage: '/pasta.jpg',
      bgColor: 'bg-green-500',
    },
    {
      colorName: 'Yellow',
      colorImage: '/yellow.jpg',
      dishName: 'Burger',
      dishImage: '/burgar.jpg',
      bgColor: 'bg-yellow-500',
    },
    {
      colorName: 'Purple',
      colorImage: '/purple.jpg',
      dishName: 'Ice Cream',
      dishImage: '/ice-cream.jpg',
      bgColor: 'bg-purple-500',
    },
    {
      colorName: 'Orange',
      colorImage: '/orange.jpg',
      dishName: 'Donut',
      dishImage: '/donut.webp',
      bgColor: 'bg-orange-500',
    },
  ];

  return (
    <div className="p-6 bg-gray-600">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Favorite Colors and Dishes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            colorName={card.colorName}
            colorImage={card.colorImage}
            dishName={card.dishName}
            dishImage={card.dishImage}
            bgColor={card.bgColor} 
          />
        ))}
      </div>
    </div>
  );
};

export default Parent;
