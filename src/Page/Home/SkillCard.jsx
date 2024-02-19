import React from 'react';

const SkillCard = ({skillImg,tech}) => {
    console.log(skillImg, tech)
    return (
        <div className="card w-auto shadow-xl">
                    <figure><img src={skillImg} alt="item" className='pt-2 h-20'/></figure>
                    <div className="card-body text-center">
                        <h2 className="font-semibold text-center ">{tech}</h2>                      
                    </div>
                </div>
    );
};

export default SkillCard;