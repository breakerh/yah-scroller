import React, {FC, useState} from 'react'

type ScrollProps = {
    className?: string,
    children: React.ReactNode
}

const YahScroller: FC<ScrollProps> = ({ className, children }) => {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    let initialPosition = {scrollLeft: 0, x: 0}
    const [grab, setGrab] = useState<boolean>(false)
    const mouseDown = (event: { clientX: number; clientY: number }) => {
        if(!grab && scrollRef.current!==null) {
            setGrab(true)
            initialPosition.scrollLeft = scrollRef.current?.scrollLeft??0
            initialPosition.x = event.clientX
            window.addEventListener('mousemove', mouseMove)
            window.addEventListener('mouseup', mouseUp)
            window.addEventListener('touchmove', touchMove)
            window.addEventListener('touchend', mouseUp)
        }
    }
    const touchMove = (event:any) => mouseMove(event.touches[0])
    const mouseMove = (event: { clientX: number; clientY: number }) => {
        if (scrollRef.current !== null && scrollRef.current.classList.contains('horizontal-scroll--dragging')) {
            const isStart = scrollRef.current.scrollLeft === 0
            const isEnd = scrollRef.current.scrollLeft + scrollRef.current.clientWidth === scrollRef.current.scrollWidth
            const direction = (event.clientX - initialPosition.x) < 0 ? 'right' : 'left'
            if(isStart && direction === 'left')
                scrollRef.current.style.setProperty('--scroll-band', 10+Math.round((event.clientX - initialPosition.x)/50) + 'px')
            else if(isEnd && direction === 'right')
                scrollRef.current.style.setProperty('--scroll-band', 10-Math.round((event.clientX - initialPosition.x)/50) + 'px')
            else
                scrollRef.current.style.setProperty('--scroll-band', '10px')
            scrollRef.current.scrollLeft = initialPosition.scrollLeft - ((event.clientX - initialPosition.x))
        }
    }
    const mouseUp = () => {
        if(scrollRef.current==null)
            return
        setGrab(false)
        window.removeEventListener('mousemove', mouseMove)
        window.removeEventListener('mouseup', mouseUp)
        window.removeEventListener('touchmove', touchMove)
        window.removeEventListener('touchend', mouseUp)
        scrollRef.current.style.setProperty('--scroll-band', '10px')
    }
    const touchStart = (event:any) => mouseDown(event.touches[0])
    return (
        <div ref={scrollRef} onMouseDown={mouseDown} onTouchStart={touchStart}
             className={`${className} horizontal-scroll--hide-scrollbars ${grab?'horizontal-scroll--dragging':'horizontal-scroll--release'}`}>
            {children}
        </div>
    )
}

export default YahScroller