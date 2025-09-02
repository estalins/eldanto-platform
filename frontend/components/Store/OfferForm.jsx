import { useState } from "react";
import axios from "axios";

export default function OfferForm() {
  const [offer, setOffer] = useState({
    title: "", description: "", priceOriginal: "", priceOffer: "",
    category: "", tags: "", images: [], startDate: "", endDate: "",
    radius: 5, isPremium: false
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setOffer({ ...offer, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/offers`, offer, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Oferta creada");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Título" value={offer.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" value={offer.description} onChange={handleChange} required />
      <input name="priceOriginal" type="number" placeholder="Precio original" value={offer.priceOriginal} onChange={handleChange} required />
      <input name="priceOffer" type="number" placeholder="Precio oferta" value={offer.priceOffer} onChange={handleChange} required />
      <input name="category" placeholder="Categoría" value={offer.category} onChange={handleChange} required />
      <input name="tags" placeholder="Etiquetas" value={offer.tags} onChange={handleChange} />
      <input name="startDate" type="datetime-local" value={offer.startDate} onChange={handleChange} required />
      <input name="endDate" type="datetime-local" value={offer.endDate} onChange={handleChange} required />
      <label>
        Oferta premium
        <input name="isPremium" type="checkbox" checked={offer.isPremium} onChange={handleChange} />
      </label>
      <button type="submit">Crear Oferta</button>
    </form>
  );
}