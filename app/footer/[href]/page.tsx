// 1. params в Next.js 15 — это всегда Promise
export default async function Page({ params }: { params: Promise<{ href: string }> }) {
  
  // 2. Обязательно "распаковываем" href
  const { href } = await params;

  // 3. Делаем запрос. Используем fallback для хоста, если env не подгрузился
  const host = process.env.API_HOST || 'http://localhost:3000/api';
  
  const response = await fetch(`${host}/footer/${href}`, {
    cache: 'no-store' // Чтобы данные всегда были свежими при тестах
  });

  // 4. Проверяем, что API вообще что-то нашло
  if (!response.ok) {
    return <div className="p-20 text-center">Страница не найдена (404)</div>;
  }

  const data = await response.json();

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 italic">Путь: /footer/{href}</p>
      {/* Здесь можно добавить остальной контент из data */}
    </div>
  );
}