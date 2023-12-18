import { useRouter } from 'next/router'

export default function BlogTitle() {
  const id=useRouter()
  return (
    <div>page {id.query.id}</div>
  )
}
