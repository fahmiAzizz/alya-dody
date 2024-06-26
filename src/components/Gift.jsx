import React, { useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion, useAnimation, useInView } from 'framer-motion';
import chip from '../assets/chip.png';
import spay from '../assets/spay.png';
import bri from '../assets/bri.png';
import ocbc from '../assets/ocbc2.png';
import dana from '../assets/dana2.png';

const Gift = () => {
    const gift = useRef(null);
    const isInView = useInView(gift, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Nomor telah disalin!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.error("Gagal menyalin nomor:", error);
            });
    };

    const hrStyle = {
        height: '2px',
        borderWidth: '0',
        color: '#fff', // Ubah warna sesuai kebutuhan
        backgroundColor: '#fff', // Jika ingin mengubah warna latar belakang garis
    };

    return (
        <div className=' h-auto max-w-screen-mobile py-5 mx-auto text-white '>
            <div ref={gift} className='py-20 bg-[#8FBC8F]'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.50 }}
                >
                    <p className='text-center text-3xl font-customFont '>Titip Hadiah</p>
                    <hr className='mx-auto w-1/2 m-1 text-white' style={hrStyle} />
                    <p className='text-center my-2 px-10 '>Kehadiran dan doa restu Bapak/Ibu amat berarti bagi kami. Hadiah non-tunai dari hati Bapak/Ibu begitu berharga. Terima kasih atas cinta dan dukungan yang selalu mengiringi kami.

                    </p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 250 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.50 }}
                    className='mt-10 border rounded-md w-[80%] mx-auto h-48 bg-slate-100 text-slate-800 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full' >
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Dodi Setiadi</p>
                            <p className='font-semibold'>2080 0101 0540 507</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 '>
                        <img className='w-28 items-end' src={bri} alt="" />
                        <button className='w-20 py-1 px-1 text-slate-100 rounded-full ml-3 text-center mt-10 bg-emerald-400 hover:scale-110 hover:bg-emerald-500 duration-100 ' onClick={() => copyToClipboard('2080 0101 0540 507')}>Copy</button>
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
                    className='mt-10 border rounded-md w-[80%] mx-auto h-48 bg-slate-100 text-slate-800 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full' >
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Alya Rahmalia</p>
                            <p className='font-semibold'>563810130812</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 '>
                        <img className='w-28 items-end' src={ocbc} alt="" />
                        <button className='w-20 py-1 px-1 text-slate-100 rounded-full ml-3 text-center mt-10 bg-emerald-400 hover:scale-110 hover:bg-emerald-500 duration-100 ' onClick={() => copyToClipboard('563810130812')}>Copy</button>
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
                    className='mt-10 border rounded-md w-[80%] mx-auto h-48 bg-slate-100 text-slate-800 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full' >
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Dodi Setiadi</p>
                            <p className='font-semibold'>085770834635</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 '>
                        <img className='w-28 items-end' src={dana} alt="" />
                        <button className='w-20 py-1 px-1 text-slate-100 rounded-full ml-3 text-center mt-10 bg-emerald-400 hover:scale-110 hover:bg-emerald-500 duration-100 ' onClick={() => copyToClipboard('085770834635')}>Copy</button>
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
                    className='mt-10 border rounded-md w-[80%] mx-auto h-48 bg-slate-100 text-slate-800 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full'>
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Alya Rahmalia</p>
                            <p className='font-semibold'>089667736022</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 pt-4'>
                        <img className='w-28 items-end' src={spay} alt="" />
                        <button className='w-20 py-1 px-1 text-slate-100 rounded-full ml-3 text-center mt-10 bg-emerald-400 hover:scale-110 hover:bg-emerald-600 duration-100 ' onClick={() => copyToClipboard('089667736022')}>Copy</button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Gift


