import React from 'react'
import '../../style/Common.css'
import { useContext } from 'react'
import { BlogContext } from '../BlogContext'
import { SportsContext } from '../../Context/SportsContext'
import { Link } from 'react-router-dom'

function Business() {
    const { homePage } = useContext(BlogContext)
    const { sports } = useContext(SportsContext)
    return (
        <div className='common'>
            <div className='content'>
                <div className='part-1'>
                    {
                        sports.map((a) => {
                            return (
                                <div key={a.id}>
                                    <Link to={{ pathname: '/article/' + a.category+'/' + a.id + '/' + a.tittle.replace(/\s+/g, '-') }}>
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
                    <div className='top-5'>
                        {
                            homePage.map((a) => {
                                return (
                                    <div key={a.id}>
                                        <Link to={{ pathname: '/article/' + a.id + '/' + a.tittle, state: { ht: homePage } }}>

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
                    <div className='ad'>Advertisement</div>
                </div>
            </div>
        </div>
    )
}

export default Business;

