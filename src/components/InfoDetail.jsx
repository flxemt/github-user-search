export default function InfoDetail({ name, value, image, isLink = false, marginRight = '0.875rem' }) {
  return (
    <div className="flex items-center leading-[1.375rem]" style={{ opacity: value ? '1' : '0.5' }}>
      <img src={`/${image}.svg`} alt={name} className="dark:hidden" style={{ marginRight }} />
      <img src={`/${image}-light.svg`} alt={name} className="hidden dark:block" style={{ marginRight }} />
      {isLink ? (
        value ? (
          <a href={value} target="_blank" className="hover:underline">
            {value}
          </a>
        ) : (
          <span>Not Available</span>
        )
      ) : (
        <span>{value || 'Not Available'}</span>
      )}
    </div>
  )
}
