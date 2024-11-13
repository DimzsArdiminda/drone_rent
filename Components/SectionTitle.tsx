import React from 'react'
import Continer from './Continer'

interface SectionTitleProps{
    children? : React.ReactNode
    perTitle?: string
    align?: string
    title?: string
}

export default function SectionTitle(props: Readonly<SectionTitleProps>) {
    return (
        <Continer className={`flex w-full flex-col mt-4 ${
            props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
        {props.perTitle && (
            <div className="text-sm font-bold tracking-wider text-gray-600 uppercase">
            {props.perTitle}
            </div>
        )}

        {props.title && (
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {props.title}
            </h2>
        )}

        {props.children && (
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {props.children}
            </p>
        )}
        </Continer>
    )
    }
