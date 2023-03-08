import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ForChristina.module.scss'
import { memo, useRef, useState } from 'react'


interface ForChristinaProps {
	className?: string
}

export const ForChristina:React.FC<ForChristinaProps> = memo((props) => {
	const { className } = props
	const [open, setOpen] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	const play = () => {
		setOpen(p=> !p)
		videoRef?.current?.play()
	}

	return (
		<>
			<button className={classNames(cls.ForChristina, {}, [className])} onClick={play}>Для Кристины!!!</button>
			<div className={classNames(cls.modal, { [cls.opened]: open }, [])}>
				<video ref={videoRef} width="auto" height="auto" controls>
					<source src='https://rr2---sn-gvnuxaxjvh-v8c6.googlevideo.com/videoplayback?expire=1678294943&ei=P2sIZOb-FuiH0u8P1eS-gAM&ip=65.109.162.198&id=o-AAbIzXvja4r_69zl467Org7xTpx7y3yWGMPa64HdJ2L5&itag=18&source=youtube&requiressl=yes&spc=H3gIhtV1YR8qBhZ46EWbgUSerDSL1MU&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=6575616&ratebypass=yes&dur=149.582&lmt=1457620909686118&fexp=24007246&c=ANDROID&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAM8UVfG4qLvtros16Gr2cfCcJTg-KOGmOtQYE6dfLbq_AiBY5FW4DHIblUx8OQEsNAQrstxkU7UyybdtpNvRTYEIIg%3D%3D&title=%D0%9F%D0%BE%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D1%81+8+%D0%BC%D0%B0%D1%80%D1%82%D0%B0+%28240p%29&redirect_counter=1&rm=sn-5golr7s&req_id=1e0bc82c62a1a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=ra&mip=92.125.137.184&mm=31&mn=sn-gvnuxaxjvh-v8c6&ms=au&mt=1678273256&mv=m&mvi=2&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgDbr2b4jO7wVPASYEaOTnK6_bag9GUMI296GRQz4ytoMCICmYsGv_W1MgKdrZHX-ktsjpVeUa3sCf2ajY60wSn-hH' type="video/mp4"/>
				</video>
			</div>
		</>
	)
})