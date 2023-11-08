import "./LkWorks.scss"
import { AddWorkButton } from "../../UI/addWorkButton/AddWorkButton"
import { Work } from "../../UI/work/Work"
import { useSelector } from "react-redux"
import { getUserWorkPhoto } from "../../actions/AddWork"

function LkWorks({setShowModal, showModal}) {

    const userModel = useSelector(state => state.user.currentUser)

    //console.log(userModel.works[0].img)

    const getWorkPhoto = (id) => {
        getUserWorkPhoto(id)
    }

    return (
        <div className="lkworks">
        
            <div className="lkworks__container">
                <div className="lkworks__row">
                    <div className="lkworks__title">
                        Другие работы
                    </div>
                    <div className="lkworks__description">
                        <div className="lkworks__description-row">
                            <div className="lkworks__description-text">
                                Загружайте свои лучшие работы и их увидит сообщество. Добавляйте изображения, <br />
                                описания и оригинальные обложки, тогда портфолио будет максимально эффективным!
                            </div>
                            <AddWorkButton className="lkworks__description-button" setShowModal={setShowModal} showModal={showModal}/>
                        </div>
                    </div>
                    <div className="lkworks__works">
                        
                        <div className="lkworks__works-row">
                            {userModel.works &&
                                userModel.works.map((work) => (
                                    <Work
                                        id={work.id}
                                        key={work.id}
                                        img={work.previewPhoto}
                                        title={work.name}
                                        //categories={"React, Js, HTML"}
                                        //likes={"228"}
                                        //views={"228"}
                                    />
                                ))
                            /* <Work
                                img={require("../../UI/utils/img/workexample.png")}
                                title={"Your Books From The Best Writter"}
                                categories={"React, Js, HTML"}
                                likes={"228"}
                                views={"228"}
                            />
                            <Work
                                img={require("../../UI/utils/img/workexample.png")}
                                title={"Your Books From The Best Writter"}
                                categories={"React, Js, HTML"}
                                likes={"228"}
                                views={"228"}
                            />
                            <Work
                                img={require("../../UI/utils/img/workexample.png")}
                                title={"Your Books From The Best Writter"}
                                categories={"React, Js, HTML"}
                                likes={"228"}
                                views={"228"}
                            />
                            <Work
                                img={require("../../UI/utils/img/workexample.png")}
                                title={"Your Books From The Best Writter"}
                                categories={"React, Js, HTML"}
                                likes={"228"}
                                views={"228"}
                            />
                            <Work
                                img={require("../../UI/utils/img/workexample.png")}
                                title={"Your Books From The Best Writter"}
                                categories={"React, Js, HTML"}
                                likes={"228"}
                                views={"228"}
                            /> */}
                            <AddWorkButton setShowModal={setShowModal} showModal={showModal}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { LkWorks }
