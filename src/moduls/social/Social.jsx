import "./Social.scss"

function Social() {
    return (
        <div className="social">
            <div className="s__container">
                <div className="s__row">
                    <div className="s__left">
                        <div className="s__title">Подпишись, чтобы ничего не пропустить</div>
                        <div className="s__icons">
                            <div className="s__icons-row">
                                <button className="s__icons-vk">
                                    <img src={require("../../UI/utils/img/vkicon.png")} alt="#"/>
                                </button>
                                <button className="s__icons-tg">
                                    <img src={require("../../UI/utils/img/tgicon.png")} alt="#"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="s__right">
                        <img src={require("../../UI/utils/img/socialmain.png")} alt="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Social}
