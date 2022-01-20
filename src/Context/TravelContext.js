import { createContext, useState } from "react";

export const TravelContext = createContext()

const TravelContextProvider = (props) => {
    const [travel] = useState([{
        id: "81",
        tittle: "The hidden paradise of Palawan, Philippines",
        image: "/images/travel/Palawan.jpg",
        date: "January 13, 2022",
        author: "by Reza Amirinia",
        category: "Travel",
        description: "Grab a guide for a sea-faring adventure around the Province of Palawan and its islands.",
        article: `The best way to see it is with a local Filipino company like Tao that fosters ecotourism and sustainability while introducing tourists to these islands’ local way of life. I would spend three days with a group using one of Tao’s small vessels and doing some island hopping. We started our adventure on the island of Busuanga,  connected by air to the capital Manila. We had to go through a fairly rigorous training session before setting sail. It started with a quick geography lesson to give us our bearings, followed by packing instructions and stressing the importance of our “dry bag.” This is self-explanatory, particularly as we would get off the boat and use kayaks to reach some islands. This experience showed me many of the fundamental cultural elements of basic life in these remote islands. It also tested me to see if I could live in a little hut under a bamboo roof and cope with sharing time and space with strangers. So I was about to find out. The cruise itinerary was not set as it would change to adjust to the tidal vagaries, weather and passenger requests. The following day, we set off in our Bangka boat. This type of craft is the favoured method of transport for Filipinos living in coastal or wetland areas. Ours had a kitchen, toilet cleansed by seawater and a large storage area for our kit. It comes with large outriggers for stability and skims gracefully through the water. We soon found ourselves in the open sea but could just make out the hilly landscape of Coron. We were heading towards our first stop – Tangat Island – famous for its clear water diving and marine life. Here, on the sea bed, is a wrecked ship that attracts fish and other marine life. Great for divers. Even surface snorkelling, I could see the wreck’s many phantoms below.On the last night of this adventure, we camped at Tabayan Base on Campon. This is an uninhabited island, but the crew and guides produced a barbecue of grilled fish which we had seen them catch during the day. No one wanted the day to end, so we sat singing and reminiscing until sleep claimed us. I started my final day with a cold shower behind a wooden bamboo curtain in the woods. We stopped at El Nido Island, from where we journeyed for about an hour to Pangaraycayan. Here was a long white sandy beach shaded by tall palm trees. Sadly it was time to head back to Manila. Back in my Manila hotel room, the last few wonderful days seemed just a dream.`
    },
    {
        id: "82",
        tittle: "Restaurant Review: Angelina, Dalston, London",
        image: "/images/travel/Angelina.jpg",
        date: "January 10, 2022",
        author: "by Sharron Livingston",
        category: "Travel",
        description: "“Is this your first visit to Angelina?” the voice came from the next table. Normally I’d regard this as a pickup line but, not this time. I had been eyeballing the menu for some time to make sense of the 10-course menu with my partner.",
        article: `Breaking off from our debate, I turned to Bernadette and offered: “Er yes”. Colin, also seated on the next table, said “I’m jealous. You are in for two hours of oohs and aahs, the kind you get the first time you experience something amazing”. This was their third visit. They knew the drill and had just finished their two-hour session and moved onto the grappa. Smiling eyes looked back at me, and now I was excited. Angelina has two young owners. Ex-footballer Joshua Owens-Baigler and Amar Takhar, both locals, who had been friends since they were toddlers. Josh recounted tales of being taken out for dinner regularly by his dad to mainly Japanese and Italian restaurants. Their head chef Usman Heyden was poached from Ottolenghi. When I walked in it was not immediately clear how to feel – a restaurant and a cafe engage different states of mind. I soon settled on the idea that this is a restaurant with a sense of cafe-esque casual. A stylish black facade leads to a black and white interior, simple tables and chairs almost minimalist decor save Japanese style paper lanterns with Japanese letters. It’s friendly, easygoing yet stylish and streamlined. There are a couple of menus, but we chose the longest, the 10-course menu comprising little plates with wine pairing. First came a flute of Franciacarta Coupe Non Dosato, otherwise known as Italys answer to Champagne. This playful nectar from the Lombardy region comprises Chardonnay and Pinot Noir. It whets our palate for the deep-fried artichokes – a morish mouthful that offered crispiness of the batter yet soft and delicious on the inside. Two styles of bread turned up: one topped with soft ricotta and a brioche topped with tuna Nduja – a paste of pork meat and hot chilli pepper. It worked so well with the Chawanmushi. This is a Japanese steamed egg custard, similar to a creme brulee but without the sugar and made savoury with sausage, tarragon oil and ikura – Japanese salmon roe. I raised an eyebrow at the cleverness of this concoction of luxurious fusion. A glass of Asterias Tempa Di Zoe, Fiana, Capania, 2019, a light, dry white heralded the arrival of the sea bream in marrow fat pea foam, served with wakame (seaweed). This was the highlight of the feast. It just kept on giving with waves of flavour ending with an unexpected wasabi heat.`
    },
    {
        id: "83",
        tittle: "A tour of the historical sights of Fukushima and Yamagata, Japan",
        image: "/images/travel/Lucia.jpg",
        date: "January 6, 2022",
        author: "by The Travel Magazine",
        category: "Travel",
        description: "The often-overlooked Fukushima and Yamagata prefectures are located in the Tōhoku region of Japan and are both rich in culture and landscape.",
        article: `The joys of Fukushima are still obscured behind a cloud of a nuclear accident following the 2011 great east Japan earthquake. That’s a shame because Japan’s third-largest prefecture offers incredible natural beauty, warm hospitality, and fascinating historical sights a decade later. Yamagata is more pleasantly famed as being Japan’s largest producer of cherries and pears. It is also known for its gorgeous spring cherry blossoms, the Kajo Park containing the remains of Yamagata Castle and its natural beauty. Getting there from Tokyo is easy as it is just an 80-minute train ride on the Tohoku Shinkansen to Southern Fukushima. From there, you can pick up a rental car and meander through the mountains of the Aizu region, making your way through Fukushima and Yamagata stopping off at these historical destinations. The remote mountain village of Ouchi-juku is probably one of the most interesting historical spots of Fukushima. During the Edo period, the shogun made every feudal lord in Japan travel to Edo (now known as Tokyo) and live there every other year to control them. As a result, shukuba or postal towns were created along the roads to Edo, serving as rest stops for the lords, merchants and travellers. Ouchi-juku is one of Japan’s best-preserved examples of a shukuba. The main street is lined with preserved houses whose thatched roofs recall the more famous Shirakawa-go in Hida, but without the touristy crowds. Locals still live in them, using the ground floors as shopfronts to sell souvenir crafts, local dishes and sake. A handful also offers overnight accommodation. Tsurugajo Castle is a throwback to the 14th century Aizu Wakamatsu City – a city that thrived for 1000 years with a deeply embedded samurai culture. The castle you see today is a faithful restoration from the iconic white central tower down to the unique iron red-tinted roof tiles.  But there is still enough of the original construction so that you can spot the building styles, from the medieval nozura-zumi of piled stones to the Edo-period uchikomi-hagi method of cutting stones to form flat surfaces. A trip up to the watchtower observatory gives rewarding views of the surrounding neighbourhood and green mountains on the horizon. Inside, the exhibition includes reproductions of many paintings and woodcuts depicting key characters and moments in the history of samurai culture.`
    },
    {
        id: "84",
        tittle: "MDLBEAST Soundstorm Festival, Riyadh, Saudi Arabia",
        image: "/images/travel/MDLBEAST.jpg",
        date: "January 03, 2022",
        author: "by Rupert Parker ",
        category: "Travel",
        description: "Around 700,000 attend an electronic dance music festival in Saudi Arabia, held over four days with 200 global, regional and local acts on the bill.",
        article: `Once unthinkable, the idea of a music festival in Saudi Arabia, where hundreds of thousands of men and women dance together is now a reality. It’s taking place just outside the capital, Riyadh, in a purpose-built site in the desert. Around 700,000 are expected and because the site is so huge, it doesn’t seem crowded. Even better, as alcohol is forbidden in the Kingdom, everyone is sober and well behaved. Saudi Arabia, long closed, is now open to tourists but you still need a visa, easily purchased online, and a fast track lane at the airport makes arrival painless. Riyadh is a sprawling city with clusters of designer high rises in the downtown and financial districts. A car is essential here as the wide highways have no pavements and certainly are not designed for walking. Apart from the impressive skyscrapers, there are few conventional tourist sites. In the old town is the 150-year-old Al Masmak Fortress a vast clay and mud-brick citadel that is now a museum. Just nearby is the vast sprawling Souq Al Zal selling carpets, jewellery, clothing and Arabian daggers, with a second-hand section outside. A clue that Saudi has its eye on the tourist market is at Diriyah, on the outskirts of the city. This was the original seat of power for the Al Saud family and the country’s capital since 1745, until it was usurped by Riyadh. The ruins were designated a UNESCO World Heritage Site in 2010 and the area is undergoing painstaking restoration. When it’s finished, it will be a vast open-air museum, complete with luxury hotels, designer stores and a traditional market selling crafts and souvenirs. Another recent innovation is the inaugural edition of Saudi Arabia’s XP Music Conference. This takes place over three days and nights, before the MDLBEAST Soundstorm festival, and attracts hundreds of music industry professionals and artists from around the Gulf and beyond. Like the festival, it’s sponsored by the Saudi Government which is keen to open up to the music industry. Critics may say that it’s an attempt to conceal the Kingdom’s human rights issues, but certainly, the many forums I attend seem to echo their claim that things are on the move.  The domestic music market is growing quickly and discussions focus on music copyright issues, streaming success stories, and getting a recording contract. The Head of the Saudi Music Commission, a government body, tells me that he’s committed to building a music ecosystem so that local artists can thrive. Certainly at MDLBEAST Festival it’s astounding to see this in action. The site sprawls over a huge area, packed with food stalls and it takes a while to walk to the four main performance areas. The BIG BEAST stage is where all the main acts appear and is reputedly the world’s tallest and largest, with huge video displays. I didn’t attempt to brave the crush upfront but enjoy the music from way back.`
    },
    {
        id: "85",
        tittle: "A look around the Royal Palace of Caserta, Naples, Italy",
        image: "/images/travel/Italy.jpg",
        date: "January 01, 2022",
        author: "by Rupert Parker",
        category: "Travel",
        description: "Known as the Versailles of Naples, this 18th century palace of the Bourbon Kings of Naples is the largest royal residence in the world.",
        article: `Italy has no shortage of ancient monuments and has 58 sites inscribed on the UNESCO World Heritage list. Naples is a big hitter with its historic centre and Pompeii and Herculaneum fond favourites. With such an embarrassment of riches, it’s no wonder that some of them are overlooked. To counter this, the Mirabilia Network has been set up to promote the lesser-known Italian UNESCO World Heritage Sites. Caserta, just outside Naples, hardly features in most guidebooks yet it’s home to the 18th century Reggia de Caserta, known as the Versailles of Naples. The imposing residence of the Bourbon Kings is, in terms of volume, the largest royal residence in the world, covering an area of 47,000 square metres. The palace, park, gardens and wooded area, as well as the Aqueduct Carolino and the industrial complex of San Leucio, built for the production of silk, received UNESCO World Heritage status in 1997. n 1752, the Bourbon king, Charles VII of Naples decided he wanted a magnificent new royal court and administrative centre for the kingdom in a location protected from sea attack. He, therefore, commissioned Neapolitan architect Luigi Vanvitelli to build a palace bigger than Versailles, 35 km inland from Naples. It was never completely finished but ended up with 1200 rooms, 1790 windows, 34 staircases and five floors. It includes Court Chapel, the Palatine Library, and a theatre modelled after the Teatro San Carlo of Naples. It’s certainly imposing, even the façade stretches 250m and, at the rear, there’s a massive landscaped park with a 3 km promenade leading 3 km upwards to a waterfall at the top with a fountain of Diana.  On the ground floor, behind the façade there’s a vaulted arcade connecting three waiting areas leading to four internal courtyards, all suitably vast. A grand staircase leads up to the royal apartments, dating from the end of the 18th century, and early 19th, a marvel of frescoes, tapestries, crystal, stucco and statues.  The style is French Empire but strategically placed among the period furniture are artworks from the Mostra Terrea Motus collection of modern art, commissioned after the earthquake in 1980. At the end of WW2, the palace served as the Allied command headquarters and was the location for the surrender of the German army in 1945.`
    },
    {
        id: "86",
        tittle: "Taking a Look Back on 2021",
        image: "/images/Taking2021.jpg",
        date: "January 10, 2022",
        author: "By: Ian Shive",
        category: "Travel",
        description: "It can be hard to truly appreciate how great a year is without taking time to stop and reflect upon it. As we start 2022, I decided to jump on the “best nine photos” of the year social media trend, and I was blown away by what an incredible year of adventure 2021 was! Definitely, a lot more than nine photos, that’s for sure."
    },
    {
        id: "87",
        tittle: "Climate change and nature loss must be tackled together, says report",
        image: "/images/climatenature.jpg",
        date: "January 12, 2021",
        author: "By New Scientist and Press Association",
        category: "Travel",
        description: "There are solutions that can help deliver benefits for the climate and nature, as well as providing habitat and delivering benefits including protecting coasts, cutting soil erosion and curbing floods.Managing crop and grazing land better, can save 3 to 6 billion tonnes of emissions a year, the report says."
    },
    {
        id: "88",
        tittle: "Best Moments from America's National Parks",
        image: "/images/glacierpark.jpg",
        date: "December 30, 2021",
        author: "By: Ian Shive",
        category: "Travel",
        description: 'The first thing people ask me about this photo is "how did you get the mountain goat to pose?" It always makes me laugh, because for a brief moment, it looks like this goat was indeed just taking in the view, but alas, I was just lucky. Photographed at Hidden Lake, Glacier National Park, Montana.'
    }
    ])
    return (
        <TravelContext.Provider value={{ travel }} >
            {props.children}
        </TravelContext.Provider>
    )
}
export default TravelContextProvider;