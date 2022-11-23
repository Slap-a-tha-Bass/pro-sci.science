import Image from 'next/image';

export default function Gallery() {
  return (
    <main className="text-content">
      <div className="gallery">
        <div className="img_container">
          <Image src="/gallery/1.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/2.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/3.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/4.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/5.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/6.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/7.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/8.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/9.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/10.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/11.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/12.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/13.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/14.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/15.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/16.jpg" alt="Picture of the author" fill />
        </div>
        <div className="img_container">
          <Image src="/gallery/50.png" alt="Picture of the author" fill />
        </div>
      </div>
    </main>
  );
}
