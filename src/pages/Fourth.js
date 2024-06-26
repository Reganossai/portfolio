import Navbar from '../components/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import 	Footer from '../components/Footer';
 
const Fourth = () => {
return(
<div className="mopppp">
<div className="first-header">
<Navbar/>
</div>
<div className="first-content">
<Link to="/thoughts"><FontAwesomeIcon icon={faArrowLeft}/>All posts</Link>
<h1><b>Struggling to Believe Greatness is Worth It</b></h1>
<h2><b>The Result of Long Hours and Mounting Frustration</b></h2>
<h4>I heard the door slam as my fiancee walked into the house. She had been growing increasingly frustrated with my long hours, and I am still on the phone with a business call. I knew that the ensuing conversation was not going to go well for me.A little backstory: My fiancee and I have been looking for an apartment in addition to her going through nursing school and me working two jobs ( oh, and we’re planning a wedding).</h4>
<h4>The reality is, I don’t have time to be creative (or pursue much professional development) outside of work. In order to produce great work, and continue a fast rate of professional growth, I must sacrifice time with my (future) wife, family and friends. Greatness, it would seem, is found in the late nights, long hours, and full dedication to craft and career. Of all of the great designers and creatives that I follow, the vast majority of them are single (and from what I gather, introverts). I am neither.</h4>
<h4>This seems like a bleak and lonely existence. To do great work, and to be unknown in life. As I sit here, I can’t help but feel a bit helpless. Does being an awesome husband / Dad (hopefully some day) put a cap on my ability as a professional ? I think that the answer is yes.</h4>
<h5><i>"The worth of things can’t be measured by what they cost but by what the cost you to get it, that if anything costs you your faith or your family, then the price is too high, and that there are some things that will never wear out.” - Bob Dylan</i></h5>
<h4>Dylan’s quote makes me think about what’s at the core of being happy, and meaningful. I find myself wondering what if someone somewhere wrote a book on being mediocre. My friend Bryan Temple came up with the clever idea for a book called :</h4>
<h5>Great To Good: Why Some Companies shouldn’t make the leap… while others do.</h5>
<h2>Chapter titles (from my imagination):</h2>
<ul>
<li>
<p>An intro into mediocrity and its advantages</p>
</li>

<li>
<p>I would have finished this chapter but I …</p>
</li>

<li>
<p>My bank account has like 6,000 dollars in it</p>
</li>

<li>
<p>Being solid and leaving work on time</p>
</li>

</ul>
<h4>I am not saying that working hard is not a good thing, in fact it is critical to a happy and healthy life. But sacrificing relationships with real people for a twitter following, or to build a portfolio or bank account just seems like a lot of veneer and little substance. I have always admired my friend Tavier Thomas for closing down his restaurant so he could take an office job that gave him more time with his family and doing the things he loved.</h4>
<h4>This is admirable. But being overindulgent, I struggle to walk away. I toggle between a state of apathy and doing too much. Finding this balance seems critical to happiness and personal sanity. (Yes I do realize that about one million books have been written on this- but it is still an epiphany to me). Perhaps one day I will be able to keep work confined to 40 hours a week, and whats left of my creative brain to think of new ways to love my fiancee , or build some stuff for our house, or (God forbid) do nothing. I am looking forward to that day.</h4>
</div>
<hr/>
<Footer/>
</div>
     );
}
export default Fourth;