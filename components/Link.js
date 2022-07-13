export default function Link({ txt, url }) {
  return (
    <a href={url} target='_blank' rel="noreferrer">
      <span className='underline decoration-1'>{txt}</span>
    </a>
  )
}
