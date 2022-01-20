import React from 'react'
import { useContext } from 'react'
import { BlogContext } from './BlogContext'
import '../style/homepage.css'
import { Link } from 'react-router-dom'

function Home() {
    const { homePage } = useContext(BlogContext)
    const { latest } = useContext(BlogContext)
    const { latestArticle } = useContext(BlogContext)
    const { top } = useContext(BlogContext)
    return (
        <div className='home'>
            <div className='home-display'>
                <div className='h1'>
                    <Link to={{ pathname: '/article/' + homePage[0].category + '/' + homePage[0].id + '/' + homePage[0].tittle.replace(/\s+/g, '-') }}>
                        <img src={homePage[0].image} className='h1-i' alt='' />
                        <div className='h1-t'>{homePage[0].tittle} <br /> <div className='small'>Travel/{homePage[0].date}</div> </div>
                    </Link>
                </div>
                <div className='h2'>
                    <div>
                        <Link to={{ pathname: '/article/' + homePage[1].category + '/' + homePage[1].id + '/' + homePage[1].tittle.replace(/\s+/g, '-') }}>
                            <img src={homePage[1].image} className='h2-i' alt='' />
                            <div className='h1-t h2-t'>{homePage[1].tittle} <br /> <div className='small'>Travel/{homePage[1].date}</div> </div>
                        </Link>
                    </div>
                    <div>

                        <Link to={{ pathname: '/article/' + homePage[2].category + '/' + homePage[2].id + '/' + homePage[2].tittle.replace(/\s+/g, '-') }}>
                            <img src={homePage[2].image} className='h2-i' alt='' />
                            <div className='h1-t h3-t'>{homePage[2].tittle} <br /> <div className='small'>Travel/{homePage[2].date}</div> </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='latest'>
                <div className='head-l'>The Latest <br /> <hr /></div>
                <div className='content'>
                    {
                        latest.map((a) => {
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
            <div className='latest-article'>
                <div className='head'>Latest Article <br /> <hr /></div>
                <div className='flex-2p'>
                    <div className='content-1'>
                        {
                            latestArticle.map((a) => {
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
                        <div className='art-img'>
                            <img src="/images/travel/Palawan.jpg" alt='' />
                            <div>The hidden paradise of Palawan, Philippines <br /> Travel/ January 13, 2022 </div>
                        </div>
                    </div>
                    <div className='content-2'>
                        <div className='ad'>Advertisement</div>
                        <div className='top'>
                            <div className='top-4'>
                                <div className='head'>Top Post <br /> <hr /></div>
                                {
                                    top.map((a) => {
                                        return (
                                            <div key={a.id}>
                                                <Link to={{ pathname: '/article/' + a.category + '/' + a.id + '/' + a.tittle.replace(/\s+/g, '-') }}>

                                                    <div className='display'>
                                                        <img src={a.image} alt='' />
                                                        <div className='desc'>
                                                            <h2>{a.tittle}</h2>
                                                            {a.category} / {a.date}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='latest-stories'>
                <div className='head'>Latest Stories <br /> <hr /></div>
                <div className='content'>
                    {
                        homePage.map((a) => {
                            return (
                                <div key={a.id}>
                                    <div className='display'>
                                        <h2>{a.tittle}</h2>
                                        {a.description}<br />
                                        {a.category}/{a.date}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
