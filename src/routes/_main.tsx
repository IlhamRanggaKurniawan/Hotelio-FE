import Navbar from '@/components/Navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <div className='pt-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12'>
        <Outlet />
      </div>
    </div>)
}
