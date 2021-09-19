import React,{useState} from 'react'
import '../components/home.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import Ganesh from '../images/Ganesh.png';
const Home = () => {
    const [offset, setOffset] = useState()
    const handleScroll =()=>setOffset(window.pageYOffset)
    window.addEventListener('scroll',handleScroll)
    return (
        <div>
            <div className="zoom">
                <img src={img1} alt="" id="img1" 
                    style={{width:(100+ offset * 0.3) + '%'}}
                />
                <img src={img2} alt="" id="img2" 
                    style={{width:(100+ offset * 0.3) + '%'}}
                />
                <img src={Ganesh} alt="" id="Ganesh" 
                    style={{top:`-${10 + offset * 0.3 + '%'}`}}
                />
            </div>

            <div className="content">
                <h2>Vinayaki Ganesh Chaturthi Vrat Katha</h2>
                <p>
                Today is Vinayaka Chaturthi fast. Vinayaka Chaturthi Vrat falls on the Chaturthi Tithi of Shukla Paksha of every month. Today devotees are worshiping Lord Ganesha at home and they have also kept a fast to please Ganpati. It is believed that the person who keeps this fast with a sincere heart and worships Lord Ganesha by law, his
                Wishes are fulfilled and Vighnaharta removes all his troubles, troubles and obstacles. Devotees recite Vinayaka Chaturthi fasting story after worship. It is believed that just listening to this story gives manifold fruits of fasting. That's why today we have brought for you the legend of Vinayaka Chaturthi fasting...
                According to the legend, once Lord Shiva and Mother Parvati were sitting on the banks of river Narmada. There Mata Parvati asked Lord Shiva to play Chaupad to pass the time.
                Shiva agreed to play Chaupar, but the question arose in front of him, who would decide whether to win or lose in this game, Lord Shiva collected some straws and made an effigy of it and honored him and said to the effigy- ' Son, we want to play quadruped, but there is no one to decide our victory or defeat, that's why you tell us who lost and who won?
                After that the chaupad game of Lord Shiva and Mother Parvati started. This game was played 3 times and incidentally Mata Parvati won all three times. After the game was over, the boy was asked to decide whether to win or lose, then that boy told Mahadev as the winner.
                On hearing this, Mother Parvati became angry and in anger she cursed the child to be lame, lying in the mud. The child apologized to Mother Parvati and said that this has happened to me out of ignorance, I did not do this out of any malice.
                When the child asked for forgiveness, the mother said- 'Nag girls will come here to worship Ganesha, according to them, you fast on Ganesha, by doing this you will get me.' Saying this Mata Parvati went to Mount Kailash with Shiva
                After a year, the snake girls came to that place, then after knowing the method of fasting of Shri Ganesha from the snake girls, that child fasted for 21 days continuously. Ganeshji was pleased with his reverence. He asked the boy to ask for the desired fruit.
                On that the boy said- 'O Vinayak! Give me so much strength that I can walk on my feet and reach Mount Kailash with my parents and they will be happy to see this.
                Today is Vinayaka Chaturthi fast. Vinayaka Chaturthi Vrat falls on the Chaturthi Tithi of Shukla Paksha of every month. Today devotees are worshiping Lord Ganesha at home and they have also kept a fast to please Ganpati. It is believed that the person who keeps this fast with a sincere heart and worships Lord Ganesha by law, his
                Wishes are fulfilled and Vighnaharta removes all his troubles, troubles and obstacles. Devotees recite Vinayaka Chaturthi fasting story after worship. It is believed that just listening to this story gives manifold fruits of fasting. That's why today we have brought for you the legend of Vinayaka Chaturthi fasting...
                According to the legend, once Lord Shiva and Mother Parvati were sitting on the banks of river Narmada. There Mata Parvati asked Lord Shiva to play Chaupad to pass the time.
                Shiva agreed to play Chaupar, but the question arose in front of him, who would decide whether to win or lose in this game, Lord Shiva collected some straws and made an effigy of it and honored him and said to the effigy- ' Son, we want to play quadruped, but there is no one to decide our victory or defeat, that's why you tell us who lost and who won?
                After that the chaupad game of Lord Shiva and Mother Parvati started. This game was played 3 times and incidentally Mata Parvati won all three times. After the game was over, the boy was asked to decide whether to win or lose, then that boy told Mahadev as the winner.
                On hearing this, Mother Parvati became angry and in anger she cursed the child to be lame, lying in the mud. The child apologized to Mother Parvati and said that this has happened to me out of ignorance, I did not do this out of any malice.
                When the child asked for forgiveness, the mother said- 'Nag girls will come here to worship Ganesha, according to them, you fast on Ganesha, by doing this you will get me.' Saying this Mata Parvati went to Mount Kailash with Shiva
                After a year, the snake girls came to that place, then after knowing the method of fasting of Shri Ganesha from the snake girls, that child fasted for 21 days continuously. Ganeshji was pleased with his reverence. He asked the boy to ask for the desired fruit.
                On that the boy said- 'O Vinayak! Give me so much strength that I can walk on my feet and reach Mount Kailash
                </p>
                <hr />

            </div>
        </div>
    )
}

export default Home
