import { createContext,useState } from "react";

export const PoliticsContext = createContext()

const PoliticsContextProvider =(props)=>{
        const [politics] =useState([{
            id:"31",
            tittle:"As India gears up for a series of polls this year, time is ripe to deliberate on ‘One Nation, One Election’",
            image:"/images/politics/onenation.jpg",
            date:"January 03, 2022",
            author:"By: Gopal Goswami",
            category:"Politics",
            description:"This year has a series of Assembly elections lined up, with several political analysts calling it “semi-finals” before the Lok Sabha polls in 2024. The Assembly elections will be held in Uttar Pradesh, Uttarakhand, Punjab, Gujarat, Goa, Himachal Pradesh and Manipur.",
            article:"The year-long farmers agitation, thankfully is over. But as we look back, we realise that the protests were primarily political in nature with the objective to push the Bharatiya Janata Party (BJP) governments at the Centre and states on the back foot, especially in the coming elections. In this backdrop, I see a real need for ‘One Nation One Election’. We cannot afford to subject the entire country to such disruptive agitations for electoral benefits every now and then. After all, every year, there are elections in one state or the other. The present government at the Centre recognises this and professes a desire to have simultaneous elections throughout the country. That is why Prime Minister Narendra Modi frequently emphasises the importance of this requirement. In November 2020, he campaigned for 'One Nation, One Election,' claiming that it is necessary for India because polls every few months have an influence on development efforts. The notion of 'One Nation, One Election' or 'Simultaneous Elections' indicates that elections to all three tiers of constitutional institutions (Centre, state, and local body) take place at the same time. This basically implies that voters vote on a single day to elect members to all levels of government. In the post-Independence period, the first general elections to the Lok Sabha and state Legislative Assemblies were conducted concurrently in 1951-52. This method was used in three consecutive general elections in 1957, 1962 and 1967. But the cycle was interrupted because of the early dissolution of several legislative Assemblies in 1968 and 1969, and things never returned to ‘normalcy’ thereafter. The ruling BJP, which has revived the need for ‘One Nation, One Election’, has lately begun discussions and webinars about having elections for local/urban councils, Assemblies, and the Lok Sabha at the same time. According to the party, having elections is not the primary goal of a society, but rather effective administration. The BJP has also suggested constitutional amendments to establish fixed terms for the Lok Sabha and legislative Assemblies.It is not unreasonable to say that the Indian political system is perpetually in election mode throughout the year. Except for a few years during the Lok Sabhas usual five-year term, the country has elections in 5-7 state Assemblies every year. According to one research, during the March-May 2014 elections for the 16th Lok Sabha, Andhra Pradesh (undivided Andhra), Arunachal Pradesh, Sikkim and Odisha also went to polls."
        },
        {
            id:"36",
            tittle:"Twitter calls Australian minister Mark McGowan sick for getting speech",
            image:"/images/politics/twitter.webp",
            date:"January 13, 2022",
            author:"By AKSHATA KAMATH",
            category:"Politics",
            description:"Western Australia Premier Mark McGowan shared a Covid message, which he had an indigenous elder translate from English to Aboriginal-English. Twitter is furious with the racist, sick viral video.",
            article:"A video of Mark McGowan is going viral where Mark talks about his Covid message and how Coronavirus is a deadly virus and can kill and harm people. His 2-minute-long video also has line-by-line translations by an indigenous elder translator, who is literally interpreting each line in 'Aboriginal English', or the language used by the specific tribe that it is addressed to.  This fourth video out of a series of videos, is particularly being seen as offensive and insulting because it shows Aboriginal people as equivalent to being children who need spoon-feeding of the 'Australian English' language. "
        },
        {   
            id:"32",
            tittle:"Punjab Assembly Elections: AAP to declare chief ministerial candidate tomorrow",
            image:"/images/politics/kejriwal.webp",
            date:"January 17, 2022",
            author:"By Press Trust of India",
            category:"Politics",
            description:"Delhi chief minister and AAP national convenor Arvind Kejriwal on Monday said that his party's chief ministerial candidate for Punjab assembly polls will be announced on Tuesday.",
            article:"New Delhi: Delhi chief minister and AAP national convenor Arvind Kejriwal on Monday said that his party's chief ministerial candidate for Punjab assembly polls will be announced on Tuesday. He had on 13 January asked the people of Punjab to suggest names of their preferred chief ministerial candidates and launched a mobile number for the purpose. Kejriwal then said that though he had wanted party MP Bhagwant Mann's name to be declared as the chief ministerial candidate, the latter insisted that the people of Punjab should make this decision.'The name of the party's chief ministerial candidate for Punjab assembly elections will be announced tomorrow at 12 noon, Kejriwal told reporters on the sidelines of an event here. The AAP national convenor had in June 2021 said that the party's chief ministerial face for the 2022 Punjab assembly polls would be from the Sikh community and that the entire Punjab would be proud of its choice. Voting for Punjab's 117 assembly seats is scheduled for 14 February and the counting of votes will take place on 10 March."
        },
        {
            id:"33",
            tittle:"Punjab Assembly elections: Here's why EC decided to push polling date to 20 February",
            image:"/images/politics/17poll.webp",
            date:"January 17, 2022",
            author:"By FP Staff",
            category:"Politics",
            description:"The Election Commission's announcement came after Chief Minister Charanjit Singh Channi and others asked to delay the polls on account of Guru Ravidas Jayanti on 16 February",
            article:"After holding a meet this morning, the Election Commission has announced that the polling for Punjab Assembly elections will take place on 20 February instead of 14 February. According to the schedule, the EC will issue the notification for the polls on 25 January and the candidates can file their nomination till 1 February. The results will be declared on 10 March. On 14 January, Punjab chief minister Charanjit Singh Channi had written to Chief Election Commissioner Sushil Chandra, requesting him to postpone the Assembly polls by at least six days on account of Guru Ravidas Jayanti on 16 February. As of now, the Punjab Assembly election is slated to be held in a single phase on 14 February and the results will be out on 10 March. In his letter to the EC, Channi had written that devotees would be travelling to Varanasi in Uttar Pradesh for Guru Ravidas Jayanti and hence, the elections should be pushed back so as to enable them to cast their vote. It has been reported that around 20 lakh Scheduled Caste (SC) devotees are likely to visit Varanasi in Uttar Pradesh between 10-16 February. Incidentally, the Scheduled Castes community comprises 32 per cent of Punjab's population. 'In such a situation, many people from this community would not be able to cast their votes for the state assembly, which is otherwise their constitutional right,' Channi said in the letter. 'They have requested that the voting date may be extended in such a way that they are able to visit Banaras from 10 February to 16 February as also participate in the assembly elections.'"
        },
        {
            id:"37",
            tittle:"China mocks US over Huawei in supremely cringey parody video.",
            image:"/images/politics/china.webp",
            date:"January 06, 2022",
            author:"By AMRUTHA PAGAD",
            category:"Politics",
            description:"In a parody video, the Chinese state media poked fun at the US and the UK over their tech privacy and sanctions against Huawei. But we are not sure if the message made it home.",
            article:"China has become the new Russia to the world, especially the West. And China wants to poke some fun at the West too, in a more nuanced and modern way.  So, what’s better than a witty parody video... except, we are not yet sure what the punchline was. The Chinese state media Xinhua News put out a tweet and a YouTube video of a No Time to Die: James Bond spoof. It was titled 0.07: No Time to Die Laughing. The parody follows two MI6 spies, one of whom is James Pond or 0.07 and the other 0.06 or Black Window. These two spies are headed for a ‘rendezvous’ with an ‘M’ from the United States’ CIA at a castle. The spy, Black Window, updates James Pond on their mission, saying that the MI6 has made China their ‘top priority'. She then reads out from a dossier on what China has done to raise the alarm bells, and says, “Their National Security Agency is authorised to monitor all phone and internet use in 193 countries.” She feigns realisation on finding out that she’s accidentally reading a dossier on the US. It is supposed to be a jibe on the United States' tech privacy issues. Then comes the voice of M, the CIA spy, who tells James Pond not to use Huawei phones. To this, Pond asks how he knew that he was considering buying a Huawei phone. This is supposed to be mocking the CIA’s reputation for wire-tapping phones. M goes on to say that Huawei phones have become a backdoor for the Chinese government, to which Black Window replies, “There’s no shred of evidence.” This comment is a rip-off of Huawei’s statement when the allegations were made and its CFO Meng Wanzhou was held in Canada."
        },
        {
            id:"34",
            tittle:"Right Word | How RSS looks at electoral politics and what role it plays",
            image:"/images/politics/RSS.webp",
            date:"January 15, 2022",
            author:"By Arun Anand",
            category:"Politics",
            description:"With the announcement of Assembly polls in five states, there is lot of buzz about the role that the Rashtriya Swayamsevak Sangh (RSS) would play in ensuring victory for the Bharatiya Janata Party(BJP), especially in the state of Uttar Pradesh.",
            article:"Interestingly, whenever the elections are around — Assembly or Lok Sabha — the RSS is projected as an ‘X’ factor by a large section of media and political analysts. The common projection is that the RSS goes all out to work for the BJP and make it win polls and it is the RSS cadres and functionaries who lead from the front when it comes to electioneering. Are these assertions correct or have they emerged out of lack of understanding about the functioning and philosophy of the RSS? To understand the role played by the RSS in elections in India, one has to understand the RSS’ worldview about politics and the evolution of its relationship with Bharatiya Jana Sangh (BJS) till 1977 and then with its successor BJP from 1980 onwards. And for this we would have to go back around seven decades. The first major debate on how RSS should deal with politics began after the first ban on the organisation was lifted unconditionally in July 1949. The ban was wrongfully and mischievously imposed by the then Congress government led by Pandit Jawaharlal Nehru in February 1948. In wake of Mahatma Gandhi’s assassination, the Congress, which was becoming increasingly wary of the growing clout of the RSS because of its stellar role in saving Hindus and Sikhs during Partition, found an opportunity to crush the organisation by blaming it for Mahatma’s assassination and hence banning it. But not even a shred of evidence was found against the RSS and the ban had to be lifted by the Nehru government. Dwarika Prasad Mishra, the Home Minister of Central Provinces at that time, wrote in his autobiography, Living in An Era, “That Mahatma Gandhi’s assassination gave a handle to unscrupulous politicians to defame and, if possible, to pull down their rivals is difficult to deny.”."
        },
        {
            id:"35",
            tittle:"Election Commission extends ban on public rallies and roadshows in five poll bound states till 22 January",
            image:"/images/politics/election-commission.webp",
            date:"January 15, 2022",
            author:"By Press Trust of India",
            category:"Politics",
            description:"EC granted a relaxation for the political parties to the extent that indoor meetings of maximum 300 persons or 50 percent of the capacity of the hall, or the prescribed limit set by state disaster management authorities",
            article:"New Delhi: Amid a surge in Covid-19 cases, the Election Commission on Saturday extended its ban on physical rallies and roadshows until 22 January, 2022, in the five poll-bound states. The poll panel, however, granted a relaxation for the political parties to the extent that indoor meetings of maximum 300 persons or 50 percent of the capacity of the hall, or the prescribed limit set by state disaster management authorities, an official statement said. The Commission also directed political parties to adhere to the provisions of the model code of conduct and broader guidelines on COVID-19. The poll panel directed state and district administrations to ensure compliance of all instructions related to the poll code and to the pandemic control measures. While announcing the poll schedule for Uttar Pradesh, Uttarakhand, Manipur, Goa and Punjab on 8 January, 2022, the EC had taken an unprecedented step of banning public rallies, roadshows and similar physical campaigning events till 15 January, 2022. The ban has now been extended by a further one week."
        },
        {
            id:"38",
            tittle:"What’s Behind Russia’s Latest Demands",
            image:"/images/politics/Putin.jpg",
            date:"January 05, 2022",
            author:"By Amy Mackinnon",
            category:"Politics",
            description:"With an estimated 100,000 Russian troops positioned uncomfortably close to Ukraine’s border, senior U.S and European officials will meet with their Russian counterparts in a series of meetings next week, attempting to stave off another invasion of Ukraine. ",
            article:"In draft proposals handed to U.S. officials and posted online late last year, the Kremlin demanded a sweeping series of security guarantees from Europe and NATO: no more eastward expansion of the alliance and guarantees not to deploy troops or weapons to countries that joined the bloc after 1997. The Russian demands also called for mutual restrictions on the deployment of short- and medium-range missiles and greater information sharing on military exercises, among other things. On the face of it, not much is new here. Russia has long chafed against Ukraine’s deepening relationship with the West and NATO’s expansion into what Moscow sees as its sphere of influence in Eastern Europe. What has changed is the sense of urgency felt in the Kremlin—and the lengths Moscow is willing to go to have its demands met. The question is, why now? Experts point to a variety of factors, some dating back decades, others far more recent, as converging to convince the Kremlin that now is the time to take more forceful action to resolve its concerns about the balance of power in Europe and Ukraine’s increasing cooperation with the West. The long roots of the current crisis date back to the aftermath of the collapse of the Soviet Union and the accession of several former Eastern Bloc countries to NATO. In a speech in late December, Russian President Vladimir Putin accused the West of making false promises about its intentions to expand east. “We were fooled by five waves of NATO’s eastward expansion. We’re not threatening anyone—they came to us,” he said during his annual year-end press conference. (Russia’s ambassador to the United States made a similar argument in a recent piece for Foreign Policy.)The reality of what was said regarding NATO expansion at the end of the war is still hotly contested by historians and officials who were involved in talks at the time, but no formal guarantees were ever put down in writing, and in the decades since the collapse of the Soviet Union, more than a dozen countries from the former Eastern Bloc, many still fearing Moscow’s long shadow, have been admitted to the alliance. Russia, still reeling from the Soviet collapse, had little power to alter the course of events, and the West took inaction as acceptance, Oliker said. "
        }
    ])

    const [top]= useState([
        {
            id:"36",
            tittle:"Twitter calls Australian minister Mark McGowan sick for getting speech",
            image:"/images/politics/twitter.webp",
            date:"January 13, 2022",
            author:"By AKSHATA KAMATH",
            category:"Politics",
            description:"Western Australia Premier Mark McGowan shared a Covid message, which he had an indigenous elder translate from English to Aboriginal-English. Twitter is furious with the racist, sick viral video.",
            article:"A video of Mark McGowan is going viral where Mark talks about his Covid message and how Coronavirus is a deadly virus and can kill and harm people. His 2-minute-long video also has line-by-line translations by an indigenous elder translator, who is literally interpreting each line in 'Aboriginal English', or the language used by the specific tribe that it is addressed to.  This fourth video out of a series of videos, is particularly being seen as offensive and insulting because it shows Aboriginal people as equivalent to being children who need spoon-feeding of the 'Australian English' language. "
        },
        {
            id:"31",
            tittle:"As India gears up for a series of polls this year, time is ripe to deliberate on ‘One Nation, One Election’",
            image:"/images/politics/onenation.jpg",
            date:"January 03, 2022",
            author:"By: Gopal Goswami",
            category:"Politics",
            description:"This year has a series of Assembly elections lined up, with several political analysts calling it “semi-finals” before the Lok Sabha polls in 2024. The Assembly elections will be held in Uttar Pradesh, Uttarakhand, Punjab, Gujarat, Goa, Himachal Pradesh and Manipur.",
            article:"The year-long farmers agitation, thankfully is over. But as we look back, we realise that the protests were primarily political in nature with the objective to push the Bharatiya Janata Party (BJP) governments at the Centre and states on the back foot, especially in the coming elections. In this backdrop, I see a real need for ‘One Nation One Election’. We cannot afford to subject the entire country to such disruptive agitations for electoral benefits every now and then. After all, every year, there are elections in one state or the other. The present government at the Centre recognises this and professes a desire to have simultaneous elections throughout the country. That is why Prime Minister Narendra Modi frequently emphasises the importance of this requirement. In November 2020, he campaigned for 'One Nation, One Election,' claiming that it is necessary for India because polls every few months have an influence on development efforts. The notion of 'One Nation, One Election' or 'Simultaneous Elections' indicates that elections to all three tiers of constitutional institutions (Centre, state, and local body) take place at the same time. This basically implies that voters vote on a single day to elect members to all levels of government. In the post-Independence period, the first general elections to the Lok Sabha and state Legislative Assemblies were conducted concurrently in 1951-52. This method was used in three consecutive general elections in 1957, 1962 and 1967. But the cycle was interrupted because of the early dissolution of several legislative Assemblies in 1968 and 1969, and things never returned to ‘normalcy’ thereafter. The ruling BJP, which has revived the need for ‘One Nation, One Election’, has lately begun discussions and webinars about having elections for local/urban councils, Assemblies, and the Lok Sabha at the same time. According to the party, having elections is not the primary goal of a society, but rather effective administration. The BJP has also suggested constitutional amendments to establish fixed terms for the Lok Sabha and legislative Assemblies.It is not unreasonable to say that the Indian political system is perpetually in election mode throughout the year. Except for a few years during the Lok Sabhas usual five-year term, the country has elections in 5-7 state Assemblies every year. According to one research, during the March-May 2014 elections for the 16th Lok Sabha, Andhra Pradesh (undivided Andhra), Arunachal Pradesh, Sikkim and Odisha also went to polls."
        },
        {
            id:"35",
            tittle:"Election Commission extends ban on public rallies and roadshows in five poll bound states till 22 January",
            image:"/images/politics/election-commission.webp",
            date:"January 15, 2022",
            author:"By Press Trust of India",
            category:"Politics",
            description:"EC granted a relaxation for the political parties to the extent that indoor meetings of maximum 300 persons or 50 percent of the capacity of the hall, or the prescribed limit set by state disaster management authorities",
            article:"New Delhi: Amid a surge in Covid-19 cases, the Election Commission on Saturday extended its ban on physical rallies and roadshows until 22 January, 2022, in the five poll-bound states. The poll panel, however, granted a relaxation for the political parties to the extent that indoor meetings of maximum 300 persons or 50 percent of the capacity of the hall, or the prescribed limit set by state disaster management authorities, an official statement said. The Commission also directed political parties to adhere to the provisions of the model code of conduct and broader guidelines on COVID-19. The poll panel directed state and district administrations to ensure compliance of all instructions related to the poll code and to the pandemic control measures. While announcing the poll schedule for Uttar Pradesh, Uttarakhand, Manipur, Goa and Punjab on 8 January, 2022, the EC had taken an unprecedented step of banning public rallies, roadshows and similar physical campaigning events till 15 January, 2022. The ban has now been extended by a further one week."
        },
        {
            id:"38",
            tittle:"What’s Behind Russia’s Latest Demands",
            image:"/images/politics/Putin.jpg",
            date:"January 05, 2022",
            author:"By Amy Mackinnon",
            category:"Politics",
            description:"With an estimated 100,000 Russian troops positioned uncomfortably close to Ukraine’s border, senior U.S and European officials will meet with their Russian counterparts in a series of meetings next week, attempting to stave off another invasion of Ukraine. ",
            article:"In draft proposals handed to U.S. officials and posted online late last year, the Kremlin demanded a sweeping series of security guarantees from Europe and NATO: no more eastward expansion of the alliance and guarantees not to deploy troops or weapons to countries that joined the bloc after 1997. The Russian demands also called for mutual restrictions on the deployment of short- and medium-range missiles and greater information sharing on military exercises, among other things. On the face of it, not much is new here. Russia has long chafed against Ukraine’s deepening relationship with the West and NATO’s expansion into what Moscow sees as its sphere of influence in Eastern Europe. What has changed is the sense of urgency felt in the Kremlin—and the lengths Moscow is willing to go to have its demands met. The question is, why now? Experts point to a variety of factors, some dating back decades, others far more recent, as converging to convince the Kremlin that now is the time to take more forceful action to resolve its concerns about the balance of power in Europe and Ukraine’s increasing cooperation with the West. The long roots of the current crisis date back to the aftermath of the collapse of the Soviet Union and the accession of several former Eastern Bloc countries to NATO. In a speech in late December, Russian President Vladimir Putin accused the West of making false promises about its intentions to expand east. “We were fooled by five waves of NATO’s eastward expansion. We’re not threatening anyone—they came to us,” he said during his annual year-end press conference. (Russia’s ambassador to the United States made a similar argument in a recent piece for Foreign Policy.)The reality of what was said regarding NATO expansion at the end of the war is still hotly contested by historians and officials who were involved in talks at the time, but no formal guarantees were ever put down in writing, and in the decades since the collapse of the Soviet Union, more than a dozen countries from the former Eastern Bloc, many still fearing Moscow’s long shadow, have been admitted to the alliance. Russia, still reeling from the Soviet collapse, had little power to alter the course of events, and the West took inaction as acceptance, Oliker said. "
        }
    ])
return(
    <PoliticsContext.Provider value={{politics, top}} >
        {props.children}
    </PoliticsContext.Provider>
)
}
export default PoliticsContextProvider;