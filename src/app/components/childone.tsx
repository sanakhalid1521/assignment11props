interface CardProps {
  colorName: string;
  colorImage: string;
  dishName: string;
  dishImage: string;
  bgColor: string; 
}

const Card = ({ colorName, colorImage, dishName, dishImage, bgColor }: CardProps) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${bgColor}`}>
      <h2 className="text-xl font-bold mb-2">{colorName}</h2>
      <img
        src={colorImage}
        alt={colorName}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{dishName}</h3>
      <img
        src={dishImage}
        alt={dishName}
        className="w-full h-32 object-cover rounded-md mt-2"
      />
    </div>
  );
};

export default Card;
