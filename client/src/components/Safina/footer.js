import React from 'react'
import footer from '../../assets/logo/logo-06.png'
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'


function Footer() {
    return (
        <>

            <footer class="bg-white dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <Link to='/'>
                                <a href="" class="flex items-center">
                                    <img src={footer} class="h-28 mr-5" alt="Ark Youth Church" />
                                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                                </a>
                            </Link>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Location</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://goo.gl/maps/pyXpqiRqUAVoS2uH9" class="hover:underline">Ark Youth Church</a>
                                    </li>
                                    <li>
                                        <a href="https://goo.gl/maps/X8AwqqqfHJtgXqNV8" class="hover:underline">Harvest Family Church</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://www.instagram.com/the_ark_youth_church/" class="hover:underline ">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://web.facebook.com/thearkyouthchurch" class="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://ark-church-chi.vercel.app/" class="hover:underline">Ark Youth Church™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="https://web.facebook.com/thearkyouthchurch" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.instagram.com/the_ark_youth_church/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsInstagram />
                                <span class="sr-only">Instagram page</span>
                            </a>
                            <a href="https://www.youtube.com/@arkyouthchurch1740/videos" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsYoutube />
                                <span class="sr-only">Youtube page</span>
                            </a>
                            <a href="https://t.me/arkchurchsermons" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsTelegram />
                                <span class="sr-only">Telegram account</span>
                            </a>
                            <a href="https://api.whatsapp.com/message/6QYJFCOFMOXBF1?autoload=1&app_absent=0" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <BsWhatsapp />
                                <span class="sr-only">whatsapp account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}



export default Footer


