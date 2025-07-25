export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-sm hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-2">{value}</p>
    </div>
  );
}