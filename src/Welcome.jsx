import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

function Welcome({ proceed }) {
    return (
        <section className="welcome">
            <h2 className='welcome__headline welcome__headline_left'>de</h2>
            <h2 className='welcome__headline' style={{margin: "45px 0 0 0"}}>CORE</h2>
            <h2 className='welcome__headline welcome__headline_right'>dans</h2>
            <motion.button onClick={proceed} initial={{right: 15}} animate={{right: 25, transition: {duration: 1, repeat: Infinity, repeatType: "reverse", type: "tween"}}} className='welcome__button'>
                <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
        </section>
    )
}

export default Welcome;