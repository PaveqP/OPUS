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
                                <a href="https://vk.com/opus_it" className="s__icons-vk">
                                    <img src={require("../../UI/utils/img/vkicon.png")} alt="#"/>
                                </a>
                                <a href="https://t.me/OpusIt" className="s__icons-tg">
                                    <img src={require("../../UI/utils/img/tgicon.png")} alt="#"/>
                                </a>
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
