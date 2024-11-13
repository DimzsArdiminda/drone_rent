import React from 'react'

interface ContainerProps{
    children: React.ReactNode
    className?: string
}


export default function Continer(props: Readonly<ContainerProps>) {
    return (
    <div className={`container p-8 mx-auto xl:px-0 ${ props.className ? props.className : "" }`}>
        {props.children}
    </div>
    );
}