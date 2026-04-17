import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white"
    >
      <FaWhatsapp />
    </a>
  );
}