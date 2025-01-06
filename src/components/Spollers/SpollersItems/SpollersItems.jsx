
import Spollers from "../Spollers"
import "./spollers-items.scss"



const data = [
    {
        text:"AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
        title:"How often do you release new episodes?"
    },
    {
        text:"AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
        title:"What is AI?"
    },
    {
        text:"AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
        title:"How can I listen to your podcasts?"
    },
    {
        text:"AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
        title:"Can I download episodes to listen offline?"
    },
    {
        text:"AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
        title:"Are your podcasts free to listen to?"
    }
]


const SpollersItems = () => {
    return (
        <div className=" tabs"> 
            {
                data.map((item, i) => {
                    return (
                        <Spollers key={i} {...item}/>
                    )
                })
            }
		</div>
    )
}

export default SpollersItems