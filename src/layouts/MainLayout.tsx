import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
      <main className="w-screen min-h-screen bg-neutral-900 text-white">
        <Outlet />
      </main>
  );
}

export default MainLayout