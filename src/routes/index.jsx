import { createFileRoute } from '@tanstack/react-router'
import Tiles from '../pages/Tiles'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Tiles />
}
