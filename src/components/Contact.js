import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = ({printOnly}) => {

    const clss =  "box " + (printOnly ? "print_only" : "widebox");

    return (
        <div className={clss}>
            <h1>Kontakt&shy;uppgifter</h1>
            <div className="table box">
                <table>
                    <thead>

                    </thead>
                    <tbody>
                    <tr>
                        <td >
                            Epost:
                        </td>
                        <td>
                            john&shy;walker&shy;0x62&shy;@gmail.com
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mobil&shy;nummer: 
                        </td>
                        <td>
                            070-8048383
                        </td>
                    </tr>
                    </tbody>
                </table>
           </div>
        </div>
    )
}

export default Contact