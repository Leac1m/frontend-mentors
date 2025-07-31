import { createFileRoute } from '@tanstack/react-router'
import BlogCardPage from '../pages/blog_preview_card/BlogCardPage'

export const Route = createFileRoute('/blog_preview_card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BlogCardPage />
}
