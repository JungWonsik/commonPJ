import { useState } from "react";

import * as S from "../../StudyRoomStyledComponents";
import StudyProfileDetail from "./studypreparedetail/StudyProfileDetailComponent";
import StudyEssayDetail from "./studypreparedetail/StudyEssayDetailComponent";
import StudyQuestionDetail from "./studypreparedetail/StudyQuestionDetailComponent";

const StudyProfileAndEssay = (props) => {
    const { peopleList, questionList, setQuestionList } = props;
    const [tap, setTap] = useState(null);
    const [checkProfile, setCheckProfile] = useState(null);
    const [checkEssay, setCheckEssay] = useState(null);
    const [checkWho, setCheckWho] = useState("");
    const [checkQuestions, setCheckQuestions] = useState([]);
    const [selectedNickname, setSelectedNickname] = useState(null);

    const [targetObject, setTargetObject] = useState({
        name: "",
        questions: [],
    });

    const handleProfileTap = () => {
        setTap("profile");
    };

    const handleEssayTap = () => {
        setTap("essay");
    };
    const handleQuestionTap = () => {
        setTap("question");
    };

    const handleCheckWho = (index) => {
        const selectedPerson = peopleList[index];
        setSelectedNickname(selectedPerson.nickname);

        const target = peopleList[index];
        console.log(target);
        setCheckProfile(target);
        setCheckEssay(target.essay);
        setCheckWho(target.nickname);
        setCheckQuestions(
            questionList.find((person) => person.name === target.name)
        );
        setTargetObject(questionList.find((list) => list.name === target.name));
        // setTap("profile");
    };

    // const addQuestionToProfile = (question) => {
    //     setQuestionList((prevList) =>
    //         prevList.map((item) =>
    //             item.name === checkWho
    //                 ? { ...item, questions: [...item.questions, question] }
    //                 : item
    //         )
    //     );
    // };
    // const updateQuestionInProfile = (checkWho, updatedQuestions) => {
    //     setQuestionList((prevList) =>
    //         prevList.map((item) =>
    //             item.name === checkWho
    //                 ? { ...item, questions: updatedQuestions }
    //                 : item
    //         )
    //     );
    //     setTargetObject(questionList.find((list) => list.name === checkWho));
    //     localStorage.setItem("questionList", JSON.stringify(questionList));
    // };

    return (
        <div>
            <S.profileAndEssayWrap>
                <S.peopleTapWrap>
                    <S.peopleTap>
                        <S.peopleTitle>참여자</S.peopleTitle>
                        <hr />
                        <div>
                            {peopleList &&
                                peopleList.map((people, index) => (
                                    <S.peopleName
                                        onClick={() => handleCheckWho(index)}
                                    >
                                        {people.nickname}
                                    </S.peopleName>
                                ))}
                        </div>
                    </S.peopleTap>
                </S.peopleTapWrap>
                <S.contentTapWrap>
                    <S.contentTapList>
                        <S.contentTap onClick={handleProfileTap}>
                            프로필
                        </S.contentTap>
                        <S.contentTap onClick={handleEssayTap}>
                            자기소개서
                        </S.contentTap>
                        <S.contentTap onClick={handleQuestionTap}>
                            질문리스트
                        </S.contentTap>
                    </S.contentTapList>
                    <S.contentDetail>
                        {!checkProfile ? (
                            <S.profileContent>
                                참여자를 클릭해 정보를 확인하세요!
                            </S.profileContent>
                        ) : tap === "profile" ? (
                            <StudyProfileDetail
                                targetObject={targetObject}
                                setTargetObject={setTargetObject}
                                profile={checkProfile}
                                questionList={questionList}
                                setQuestionList={setQuestionList}
                                // addQuestionToProfile={addQuestionToProfile}
                            />
                        ) : tap === "essay" ? (
                            <StudyEssayDetail
                                nickname={selectedNickname}
                                essay={checkEssay}
                                onAir={false}
                                before={true}
                            />
                        ) : (
                            tap === "question" && (
                                <StudyQuestionDetail
                                    checkWho={checkWho}
                                    targetObject={targetObject}
                                    setTargetObject={setTargetObject}
                                    // updateQuestionInProfile={
                                    //     updateQuestionInProfile
                                    // }
                                />
                            )
                        )}
                    </S.contentDetail>
                </S.contentTapWrap>
            </S.profileAndEssayWrap>
        </div>
    );
};

export default StudyProfileAndEssay;
