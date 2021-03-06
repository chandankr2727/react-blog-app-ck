import { createContext, useState } from "react";

export const BlogContext = createContext()

const BlogContextProvider = (props) => {
    const [homePage] = useState([{
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
    const [latest] = useState([
        {
            id: "61",
            tittle: "‘Spider-Man: No Way Home’ Lands at No. 4 on All-Time Box Office List",
            image: "/images/hollywood/Spiderman.jpg",
            date: "January 18, 2022",
            author: "BY PAMELA MCCLINTOCK",
            category: "Hollywood",
            description: "The Sony and Marvel superhero pic has crossed the $700 million mark at the domestic box office. Spider-Man: No Way Home has spun a history-making web at the domestic box office.",
            article: `The Sony and Marvel Studios superhero blockbuster on Monday became the fourth top-grossing film of all time — not adjusted for inflation — after passing up Black Panther to finish the day with $702.7 million in ticket sales, according to final numbers for the Martin Luther King Jr. holiday weekend. No Way Home is among only five films to earn $700 million or more domestically after Black Panther ($700.4 million), Avatar ($760.5 million), Avengers Endgame ($858.4 million) and Star Wars: The Force Awakens ($936.7 million). The performance of No Way Home, both in North America and overseas, is all the more remarkable considering the challenges posed by COVID-19. Globally, No Way Home sits at No. 8 on the all-time list of top-grossing films, with north of $1.63 billion in revenue as of Monday. There are several factors why the latest Spidey installment won’t achieve the same record levels worldwide as it has domestically, including the ongoing pandemic and the fact that it has yet to receive a release date in China. In North America, No Way Home will likely remain at No. 4. To climb any higher would mean overtaking Avatar, whose lifetime gross of $760.5 million includes more than $11 million in re-release grosses. No Way Home is the first film of the COVID-19 era to do pre-pandemic level business, thanks in large part to male moviegoers between the ages of 18 and 34.`
        },
        {
            id: "21",
            tittle: "Synchronised global regulation of crypto needed: PM Modi at WEF",
            image: "/images/business/pmmodi.webp",
            date: "January 17, 2022",
            author: "By: Asit Ranjan Mishra ",
            category: "Business",
            description: "Prime Minister Narendra Modi on Monday called for synchronised global action to regulate cryptocurrencies, at a time when India is contemplating bringing a legislation to regulate such virtual currencies.",
            article: "Speaking at the virtual summit of the World Economic Forum, Modi said that steps taken by one country to regulate cryptocurrencies may not be sufficient, given the kind of technology involved. “Today with change in global order, the challenges we face are also increasing. To fight these challenges, every country and every international organisation needs to take collective and synchronised action. Supply chain disruption, inflation and climate change are such examples,” Modi said. “Another example is cryptocurrency. The kind of technology that is linked to it, steps taken by one country will be insufficient to face such challenges. We have to take one view on it.” Modi also called for the reform of multilateral organisations, such as the International Monetary Fund, as he expressed doubt on whether they are capable of tackling such new challenges. “Looking at the global scenario, the question is whether multilateral organisations in the new world order are ready and capable to tackle such challenges. When these organisations were established, the circumstances were different. Today, the situation is different. That’s why it is the responsibility of all democratic countries to emphasise reform of such institutions so that they can be readied to face today’s and tomorrow’s challenges,” he said. Last month, Finance Minister Nirmala Sitharaman had said that global action can manage borderless technology and no country has a one-point formula. 'Even as we are thinking at a national level', 'there should simultaneously be a global mechanism through which we are constantly monitoring the movement of technology,' she had said at an event."

        },
        {
            id: "13",
            tittle: "Texas synagogue hostage-taker was British",
            image: "/images/world/texas.jpg",
            date: "january 17, 2022",
            author: "By BBC",
            category: "World",
            description: "A man who took four hostages at a synagogue in a suburb of Dallas, Texas, has been identified by the FBI as British citizen Malik Faisal Akram, 44.",
            article: '<h4>A man who took four hostages at a synagogue in a suburb of Dallas, Texas, has been identified by the FBI as British citizen Malik Faisal Akram, 44.</h4> <br/>The man who interrupted a morning service in Colleyville on Saturday was shot and killed after a 10-hour standoff with police. <br/> All of the hostages at the Congregation Beth Israel were freed unharmed. <br/>US President Joe Biden called the hostage-taking an "act of terror" and the UK condemned the attack.<br/>British Foreign Secretary Liz Truss described it as an "act of terrorism and anti-Semitism", adding: "We stand with US in defending the rights and freedoms of our citizens against those who spread hate."<br/>There is currently no indication that others were involved, the FBI in Dallas said. Police sources say that no explosive material was found on the attackers body.<br/>A brother of Malik Faisal Akram issued a statement apologising to the victims and saying he had been suffering from "mental health issues". Negotiators had spent hours talking to the assailant during the standoff.'

        },

    ])
    const [latestArticle] = useState([
        {
            id: "42",
            tittle: "India look to bounce back from Test series defeat, all eyes on Virat Kohli ‘the batter’",
            image: "/images/sports/klrahul.webp",
            date: "January 18, 2022",
            author: "By Saurabh Kumar",
            category: "Sports",
            description: "SA vs IND: The focus will shift on Virat Kohli 'the batter' when KL Rahul-led Indian team takes on Temba Bavuma's South Africa in the three-match ODI series.",
            article: "he KL Rahul-led Indian team will look to bounce back from the shocking Test series defeat when they take on hosts South Africa in a three-match ODI series, starting on Wednesday in Paarl. On the previous tour, India hammered the hosts 5-1 in ODIs and they will draw confidence from it when they face the Temba Bavuma-led side in Paarl. Also, Virat Kohli, 'the batter', will be keenly followed as he takes on the field as a mere player for the first time in seven years. Not only does Kohli have a major role to play as a batter, but as vice-captain Jasprit Bumrah said on the eve of the series, the star 'will always be a leader' in the team. India will look to win the series with one eye on preparations for the 2023 World Cup and also make up for the disappointment of unexpectedly going down in the Tests last week. India had to contend with pace and bounce in their 2-1 Test series loss to South Africa but will find conditions more like home in Paarl. India have not selected a full-strength squad for an ODI series since their 2-1 home win over England in March. Rahul, who is leading the side in the absence of an injured Rohit Sharma, is expected to turn to Kohli for advice during the series. This series is the start of their build-up to the 2023 Cricket World Cup that India will host. 'We have sat down as a team and had an honest talk about what are the things we can improve and what we can get better at. Everyone is committed to it. We have the World Cup in mind and we have a process we have all decided to follow,' Rahul said. 'All these games become really important for us to go out there and try and grow as a team, and do all the things that we spoke about. We won't be a team that is scared to try a few things because our focus is on the World Cup and to try and get the best team out on the park.' Meanwhile, South Africa will look to gain momentum from their memorable series win over India in the five-day format. Skipper Temba Bavuma played a few crucial games in the preceding Tests and he will carry that confidence into his batting as well as his leadership. Quinton de Kock, who retired from Test cricket after the series opener against India, starts his life as a white-ball only player. Tall left-arm pacer Marco Jansen, who excelled in his maiden Test series, is expected to trouble the Indian batters with his extra bounce and variations in the short format after earning a maiden call-up."
        },
        {
            id: "52",
            tittle: "Dhanush, Aishwaryaa announce separation, Bachchan Pandey to release in March, and more such news",
            image: "/images/bollywood/Dhanush.jpg",
            date: "January 18, 2022",
            author: "By FP Staff",
            category: "Bollywood",
            description: "Dhanush, Aishwaryaa announce separation after '18 years of togetherness': 'We stand at a place where our paths separate'",
            article: `South star Dhanush on Monday announced separation from his filmmaker wife Aishwaryaa Rajinikanth after 18 years of marriage. Dhanush and Aishwarya, daughter of megastar Rajinikanth, tied the knot in 2004 and are parents to two sons, Yatra and Linga, who were born in 2006 and 2010, respectively. Dhanush, 38, and Aishwaryaa, 40, shared a note announcing their separation on their respective social media accounts. "Eighteen years of togetherness as friends, couple, as parents and well wishers to each other. The journey has been of growth, understanding, adjusting and adapting. Today we stand at a place where our paths separate. Aishwaryaa and I have decided to part ways as a couple and take time to understand us as individuals for the better. "Please do Respect our decision and give us the needed privacy to deal with this. Om Namashivaaya! Spread love, D," Dhanush shared in a note on Twitter. Aishwaryaa shared the same note on Instagram and captioned it: "No caption needed…only your understanding n your love necessary!" Dhanush and Aishwarya, daughter of actor Rajinikanth, tied the knot in 2004. They are parents to two sons, Yatra and Linga, who were born in 2006 and 2010, respectively. Aishwaryaa has directed films like the Tamil romantic thriller "3" and black comedy "Vai Raja Vai". Dhanush, also a producer, was recently seen in the Aanand L Rai directed Hindi romantic drama Atrangi Re and has a long career in the Tamil film industry. `
        },
        {
            id: "18",
            tittle: "A massive volcanic eruption and tsunami hit Tonga and the Pacific.",
            image: "/images/world/volcano.jpg",
            date: "January 17, 2022",
            author: "By Helen Regan, CNN",
            category: "World",
            description: "An underwater volcano near Tonga has erupted for the third time in four days, potentially threatening the ability of surveillance flights to assess the damage to the Pacific island nation following Saturday's massive eruption and tsunami.",
            article: "Australia's meteorological service said a 'large eruption' took place at the Hunga Tonga-Hunga Ha'apai volcano on Monday, but no tsunami warnings have been issued. Saturday's eruption was likely the biggest recorded anywhere on the planet in more than 30 years, according to experts. Dramatic images from space captured the eruption in real time, as a huge plume of ash, gas and steam was spewed up to 20 kilometers (12.4 miles) into the atmosphere -- and tsunami waves were sent crashing across the Pacific. On social media, footage showed people fleeing as waves inundated Tonga's capital, Nuku'alofa, and the afternoon sky turned pitch black due to the heavy ash cloud. Tsunami waves were also recorded thousands of miles away along the United States West Coast, in Peru, New Zealand and Japan. In Peru, at least two people died after being swept up by high waves. No mass casualties have yet been reported, but aid organizations are concerned about contaminated air and access to clean water for people in Tonga's outlying islands. With communications down, Australia and New Zealand sent flights to survey the damage. Tonga is a Polynesian country of more than 170 South Pacific islands and home to about 100,000 people. It's a remote archipelago that lies about 800 kilometers (500 miles) east of Fiji and 2,380 kilometers (1,500 miles) from New Zealand. The Hunga-Tonga-Hunga-Ha'apai volcano, about 30 kilometers (20 miles) southeast of Tonga's Fonuafo'ou island, sits underwater between two small islands at about 2,000 meters (6,500 feet) high from the sea floor, with about 100 meters (328 feet) visible above sea level."

        },
        {
            id: "12",
            tittle: "Your Monday Briefing: Djokovic Leaves Australia",
            image: "/images/world/dj.jpg",
            date: "January 16, 2022",
            author: "By Amelia Nierenberg",
            category: "World",
            description: "Good morning. We’re covering Djokovic’s forced departure from Australia, ongoing tensions between Russia and the West and the Cambodian government’s tightening of internet surveillance.",
            article: "<h3>Djokovic loses his Australia case</h3> <br/> The unvaccinated Serbian tennis superstar left Australia on Sunday night after a court ruled against his bid to stay, costing him a chance at a 10th Australian Open title and a record-breaking 21st Grand Slam title. <br/>In a unanimous decision, the court ruled that Australia’s immigration minister was within his rights to cancel Novak Djokovic’s visa for a second time on the basis that the player could pose a risk to public health and order. (Here’s an explainer on the case.)<br/>Djokovic could be barred from entering Australia for the next three years under its laws regarding visa cancellations. He could face further international travel challenges if he does not get vaccinated.<br/>Tennis: The Australian Open will begin on Monday with a vacuum at the top — Djokovic has won its last three men’s singles championships.<br/>Serbia: President Aleksandar Vucic blasted Australia’s legal process as “Orwellian” and said Djokovic would be welcomed home.<br/>Australia: Some legal experts called for changes to the immigration minister’s “godlike” powers. Djokovic lost to public outcry and “a government determined to make him a symbol of unvaccinated celebrity entitlement,” our Sydney bureau chief writes in an analysis."

        },
        {
            id: "32",
            tittle: "Punjab Assembly Elections: AAP to declare chief ministerial candidate tomorrow",
            image: "/images/politics/kejriwal.webp",
            date: "January 17, 2022",
            author: "By Press Trust of India",
            category: "Politics",
            description: "Delhi chief minister and AAP national convenor Arvind Kejriwal on Monday said that his party's chief ministerial candidate for Punjab assembly polls will be announced on Tuesday.",
            article: "New Delhi: Delhi chief minister and AAP national convenor Arvind Kejriwal on Monday said that his party's chief ministerial candidate for Punjab assembly polls will be announced on Tuesday. He had on 13 January asked the people of Punjab to suggest names of their preferred chief ministerial candidates and launched a mobile number for the purpose. Kejriwal then said that though he had wanted party MP Bhagwant Mann's name to be declared as the chief ministerial candidate, the latter insisted that the people of Punjab should make this decision.'The name of the party's chief ministerial candidate for Punjab assembly elections will be announced tomorrow at 12 noon, Kejriwal told reporters on the sidelines of an event here. The AAP national convenor had in June 2021 said that the party's chief ministerial face for the 2022 Punjab assembly polls would be from the Sikh community and that the entire Punjab would be proud of its choice. Voting for Punjab's 117 assembly seats is scheduled for 14 February and the counting of votes will take place on 10 March."
        },
        {
            id: "11",
            tittle: "Russia Issues Subtle Threats More Far-Reaching Than a Ukraine Invasion",
            image: "/images/world/russia.jpg",
            date: "January 16, 2022",
            author: "By Anton Troianovski and David E. Sanger",
            category: "World",
            description: "If the West fails to meet its security demands, Moscow could take measures like placing nuclear missiles close to the U.S. coastline, Russian officials have hinted..",
            article: "VIENNA — No one expected much progress from this past week’s diplomatic marathon to defuse the security crisis Russia has ignited in Eastern Europe by surrounding Ukraine on three sides with 100,000 troops and then, by the White House’s accounting, sending in saboteurs to create a pretext for invasion.<br/> But as the Biden administration and NATO conduct tabletop simulations about how the next few months could unfold, they are increasingly wary of another set of options for President Vladimir V. Putin, steps that are more far-reaching than simply rolling his troops and armor over Ukraine’s border. <br/> Mr. Putin wants to extend Russia’s sphere of influence to Eastern Europe and secure written commitments that NATO will never again enlarge. If he is frustrated in reaching that goal, some of his aides suggested on the sidelines of the negotiations last week, then he would pursue Russia’s security interests with results that would be felt acutely in Europe and the United States. <br/>There were hints, never quite spelled out, that nuclear weapons could be shifted to places — perhaps not far from the United States coastline — that would reduce warning times after a launch to as little as five minutes, potentially igniting a confrontation with echoes of the 1962 Cuban Missile Crisis.<br/>“A hypothetical Russian invasion of Ukraine would not undermine the security of the United States,” said Dmitry Suslov, an analyst in Moscow who gave a closed-door presentation on the standoff to Russian lawmakers last month. “The overall logic of Russian actions is that it is the U.S. and NATO that must pay a high price.”<br/> And as Ukrainians were reminded anew on Friday, as the websites of the country’s ministries were defaced in a somewhat amateurish attack, Russia’s army of hackers can wreak havoc in Ukraine, but also in power grids from Munich to Michigan.<br/>It could all be bluster, part of a Kremlin campaign of intimidation, and a way of reminding President Biden that while he wants to focus American attention on competing and dealing with China, Mr. Putin is still capable of causing enormous disruption."

        },
        {
            id: "26",
            tittle: "India's richest doubled their wealth to $720 bn during Covid crisis: Oxfam",
            image: "/images/business/richest.webp",
            date: "January 17, 2022",
            author: "By Archana Chaudhary ",
            category: "Business",
            description: "India added 40 billionaires to 142 last year, when a second wave of Covid overwhelmed its health infrastructure and pushed crematoriums and burial grounds to breaking point, says the report",
            article: "India’s richest have more than doubled their fortunes during the Covid-19 crisis that’s ravaged the country and worsened poverty, and the government should revisit its policies to redistribute wealth, according to the global Oxfam Davos report of 2022. The nation added 40 billionaires to 142 last year, when a second wave of infections overwhelmed its health infrastructure and pushed crematoriums and burial grounds to breaking point. They have almost $720 billion in combined fortune, more than the poorest 40% of the population, the group said in a report on rising inequality published Monday. Wealth has surged globally during the pandemic as the value of everything from stock prices to crypto and commodities has jumped. The world’s 500 richest people added more than $1 trillion to their net worths last year, according to the Bloomberg Billionaires Index. India, where urban unemployment climbed as high as 15% last May and food insecurity worsened, now counts more billionaires than France, Sweden and Switzerland combined, Oxfam said. State policies including the abolition of a wealth tax in 2016, steep cuts in corporate levies and an increase in indirect taxation are among the factors that helped make the rich richer, while the national minimum wage has remained at Rs 178 ($2.4) a day since 2020, the India supplement of the global report said. Reduced federal funding to local administrations amid growing privatisations in the health and education sectors have further boosted inequalities. The nation is home to a quarter of the world’s undernourished people, Oxfam said, citing the World Food Programme."

        }
    ])
    const [top] = useState([
        {
            id: "14",
            tittle: "North Korea conducts fourth missile test this month",
            image: "/images/world/Nkorea.jpg",
            date: "January 16,2022",
            author: "By Dennis Romero",
            category: "World",
            description: "North Korea test fired as many as two rounds of short-range ballistic missiles Monday, South Korean officials said.",
            article: "The missiles were fired east from the Soonan airport area of Pyongyang, the capital, according to South Korea’s Joint Chiefs of Staff.  The launch was also reported by officials in Japan. Defense Minister Nobuo Kishi said at an impromptu briefing the missiles were estimated to have flown roughly 300 kilometers, or about 186 miles, off North Korea’s eastern coast. In a statement, the U.S. Indo-Pacific Command said that while the launch did not pose an immediate threat to U.S. personnel or territory, or to its allies, it highlighted the 'destabilizing impact' of North Korea’s weapons programs. The launch follows tests on Jan. 5, 11 and 14.  Experts believe the activity is reprisal for new sanctions the Biden administration imposed last week over the North’s continued test launches. Earlier in the week, North Korean leader Kim Jong Un called for strengthening the country’s strategic military forces after observing the test of what state media said was a hypersonic missile. It was the first time since March 2020 that he had officially attended a missile test."
        },
        {
            id: "22",
            tittle: "Walmart is quietly preparing to enter the metaverse",
            image: "/images/business/walmart.jpg",
            date: "January 16, 2022",
            author: "By Lauren Thomas",
            category: "Business",
            description: "Walmart appears to be venturing into the metaverse with plans to create its own cryptocurrency and collection of NFTs. The big-box retailer filed several new trademarks late last month that indicate its intent to make and sell virtual goods.",
            article: "Walmart appears to be venturing into the metaverse with plans to create its own cryptocurrency and collection of nonfungible tokens, or NFTs. The big-box retailer filed several new trademarks late last month that indicate its intent to make and sell virtual goods, including electronics, home decorations, toys, sporting goods and personal care products. In a separate filing, the company said it would offer users a virtual currency, as well as NFTs. According to the U.S. Patent and Trademark Office, Walmart filed the applications on Dec. 30. In total, seven separate applications have been submitted. In a statement, Walmart said it is 'continuously exploring how emerging technologies may shape future shopping experiences.' It declined to comment on the specific trademark filings. 'We are testing new ideas all the time,' the company said. 'Some ideas become products or services that make it to customers. And some we test, iterate, and learn from.' 'They’re super intense,' said Josh Gerben, a trademark attorney. 'There’s a lot of language in these, which shows that there’s a lot of planning going on behind the scenes about how they’re going to address cryptocurrency, how they’re going to address the metaverse and the virtual world that appears to be coming or that’s already here.' Gerben said that ever since Facebook announced it was changing its company name to Meta, signaling its ambitions beyond social media, businesses have been rushing to figure out how they will fit into a virtual world. Launching NFTs allows for businesses to tokenize physical products and services to help reduce online transaction costs, it said. And for luxury brands like Gucci and Louis Vuitton, NFTs can serve as a form of authentication for tangible and more expensive goods, CB Insights noted. Gerben said that as more consumers familiarize themselves with the metaverse and items stored on the blockchain, more retailers will want to create their own ecosystem around it. According to Frank Chaparro, director at crypto information services firm The Block, many retailers are still reeling from being late to e-commerce, so they don’t want to miss out on any opportunities in the metaverse."

        },
        {
            id: "36",
            tittle: "Twitter calls Australian minister Mark McGowan sick for getting speech",
            image: "/images/politics/twitter.webp",
            date: "January 13, 2022",
            author: "By AKSHATA KAMATH",
            category: "Politics",
            description: "Western Australia Premier Mark McGowan shared a Covid message, which he had an indigenous elder translate from English to Aboriginal-English. Twitter is furious with the racist, sick viral video.",
            article: "A video of Mark McGowan is going viral where Mark talks about his Covid message and how Coronavirus is a deadly virus and can kill and harm people. His 2-minute-long video also has line-by-line translations by an indigenous elder translator, who is literally interpreting each line in 'Aboriginal English', or the language used by the specific tribe that it is addressed to.  This fourth video out of a series of videos, is particularly being seen as offensive and insulting because it shows Aboriginal people as equivalent to being children who need spoon-feeding of the 'Australian English' language. "

        },
        {
            id: "74",
            tittle: "Science Fiction Revisited: Ramjet Propulsion for Interstellar Space Travel",
            image: "/images/technology/Ramjet.jpg",
            date: "January 09, 2022",
            author: "By VIENNA UNIVERSITY OF TECHNOLOGY",
            category: "Technology",
            description: "Since the 1960s, there has been speculation about a hypothetical propulsion method for interstellar space travel. Calculations at TU Wien (Vienna) show: it will remain science fiction.",
            article: `In science fiction stories about contact with extraterrestrial civilizations, there is a problem: What kind of propulsion system could make it possible to bridge the enormous distances between the stars? It cannot be done with ordinary rockets like those used to travel to the moon or Mars. Many more or less speculative ideas about this have been put forward — one of them is the “Bussard collector” or “Ramjet propulsion.” It involves capturing protons in interstellar space and then using them for a nuclear fusion reactor. Peter Schattschneider, physicist and science fiction author, has now analyzed this concept in more detail together with his colleague Albert Jackson from the USA. The result is unfortunately disappointing for fans of interstellar travel: it cannot work the way Robert Bussard, the inventor of this propulsion system, thought it up in 1960. The analysis has now been published in the scientific journal Acta Astronautica. “The idea is definitely worth investigating,” says Prof. Peter Schattschneider. “In interstellar space, there is highly diluted gas, mainly hydrogen — about one atom per cubic centimeter. If you were to collect the hydrogen in front of the spacecraft, like in a magnetic funnel, with the help of huge magnetic fields, you could use it to run a fusion reactor and accelerate the spacecraft.” In 1960, Robert Bussard published a scientific paper about this. Nine years later, such a magnetic field was described theoretically for the first time. “Since then, the idea has not only excited science fiction fans, but has also generated a great deal of interest in the technical and scientific astronautics community,” says Peter Schattschneider. Peter Schattschneider and Albert Jackson now took a closer look at the equations, half a century later. Software developed at TU Wien as part of a research project for calculating electromagnetic fields in electron microscopy unexpectedly turned out to be extremely helpful: the physicists were able to use it to show that the basic principle of magnetic particle trapping actually works. Particles can be collected in the proposed magnetic field and guided into a fusion reactor. In this way, considerable acceleration can be achieved — up to relativistic speeds. So after half a century of hope for interstellar travel in the distant future, it is now apparent that the ramjet drive, while an interesting idea, will remain merely part of science fiction. If we want to visit our cosmic neighbors one day, we will have to come up with something else.`
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
        }
    ])
    const [first] = useState({
        id: "14",
        tittle: "North Korea conducts fourth missile test this month",
        image: "/images/world/Nkorea.jpg",
        date: "January 16,2022",
        author: "By Dennis Romero",
        category: "World",
        description: "North Korea test fired as many as two rounds of short-range ballistic missiles Monday, South Korean officials said.",
        article: "The missiles were fired east from the Soonan airport area of Pyongyang, the capital, according to South Korea’s Joint Chiefs of Staff.  The launch was also reported by officials in Japan. Defense Minister Nobuo Kishi said at an impromptu briefing the missiles were estimated to have flown roughly 300 kilometers, or about 186 miles, off North Korea’s eastern coast. In a statement, the U.S. Indo-Pacific Command said that while the launch did not pose an immediate threat to U.S. personnel or territory, or to its allies, it highlighted the 'destabilizing impact' of North Korea’s weapons programs. The launch follows tests on Jan. 5, 11 and 14.  Experts believe the activity is reprisal for new sanctions the Biden administration imposed last week over the North’s continued test launches. Earlier in the week, North Korean leader Kim Jong Un called for strengthening the country’s strategic military forces after observing the test of what state media said was a hypersonic missile. It was the first time since March 2020 that he had officially attended a missile test."
    })

    return (
        <BlogContext.Provider value={{ homePage, latest, latestArticle, top, first }} >
            {props.children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;