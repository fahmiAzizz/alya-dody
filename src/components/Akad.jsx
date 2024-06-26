import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import Countdown from 'react-countdown-simple';
const Akad = () => {
    const akad = useRef(null);
    const isInView = useInView(akad, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible",)
        }
    }, [isInView])

    const hrStyle = {
        height: '2px',
        borderWidth: '0',
        color: '#8FBC8F', // Ubah warna sesuai kebutuhan
        backgroundColor: '#8FBC8F', // Jika ingin mengubah warna latar belakang garis
    };
    return (
        <div className='py-10 max-w-screen-mobile mx-auto text-center'>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
                className='text-3xl font-customFont pt-24 pb-10'>
                <p>SAVE THE DATE</p>
                {/* <img className='w-1/2 mx-auto -mt-20' src={Underline} alt="" /> */}
                <hr className=' m-1 w-1/2 mx-auto text-[#8FBC8F]' style={hrStyle} />
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.50 }}
                className='w-[90%] mx-auto border bg-slate-100 shadow-lg rounded-lg py-8'>
                <p className='text-3xl font-customFont3' ref={akad}>Akad</p>
                <p className='text-2xl font-semibold'>Juni</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>30<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold '>
                    <p>Pukul 09:00 WIB - 11:00 WIB</p>
                    <p className='px-10 pt-2'>Gedung Serbaguna Desa MekarRahayu Kec MargaAsih</p>
                    <p className='mt-4 hover:scale-110 duration-100'><a className='bg-[#8FBC8F] text-slate-50 rounded-xl p-2 ' href="https://maps.app.goo.gl/21uVyBVEgXVDiaZJ9">Cek Lokasi</a></p>
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.50 }}
                className='w-[90%] mx-auto border bg-slate-100 shadow-lg rounded-lg py-8 mt-10'>
                <p className='text-3xl font-customFont3'>Resepsi Pernikahan</p>
                <p className='text-2xl font-semibold'>Juni</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>30<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold'>
                    <p>Pukul 11:00 WIB - 15:30 WIB</p>
                    <p className='px-10 pt-2'>Gedung Serbaguna Desa MekarRahayu Kec MargaAsih</p>
                    <p className='mt-4 hover:scale-110 duration-100'><a className='bg-[#8FBC8F] text-slate-50 rounded-xl p-2' href="https://maps.app.goo.gl/21uVyBVEgXVDiaZJ9">Cek Lokasi</a></p>
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.50 }}
                className=' mx-auto p-5'
            >
                <iframe
                    width="300"
                    height="300"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3960.2730615955957!2d107.5530244!3d-6.9770741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eeddd174638f%3A0x6f7436370e24677c!2sKantor%20Desa%20Mekar%20Rahayu!5e0!3m2!1sid!2sid!4v1718170285466!5m2!1sid!2sid"
                    title="Lokasi Kami"
                    className='mx-auto pt-5'
                ></iframe>
                <Countdown
                    targetDate={new Date('2024-06-30T00:00:00')}
                    interval={1000}
                    renderer={({ days, hours, minutes, seconds, completed }) => (
                        <div className="bg-[#8FBC8F] p-5 rounded-lg grid grid-cols-4 gap-4 my-8 shadow-xl">
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{days}</div>
                                <div className='text-xl'>hari</div>
                            </div>
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{hours}</div>
                                <div className='text-xl'>jam</div>
                            </div>
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{minutes}</div>
                                <div className='text-xl'>menit</div>
                            </div>
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{seconds}</div>
                                <div className='text-xl'>detik</div>
                            </div>
                        </div>
                    )}
                />
            </motion.div>
        </div>
    )
}

export default Akad