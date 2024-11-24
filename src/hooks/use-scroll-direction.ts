import { useEffect, useState } from 'preact/hooks'

export const useScrollDirection = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY <= 0)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return isScrollingUp
} 