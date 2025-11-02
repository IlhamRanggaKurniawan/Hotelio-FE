import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={`w-full h-screen max-h-screen bg-[url(/Image.jpg)] bg-cover flex justify-end`}>
        <div className='bg-white w-1/2 h-full rounded-l-4xl'>

        </div>
    </div>
  )
}
