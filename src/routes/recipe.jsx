import { createFileRoute } from '@tanstack/react-router'
import RecipePage from '../pages/recipe-page/RecipePage'

export const Route = createFileRoute('/recipe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RecipePage />
}
