
export default function SectionTitle({title, subtitle}) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-gold">{title}</h2>
      <p className="text-gray-400 mt-2">{subtitle}</p>
    </div>
  );
}
