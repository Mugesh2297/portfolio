import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt="Project img" className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <a href="#" className='work__button'>
            Demo <i className='bx bx-right-arrow-alt work__button-icon'/>
        </a>
        <a href="https://github.com/Mugesh2297" className='work__button' target="_blank">
        <i className="uil uil-github"/>Github <i className='bx bx-right-arrow-alt work__button-icon'/>
        </a>
    </div>
  )
}

export default WorksItems