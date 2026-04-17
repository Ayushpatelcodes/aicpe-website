import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function Gallery() {
  return (
    <div className="mt-20 px-10">
      <h2 className="text-yellow-400 text-3xl text-center">Gallery</h2>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <img src={img1} className="rounded-xl" />
        <img src={img2} className="rounded-xl" />
        <img src={img3} className="rounded-xl" />
      </div>
    </div>
  );
}