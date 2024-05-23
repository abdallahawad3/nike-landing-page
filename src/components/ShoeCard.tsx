import { IShowImage } from "../interfaces";

const ShoeCard = ({ bigShoeImg, changeBigShoeImage, imgURL }: IShowImage) => {
  const { bigShoe, thumbnail } = imgURL;

  const handleClick = () => {
    if (bigShoeImg !== bigShoe) {
      changeBigShoeImage(bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={thumbnail}
          alt="shoe collation"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
