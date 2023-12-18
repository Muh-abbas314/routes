import { useRouter } from 'next/router'

export default function BlogTitle({params}) {
  const {id}=params
  return (
    <div>page {id}</div>
  )
}
