import { createContext,useState } from "react";

export const WorldContext = createContext()

const WorldContextProvider =(props)=>{
        const [world] =useState([{
            id:"11",
            tittle:"Russia Issues Subtle Threats More Far-Reaching Than a Ukraine Invasion",
            image:"/images/world/russia.jpg",
            date:"January 16, 2022",
            author:"By Anton Troianovski and David E. Sanger",
            category:"World",
            description:"If the West fails to meet its security demands, Moscow could take measures like placing nuclear missiles close to the U.S. coastline, Russian officials have hinted..",
            article:"VIENNA — No one expected much progress from this past week’s diplomatic marathon to defuse the security crisis Russia has ignited in Eastern Europe by surrounding Ukraine on three sides with 100,000 troops and then, by the White House’s accounting, sending in saboteurs to create a pretext for invasion.<br/> But as the Biden administration and NATO conduct tabletop simulations about how the next few months could unfold, they are increasingly wary of another set of options for President Vladimir V. Putin, steps that are more far-reaching than simply rolling his troops and armor over Ukraine’s border. <br/> Mr. Putin wants to extend Russia’s sphere of influence to Eastern Europe and secure written commitments that NATO will never again enlarge. If he is frustrated in reaching that goal, some of his aides suggested on the sidelines of the negotiations last week, then he would pursue Russia’s security interests with results that would be felt acutely in Europe and the United States. <br/>There were hints, never quite spelled out, that nuclear weapons could be shifted to places — perhaps not far from the United States coastline — that would reduce warning times after a launch to as little as five minutes, potentially igniting a confrontation with echoes of the 1962 Cuban Missile Crisis.<br/>“A hypothetical Russian invasion of Ukraine would not undermine the security of the United States,” said Dmitry Suslov, an analyst in Moscow who gave a closed-door presentation on the standoff to Russian lawmakers last month. “The overall logic of Russian actions is that it is the U.S. and NATO that must pay a high price.”<br/> And as Ukrainians were reminded anew on Friday, as the websites of the country’s ministries were defaced in a somewhat amateurish attack, Russia’s army of hackers can wreak havoc in Ukraine, but also in power grids from Munich to Michigan.<br/>It could all be bluster, part of a Kremlin campaign of intimidation, and a way of reminding President Biden that while he wants to focus American attention on competing and dealing with China, Mr. Putin is still capable of causing enormous disruption."
        },
        {   
            id:"12",
            tittle:"Your Monday Briefing: Djokovic Leaves Australia",
            image:"/images/world/dj.jpg",
            date:"January 16, 2022",
            author:"By Amelia Nierenberg",
            category:"World",
            description:"Good morning. We’re covering Djokovic’s forced departure from Australia, ongoing tensions between Russia and the West and the Cambodian government’s tightening of internet surveillance.",
            article:"<h3>Djokovic loses his Australia case</h3> <br/> The unvaccinated Serbian tennis superstar left Australia on Sunday night after a court ruled against his bid to stay, costing him a chance at a 10th Australian Open title and a record-breaking 21st Grand Slam title. <br/>In a unanimous decision, the court ruled that Australia’s immigration minister was within his rights to cancel Novak Djokovic’s visa for a second time on the basis that the player could pose a risk to public health and order. (Here’s an explainer on the case.)<br/>Djokovic could be barred from entering Australia for the next three years under its laws regarding visa cancellations. He could face further international travel challenges if he does not get vaccinated.<br/>Tennis: The Australian Open will begin on Monday with a vacuum at the top — Djokovic has won its last three men’s singles championships.<br/>Serbia: President Aleksandar Vucic blasted Australia’s legal process as “Orwellian” and said Djokovic would be welcomed home.<br/>Australia: Some legal experts called for changes to the immigration minister’s “godlike” powers. Djokovic lost to public outcry and “a government determined to make him a symbol of unvaccinated celebrity entitlement,” our Sydney bureau chief writes in an analysis."
        },
        {
            id:"13",
            tittle:"Texas synagogue hostage-taker was British",
            image:"/images/world/texas.jpg",
            date:"january 17, 2022",
            author:"By BBC",
            category:"World",
            description:"A man who took four hostages at a synagogue in a suburb of Dallas, Texas, has been identified by the FBI as British citizen Malik Faisal Akram, 44.",
            article:'<h4>A man who took four hostages at a synagogue in a suburb of Dallas, Texas, has been identified by the FBI as British citizen Malik Faisal Akram, 44.</h4> <br/>The man who interrupted a morning service in Colleyville on Saturday was shot and killed after a 10-hour standoff with police. <br/> All of the hostages at the Congregation Beth Israel were freed unharmed. <br/>US President Joe Biden called the hostage-taking an "act of terror" and the UK condemned the attack.<br/>British Foreign Secretary Liz Truss described it as an "act of terrorism and anti-Semitism", adding: "We stand with US in defending the rights and freedoms of our citizens against those who spread hate."<br/>There is currently no indication that others were involved, the FBI in Dallas said. Police sources say that no explosive material was found on the attackers body.<br/>A brother of Malik Faisal Akram issued a statement apologising to the victims and saying he had been suffering from "mental health issues". Negotiators had spent hours talking to the assailant during the standoff.'
        },
        {
            id:"14",
            tittle:"North Korea conducts fourth missile test this month",
            image:"/images/world/Nkorea.jpg",
            date:"January 16,2022",
            author:"By Dennis Romero",
            category:"World",
            description:"North Korea test fired as many as two rounds of short-range ballistic missiles Monday, South Korean officials said.",
            article:"The missiles were fired east from the Soonan airport area of Pyongyang, the capital, according to South Korea’s Joint Chiefs of Staff.  The launch was also reported by officials in Japan. Defense Minister Nobuo Kishi said at an impromptu briefing the missiles were estimated to have flown roughly 300 kilometers, or about 186 miles, off North Korea’s eastern coast. In a statement, the U.S. Indo-Pacific Command said that while the launch did not pose an immediate threat to U.S. personnel or territory, or to its allies, it highlighted the 'destabilizing impact' of North Korea’s weapons programs. The launch follows tests on Jan. 5, 11 and 14.  Experts believe the activity is reprisal for new sanctions the Biden administration imposed last week over the North’s continued test launches. Earlier in the week, North Korean leader Kim Jong Un called for strengthening the country’s strategic military forces after observing the test of what state media said was a hypersonic missile. It was the first time since March 2020 that he had officially attended a missile test."
        },
        {
            id:"15",
            tittle:"Ukraine hit by cyberattack, Russia moves more troops after talks hit 'dead end'",
            image:"/images/world/ukraine.jpg",
            date:"January 14, 2022",
            author:"By Reuters, Ken Dilanian and Dan De Luce",
            category:"World",
            description:"Ukraine was hit by a massive cyberattack on Friday warning its citizens to “expect the worst,” and Russia, which has massed more than 100,000 troops on its neighbor’s frontier, released television pictures of more forces deploying in a drill.",
            article:"The developments came after no breakthrough was reached at meetings between Russia and Western states, which fear Moscow could launch a new attack on the country it invaded in 2014. 'The drumbeat of war is sounding loud,' said a senior U.S. diplomat.Russia denies plans to attack Ukraine but says it could take unspecified action unless demands are met, including a promise by the NATO alliance never to admit Kyiv. Ukrainian authorities were investigating the huge cyberattack Friday, which hit government bodies including the ministry of foreign affairs, cabinet of ministers, and security and defense council. 'Ukrainian! All your personal data was uploaded to the public network. All data on the computer is destroyed, it is impossible to restore it,' said a message visible on hacked government websites, written in Ukrainian, Russian and Polish.'All information about you has become public, be afraid and expect the worst. This is for your past, present and future.' Ukraine’s foreign ministry spokesperson told Reuters it was too early to say who could be behind the attack but said Russia had been behind similar strikes in the past."
        },
        {
            id:"16",
            tittle:"Omicron on track to infect more than half of Europe, WHO says",
            image:"/images/world/omicron.jpg",
            date:"January 11, 2022",
            author:"By Reuters",
            category:"World",
            description:"The omicron variant of Covid-19 is on track to infect more than half of Europeans, but it should not yet be seen as a flu-like endemic illness, the World Health Organization (WHO) said on Tuesday.",
            article:'Europe saw more than 7 million newly-reported cases in the first week of 2022, more than doubling over a two-week period, WHO’s Europe director Hans Kluge told a news briefing. “At this rate, the Institute for Health Metrics and Evaluation forecasts that more than 50 percent of the population in the region will be infected with omicron in the next 6-8 weeks,” Kluge said, referring to a research centre at the University of Washington. Fifty out of 53 countries in Europe and central Asia have logged cases of the more infectious variant, Kluge said. On Monday, Spain’s Prime Minister Pedro Sanchez said it may be time to change how it tracks Covid-19’s evolution to instead use a method similar to flu, because its lethality has fallen. That would imply treating the virus as an endemic illness, rather than a pandemic, without recording every case and without testing all people presenting symptoms. But that is “a way off," WHO’s senior emergency officer for Europe, Catherine Smallwood, said at the briefing, adding that endemicity requires a stable and predictable transmission. “We still have a huge amount of uncertainty and a virus that is evolving quite quickly, imposing new challenges. We are certainly not at the point where we are able to call it endemic,” Smallwood said. “It may become endemic in due course, but pinning that down to 2022 is a little bit difficult at this stage.” '
        },
        {
            id:"17",
            tittle:"U.S. announces fresh $308 million in humanitarian aid for struggling Afghans",
            image:"/images/world/afghan.jpg",
            date:"January 12, 2022",
            author:"By Saphora Smith",
            category:"World",
            description:"The United States announced Tuesday that it was giving more than $308 million in humanitarian aid to the Afghan people in an effort to support Afghans facing economic collapse under the new Taliban government.",
            article:"The White House said the administration will also send one million additional Covid-19 vaccine doses to the country, which is grappling not just with the global pandemic but with widespread hunger in the wake of the militant group's takeover and the U.S. exit. The United Nations and aid groups have repeatedly warned of a pending humanitarian catastrophe in the country of 38 million people. On Tuesday they appealed for a record $4.4 billion in aid as an 'essential stop gap' to ease the suffering. Washington and its Western allies are attempting to help the Afghan people while bypassing their Taliban rulers. Countries that have refused to recognize the Taliban government have suspended foreign aid on which the state relied and frozen billions of dollars of Afghan assets abroad, mostly in the United States. The new assistance will flow through independent humanitarian organizations and will help provide aid such as essential health care, emergency food aid, water and sanitation in response to the growing humanitarian needs of the population, National Security Council spokesperson Emily Horne said in a statement about the aid contribution. The new commitment is on top of some $474 million the U.S. has already contributed to Afghanistan and Afghan refugees in the region since October 2021 and the additional Covid vaccine doses brings the total contributed to Afghans to 4.3 million, Horne said. "
        },
        {
            id:"18",
            tittle:"A massive volcanic eruption and tsunami hit Tonga and the Pacific.",
            image:"/images/world/volcano.jpg",
            date:"January 17, 2022",
            author:"By Helen Regan, CNN",
            category:"World",
            description:"An underwater volcano near Tonga has erupted for the third time in four days, potentially threatening the ability of surveillance flights to assess the damage to the Pacific island nation following Saturday's massive eruption and tsunami.",
            article:"Australia's meteorological service said a 'large eruption' took place at the Hunga Tonga-Hunga Ha'apai volcano on Monday, but no tsunami warnings have been issued. Saturday's eruption was likely the biggest recorded anywhere on the planet in more than 30 years, according to experts. Dramatic images from space captured the eruption in real time, as a huge plume of ash, gas and steam was spewed up to 20 kilometers (12.4 miles) into the atmosphere -- and tsunami waves were sent crashing across the Pacific. On social media, footage showed people fleeing as waves inundated Tonga's capital, Nuku'alofa, and the afternoon sky turned pitch black due to the heavy ash cloud. Tsunami waves were also recorded thousands of miles away along the United States West Coast, in Peru, New Zealand and Japan. In Peru, at least two people died after being swept up by high waves. No mass casualties have yet been reported, but aid organizations are concerned about contaminated air and access to clean water for people in Tonga's outlying islands. With communications down, Australia and New Zealand sent flights to survey the damage. Tonga is a Polynesian country of more than 170 South Pacific islands and home to about 100,000 people. It's a remote archipelago that lies about 800 kilometers (500 miles) east of Fiji and 2,380 kilometers (1,500 miles) from New Zealand. The Hunga-Tonga-Hunga-Ha'apai volcano, about 30 kilometers (20 miles) southeast of Tonga's Fonuafo'ou island, sits underwater between two small islands at about 2,000 meters (6,500 feet) high from the sea floor, with about 100 meters (328 feet) visible above sea level."
        }
    ])

    const [top] = useState([
        {
            id:"14",
            tittle:"North Korea conducts fourth missile test this month",
            image:"/images/world/Nkorea.jpg",
            date:"January 16,2022",
            author:"By Dennis Romero",
            category:"World",
            description:"North Korea test fired as many as two rounds of short-range ballistic missiles Monday, South Korean officials said.",
            article:"The missiles were fired east from the Soonan airport area of Pyongyang, the capital, according to South Korea’s Joint Chiefs of Staff.  The launch was also reported by officials in Japan. Defense Minister Nobuo Kishi said at an impromptu briefing the missiles were estimated to have flown roughly 300 kilometers, or about 186 miles, off North Korea’s eastern coast. In a statement, the U.S. Indo-Pacific Command said that while the launch did not pose an immediate threat to U.S. personnel or territory, or to its allies, it highlighted the 'destabilizing impact' of North Korea’s weapons programs. The launch follows tests on Jan. 5, 11 and 14.  Experts believe the activity is reprisal for new sanctions the Biden administration imposed last week over the North’s continued test launches. Earlier in the week, North Korean leader Kim Jong Un called for strengthening the country’s strategic military forces after observing the test of what state media said was a hypersonic missile. It was the first time since March 2020 that he had officially attended a missile test."
        }, 
        {
            id:"17",
            tittle:"U.S. announces fresh $308 million in humanitarian aid for struggling Afghans",
            image:"/images/world/afghan.jpg",
            date:"January 12, 2022",
            author:"By Saphora Smith",
            category:"World",
            description:"The United States announced Tuesday that it was giving more than $308 million in humanitarian aid to the Afghan people in an effort to support Afghans facing economic collapse under the new Taliban government.",
            article:"The White House said the administration will also send one million additional Covid-19 vaccine doses to the country, which is grappling not just with the global pandemic but with widespread hunger in the wake of the militant group's takeover and the U.S. exit. The United Nations and aid groups have repeatedly warned of a pending humanitarian catastrophe in the country of 38 million people. On Tuesday they appealed for a record $4.4 billion in aid as an 'essential stop gap' to ease the suffering. Washington and its Western allies are attempting to help the Afghan people while bypassing their Taliban rulers. Countries that have refused to recognize the Taliban government have suspended foreign aid on which the state relied and frozen billions of dollars of Afghan assets abroad, mostly in the United States. The new assistance will flow through independent humanitarian organizations and will help provide aid such as essential health care, emergency food aid, water and sanitation in response to the growing humanitarian needs of the population, National Security Council spokesperson Emily Horne said in a statement about the aid contribution. The new commitment is on top of some $474 million the U.S. has already contributed to Afghanistan and Afghan refugees in the region since October 2021 and the additional Covid vaccine doses brings the total contributed to Afghans to 4.3 million, Horne said. "
        },
        {
            id:"15",
            tittle:"Ukraine hit by cyberattack, Russia moves more troops after talks hit 'dead end'",
            image:"/images/world/ukraine.jpg",
            date:"January 14, 2022",
            author:"By Reuters, Ken Dilanian and Dan De Luce",
            category:"World",
            description:"Ukraine was hit by a massive cyberattack on Friday warning its citizens to “expect the worst,” and Russia, which has massed more than 100,000 troops on its neighbor’s frontier, released television pictures of more forces deploying in a drill.",
            article:"The developments came after no breakthrough was reached at meetings between Russia and Western states, which fear Moscow could launch a new attack on the country it invaded in 2014. 'The drumbeat of war is sounding loud,' said a senior U.S. diplomat.Russia denies plans to attack Ukraine but says it could take unspecified action unless demands are met, including a promise by the NATO alliance never to admit Kyiv. Ukrainian authorities were investigating the huge cyberattack Friday, which hit government bodies including the ministry of foreign affairs, cabinet of ministers, and security and defense council. 'Ukrainian! All your personal data was uploaded to the public network. All data on the computer is destroyed, it is impossible to restore it,' said a message visible on hacked government websites, written in Ukrainian, Russian and Polish.'All information about you has become public, be afraid and expect the worst. This is for your past, present and future.' Ukraine’s foreign ministry spokesperson told Reuters it was too early to say who could be behind the attack but said Russia had been behind similar strikes in the past."
        },
        {   
            id:"12",
            tittle:"Your Monday Briefing: Djokovic Leaves Australia",
            image:"/images/world/dj.jpg",
            date:"January 16, 2022",
            author:"By Amelia Nierenberg",
            category:"World",
            description:"Good morning. We’re covering Djokovic’s forced departure from Australia, ongoing tensions between Russia and the West and the Cambodian government’s tightening of internet surveillance.",
            article:"<h3>Djokovic loses his Australia case</h3> <br/> The unvaccinated Serbian tennis superstar left Australia on Sunday night after a court ruled against his bid to stay, costing him a chance at a 10th Australian Open title and a record-breaking 21st Grand Slam title. <br/>In a unanimous decision, the court ruled that Australia’s immigration minister was within his rights to cancel Novak Djokovic’s visa for a second time on the basis that the player could pose a risk to public health and order. (Here’s an explainer on the case.)<br/>Djokovic could be barred from entering Australia for the next three years under its laws regarding visa cancellations. He could face further international travel challenges if he does not get vaccinated.<br/>Tennis: The Australian Open will begin on Monday with a vacuum at the top — Djokovic has won its last three men’s singles championships.<br/>Serbia: President Aleksandar Vucic blasted Australia’s legal process as “Orwellian” and said Djokovic would be welcomed home.<br/>Australia: Some legal experts called for changes to the immigration minister’s “godlike” powers. Djokovic lost to public outcry and “a government determined to make him a symbol of unvaccinated celebrity entitlement,” our Sydney bureau chief writes in an analysis."
        }
    ])
return(
    <WorldContext.Provider value={{world,top}} >
        {props.children}
    </WorldContext.Provider>
)
}
export default WorldContextProvider;