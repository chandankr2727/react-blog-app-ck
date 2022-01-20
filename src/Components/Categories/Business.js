import React from 'react'
import '../../style/Common.css'
import { useContext } from 'react'
import { BusinessContext } from '../../Context/BusinessContext'
import { Link } from 'react-router-dom'

function Business() {
    const { business } = useContext(BusinessContext)
    const { top } = useContext(BusinessContext)

    return (
        <div className='common'>
            <div className='content'>
                <div className='part-1'>
                    {
                        business.map((a) => {
                            return (
                                <div key={a.id}>
                                    <Link to={{ pathname: '/article/' + a.category + '/' + a.id + '/' + a.tittle.replace(/\s+/g, '-') }}>
                                        <div className='display'>
                                            <img src={a.image} alt='' />
                                            <div>
                                                <h2>{a.tittle}</h2>
                                                {a.description}<br />
                                                {a.category}/{a.date}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='part-2'>
                    <div className='top-4'>
                        <div className='head'>Top Post <br /> <hr /></div>
                        {
                            top.map((a) => {
                                return (
                                    <div className='parts' key={a.id}>
                                        <Link to={{ pathname: '/article/' + a.category + '/' + a.id + '/' + a.tittle.replace(/\s+/g, '-') }}>

                                            <div className='display'>
                                                <img src={a.image} alt='' />
                                                <div className='desc'>
                                                    <h4>{a.tittle}</h4>
                                                    {a.category} / {a.date}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='ad'>Advertisement</div>
                </div>
            </div>
        </div>
    )
}

export default Business;

