export default function StatItem({ name, value }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-[0.6875rem] leading-[1rem] md:text-h4 md:leading-h4">{name}</div>
      <div className="mt-2 text-h3 font-bold text-dark dark:text-white md:text-h2 md:leading-h2 md:mt-0">{value}</div>
    </div>
  )
}
