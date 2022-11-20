import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export default function TeamCard({ name, title, image, bio }: TeamCardProps) {
  return (
    <div className="card-primary">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        blurDataURL={image}
        placeholder="blur"
        quality={100}
      />
      <div>
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
      <p>{bio}</p>
    </div>
  );
}
