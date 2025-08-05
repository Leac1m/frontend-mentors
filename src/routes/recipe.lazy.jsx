import { createLazyFileRoute } from '@tanstack/react-router'
import RecipePage from '../pages/recipe-page/RecipePage'

export const Route = createLazyFileRoute('/recipe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RecipePage />
}
