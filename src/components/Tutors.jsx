import '../styles/Tutors.css'

function Tutors(props) {
    return (
        <div className="tutor-list">
            {
                props.tutorsList.map((item)=> {
                    return(
                        <div className='kartu-tutor'>
                            <img src= {item.image} />
                            <p>
                                {item.name}
                            </p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tutors;