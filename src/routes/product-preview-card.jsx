import { createFileRoute } from '@tanstack/react-router'
import ProductCard from '../pages/product-preview-card/ProductCard'

export const Route = createFileRoute('/product-preview-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductCard />
}
