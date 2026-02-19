"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export function useAnimatedCounter(end: number, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, isVisible])

  return count
}

export function useStaggeredReveal(itemCount: number, isVisible: boolean, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  )

  const resetItems = useCallback(() => {
    setVisibleItems(new Array(itemCount).fill(false))
  }, [itemCount])

  useEffect(() => {
    if (!isVisible) {
      resetItems()
      return
    }

    const timers: NodeJS.Timeout[] = []
    for (let i = 0; i < itemCount; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleItems((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
        }, i * delay)
      )
    }

    return () => timers.forEach(clearTimeout)
  }, [isVisible, itemCount, delay, resetItems])

  return visibleItems
}
