import React from 'react'
import Article from './Article'
import WorldContextProvider from '../Context/WorldContext'
import PoliticsContextProvider from '../Context/PoliticsContext'
import BusinessContextProvider from '../Context/BusinessContext'
import SportsContextProvider from '../Context/SportsContext'
import BollywoodContextProvider from '../Context/BollywoodContext'
import HollywoodContextProvider from '../Context/HollywoodContext'
import TechnologyContextProvider from '../Context/TechnologyContext'
import TravelContextProvider from '../Context/TravelContext'



function Common() {
    return (
        <div>
            <WorldContextProvider>
                <PoliticsContextProvider>
                    <BusinessContextProvider>
                        <SportsContextProvider>
                            <BollywoodContextProvider>
                                <HollywoodContextProvider>
                                    <TechnologyContextProvider>
                                        <TravelContextProvider>
                                            <Article />
                                        </TravelContextProvider>
                                    </TechnologyContextProvider>
                                </HollywoodContextProvider>
                            </BollywoodContextProvider>
                        </SportsContextProvider>
                    </BusinessContextProvider>
                </PoliticsContextProvider>
            </WorldContextProvider>
        </div>
    )
}

export default Common
