import './PinnedWork.scss'
import { Category } from '../../UI/category/Category'

function PinnedWork(props) {
    return (
        <div className="pinnedwork">
            <div className="pinnedwork__base" style={{ display: 'none' }} >
                <div className="pinnedwork__base-row">
                    <div className="pinnedwork__base-image">
                        <img src={props.img} alt="#"></img>
                    </div>
                    <div className="pinnedwork__base-content" >
                        <div className="base__content-row">
                            <div className="base__content-title">
                                {props.title}
                            </div>
                            <div className="base__content-description">
                                {props.description}
                            </div>
                            <div className="base__content-categories">
                                <div className="content__categories-title">
                                    Категории:
                                </div>
                                <div className="content-categories-category">
                                    <div className="category__row">
                                        <Category text='JS' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pinnedwork__default" >
                <div className="pinnedwork__default-row">
                    <div className="pinnedwork__default-image">
                        <img src={require('../../UI/utils/img/pinnedwork_placeholder.png')} alt="" />
                    </div>
                    <div className="pinnedwork__default-title">
                        Закрепите свою лучшую работу
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PinnedWork }
