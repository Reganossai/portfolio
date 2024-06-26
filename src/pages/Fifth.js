import Navbar from '../components/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import 	Footer from '../components/Footer';

 
const Fifth = () => {
return(
<div className="moppppp">
<div className="first-header">
<Navbar/>
</div>
<div className="first-content">
<Link to="/thoughts"><FontAwesomeIcon icon={faArrowLeft}/>All posts</Link>
<h1><b>A Guide to Creativity for the Left Brained</b></h1>
<img src="https://benadam.me/images/flagstaff.jpeg"/>
<h2><b>Redefining Creativity</b></h2>
<h4>If I were to take a poll, I am guessing that most people would not consider themselves to be a creative person (and undoubtedly some of you “creatives” are not nearly as creative as you think you are). So I want to start a new conversation about creativity and that begins with a new definition of creativity. Here is how I define it:</h4>
<h4>Creativity is simply making something without following instructions. That’s simple enough right? Just make something, but you can’t look up how to do it. For many of you “left-brained” people this is absolutely terrifying. “What if I mess up?” “What if I am not doing this right?”</h4>
<h4>Well since I am a left-brained, person who has really struggled with considering myself to be creative:here are some practical tips for growing in your creative abilities (yes it’s a list).</h4>
<h2>Creativity is intentional</h2>
<h4>So you have decided that you want to be creative, so now what? Well, the first step in growing in your ability to think creatively is to just do it. And usually we don’t do these things (even if we desire to do them) unless we set aside time to pursue them.</h4>
<h4>There is a myth that a lot of people buy into that creative people are simply more inspired than others. There is a phrase that I have found to be very true.</h4>
<h4>Ideas are like sex, but executing them is like raising the baby. Everyone has ideas. You have to start thinking of creativity as something that is bigger than art (although art is highly creative). Creativity is expressed in cooking, in planning a date, in financing a business. But a lot of times, to see our ideas come to reality, it takes a lot of work. And for me, that doesn’t happen unless I set aside time to do it.</h4>
<h2>Feed yourself creatively.</h2>
<h4>Growing in creativity is like working out. Talk to any crossfit bro about what they eat and chances are they are pretty intense with their (paleo) diet. Your brain is a muscle and it needs good food in order to get quality output.</h4>
<h4>The first way to feed your brain is to stop eating junk food. Television and Netflix are amazing, and if I am being honest I am a binger too (Legend of Korra #allday). But these are purely consumptive forms of entertainment. Reading on the other hand (especially fiction), forces your brain to think creatively because you have to imagine what the characters look like, and you have to think about and process information on a deeper level.</h4>
<h4>Secondarily, I think that exposing your self to things that are outside of what you normally do, listen to, or read, allows your brain to form new connections that it would not have been able to make before. This is so important to the creative process, because nothing is made from scratch.</h4>
<h5><i>Creativity always involves making combinations of preexisting elements that create something new.</i></h5>
<h2>Creativity has to be consistent</h2>
<h4>The final tip I would give you is to be consistent. There are several things that kill consistency, and the foremost is comparison. There is a story that has always resonated with me.</h4>
<h4>A school teacher decided to do a simple experiment with his two pottery classes. They were beginners, and so with the first class, he gave them the task of creating one pot which was due at the end of the semester. This pot would be graded on its quality in shape and design, as well as the technique used to craft it. To the second class, he gave the task of completing one pot each day. If they were able complete a pot each day, they would receive an A in the class.</h4>
<h4>At the end of the semester, there was no comparison between the two classes. The students who had to make a pot every day produced pottery that was significantly more creative and had better craftsmanship then their counterparts who only produced one pot. The students in the first class obsessed over theory and technique instead of getting their hands dirty. They overthought the process.</h4>
<h4>In so many ways, this is true for all creative endeavors. Consistency outweigh the significant leaps demanded by perfection.</h4>
<h4>Sometimes ‘done’ is better than ‘perfect’. If you consistent in pursuing growth in whatever skill set you are choosing to express your creativity (cooking, drawing, gardening etc) I believe that you will be amazed at what you are able to accomplish over time.</h4>
<h4>Here are a few books that have help to shape my thinking.</h4>
<ul>
<li>
<p>Walking on Water - Madeleine Le’Engle</p>
</li>


<li>
<p>Tipping Point - Malcolm Gladwell</p>
</li>

</ul>
</div>

<hr/>
<Footer/>
</div>
   );
 }
export default Fifth;