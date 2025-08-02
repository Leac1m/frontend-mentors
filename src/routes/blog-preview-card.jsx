import { createFileRoute } from '@tanstack/react-router'
import BlogCardPage from '../pages/blog-preview-card/BlogCardPage'

export const Route = createFileRoute('/blog-preview-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BlogCardPage />
}
