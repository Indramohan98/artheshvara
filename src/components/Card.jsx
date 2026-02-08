export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-black rounded-xl md:rounded-2xl shadow-2xl p-8 md:p-12 lg:p-14 ${className}`}>
      {children}
    </div>
  );
}