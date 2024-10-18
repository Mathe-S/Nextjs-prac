const mockUrls = [
  "https://images.unsplash.com/photo-1728877988622-acdfc6ad0c59?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724311564236-e14a0fd831ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1728755158799-81554467446e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1728410594823-5074a3ff0b32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const mockImages = mockUrls.map((url, index) => ({ url, id: index }));

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-10">
      {mockImages.map((img) => (
        <div key={img.id}>
          <img src={img.url} alt="Nature" className="w-48" />
        </div>
      ))}
    </main>
  );
}
