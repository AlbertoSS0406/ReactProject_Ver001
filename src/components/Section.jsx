import React,  {Fragment,  useState} from 'react'
import logoPaypal from '../images/logopaypal.png';

export function Section({dataSection}) {
    return <section>
        {dataSection}
        <img className="imgmain" src={logoPaypal} alt="PayPal"/>
        </section>    
}
