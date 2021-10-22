import React from "react";
import Link from 'next/link'


const Footer = () => {
    return (
        <div className="fixed inset-0 overflow-hidden " aria-labelledby="slide-over-title" role="dialog"
             aria-modal="true">
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"/>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">

                    <div className="relative w-screen max-w-md">

                        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                            <Link href="/">
                            <a>
                            <button type="button"
                                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                <span className="sr-only">Close panel</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                            </a>
                            </Link>
                        </div>

                        <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll bg-gray-800">
                            <div className="px-4 sm:px-6">
                                <h2 className="text-3xl font-medium text-gray-100 text-center">
                                    Notifications
                                </h2>
                            </div>
                            <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                <div className="card lg:card-side border border-indigo-300">
                                    <div className="card-body">
                                        <h2 className="card-title">Open Source</h2>
                                        <p>This Project is available on GitHub</p>
                                        <p className="text-white text-opacity-60">Powered by JuSoft</p>
                                        <p className="text-blue-200 text-opacity-30">10/22</p>
                                        <div className="card-actions">
                                            <Link href="https://github.com/jusoftdev/nft-isle">
                                            <a><button className="btn btn-primary">Go to Repository</button></a>
                                            </Link>
                                            <Link href="https://jusoft.dev">
                                            <a><button className="btn btn-ghost">JuSoft</button></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;