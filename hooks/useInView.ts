/**
 * Hook personalizado useInView
 * Detecta cuando un elemento entra en el viewport
 * Útil para animaciones al hacer scroll
 */

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, triggerOnce = false, rootMargin = '0px' } = options
  const [inView, setInView] = useState(false)
  const ref = useRef<any>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting
        
        if (isInView) {
          setInView(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, triggerOnce, rootMargin])

  return [ref, inView] as const
}




