import React from 'react'
import './Survey.scss'

function Survey() {
  return (
    <div className='survey'>
      <div className="survey__row">
        <p className='survey__row-mark'>
            8.5
        </p>
        <div className="survey__row-right">
            <p className='survey__row-right-title'>
                Сотни участников уже высоко оценили ОПУС!
            </p>
            <a className='survey__row-right-rezults' href='https://disk.yandex.ru/d/dWWM3Xl1i0ELbA'>
                Результаты опроса
            </a>
        </div>
        <a className='survey__row-right-part' href='https://forms.yandex.ru/u/650373e1e010db576ff18a71/'>
                Принять участие в опросе
        </a>
        
      </div>
    </div>
  )
}

export {Survey}
