import React from 'react';

const WorksItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt="Project img" className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <p className='description'>{item.des}</p>
        <div className='techStackArea'>
          <p className='techText'>Tech Stack Used:</p>
          <button className='techButton'>{item.techStack1}</button>
          <button className='techButton'>{item.techStack2}</button>
          <button className='techButton'>{item.techStack3}</button>
          <button className='techButton'>{item.techStack4}</button>

        </div>
        <a href={item.demo} className='work__button' target="_blank">
            Demo <i className='bx bx-right-arrow-alt work__button-icon'/>
        </a>
        <a href={item.git} className='work__button' target="_blank">
        <i className="uil uil-github"/>Github <i className='bx bx-right-arrow-alt work__button-icon'/>
        </a>
       
    </div>
  )
}

export default WorksItems