import cn from 'classnames'
import s from './gradient.module.css'

/**
 * @typedef {object} GradientBGProps
 * @prop {string} [className]
 */
type GradientBGProps = {
  className?: string
}

/**
 * A small component that generates a gradient in pages
 * @component
 * @param {GradientBGProps} props
 */
export default function GradientBG({ className }: GradientBGProps) {
  return (
    <div className={cn(s.gradientBackground, className)}>
      <div className={s.gradientOne} />
      <div className={s.gradientTwo} />
    </div>
  )
}

export const GradientsHome = () => {
  return (
    <div className={s.gradientsHomeContainer}>
      <div className={s.gradientsHomeOne} />
      <div className={s.gradientsHomeTwo} />
      <div className={s.gradientsHomeThree} />
      <div className={s.gradientsHomeFour} />
      <div className={s.gradientsHomeFive} />
    </div>
  )
}
