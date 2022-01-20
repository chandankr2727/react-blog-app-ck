import React from 'react'
import '../style/article.css'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from './BlogContext'
import { WorldContext } from '../Context/WorldContext'
import { PoliticsContext } from '../Context/PoliticsContext'
import { BusinessContext } from '../Context/BusinessContext'
import { SportsContext } from '../Context/SportsContext'
import { BollywoodContext } from '../Context/BollywoodContext'
import { HollywoodContext } from '../Context/HollywoodContext'
import { TechnologyContext } from '../Context/TechnologyContext'
import { TravelContext } from '../Context/TravelContext'
import { useParams } from 'react-router-dom'

function Article() {
    const { homePage } = useContext(BlogContext)
    const { world } = useContext(WorldContext)
    const { politics } = useContext(PoliticsContext)
    const { business } = useContext(BusinessContext)
    const { sports } = useContext(SportsContext)
    const { bollywood } = useContext(BollywoodContext)
    const { hollywood } = useContext(HollywoodContext)
    const { technology } = useContext(TechnologyContext)
    const { travel } = useContext(TravelContext)
    const pt = useParams()
    var gt = ''
    var ft = ''
    if (pt.category === "World") {
        gt = world.filter((a) => a.id === pt.id)
        ft = world
    }
    else if (pt.category === "Politics") {
        gt = politics.filter((a) => a.id === pt.id)
        ft = politics
    }
    else if (pt.category === "Business") {
        gt = business.filter((a) => a.id === pt.id)
        ft = business
    }
    else if (pt.category === "Sports") {
        gt = sports.filter((a) => a.id === pt.id)
        ft = sports
    }
    else if (pt.category === "Bollywood") {
        gt = bollywood.filter((a) => a.id === pt.id)
        ft = bollywood
    }
    else if (pt.category === "Hollywood") {
        gt = hollywood.filter((a) => a.id === pt.id)
        ft = hollywood
    }
    else if (pt.category === "Technology") {
        gt = technology.filter((a) => a.id === pt.id)
        ft = technology
    }
    else if (pt.category === "Travel") {
        gt = travel.filter((a) => a.id === pt.id)
        ft = travel
    }
    else {
        gt = homePage.filter((a) => a.id === pt.id)
        ft = homePage
    }
    const lt = ft.filter((a) => a.id !== pt.id)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [gt])

    return (
        <div className='main'>
            <div className='content'>
                <div className='tittle'>{gt[0].tittle}</div>
                <div className='th'>{gt[0].date} {gt[0].author}</div>
                <div className='img'> <img src={gt[0].image} alt='' /> </div>
                <div className='desc'>{gt[0].description}</div>
                <div className='art'>{gt[0].article}</div>
                <div className='date'>{gt[0].date} {gt[0].author}</div>
            </div>
            <div className='more-from'>
                <div className='head'>More From {pt.category} <br /> <hr /></div>
            </div>
            <div className='more'>
                {
                    lt.map((a) => {

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
        </div>
    )
}

export default Article
