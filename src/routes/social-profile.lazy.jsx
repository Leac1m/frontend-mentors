import { createLazyFileRoute } from '@tanstack/react-router'
import SocialProfilePage from '../pages/social-Profile/SocialProfilePage'

export const Route = createLazyFileRoute('/social-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SocialProfilePage />
}
