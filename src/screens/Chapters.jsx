import './Chapters.css';

import makkahIcon from '../images/icons/kaaba-mecca.png'
import { useEffect, useState } from 'react';

const Chapters = () => {

    const [chapterData, setChapterData] = useState([
        {
            chpaterName: "Al Fatihah",
            chpaterNameTranslation: "The Openiong",
            noOfNotes: 0,
            noOfParagraphs: 1,
            isMadani: false,
            surahNumber: 1,
            noOfVerses: 7
        },
    ])

    useEffect(() => {
        console.log("making network request...")
        var reqJson = JSON.stringify({
            "UserId": 1,
            "ChapterId": 1,
            "LastUpdatedTimeTicks":0
        })
        for(var i = 0; i < 2; i++){
            fetch('https://18.195.60.150/api/GetChapterDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: reqJson
            }).then((data) => {
                console.log(data)
                data.json()
            }).then((surahInfo) => {
                console.log(surahInfo)
            })
        }
    }, [])

    return (
        <section>
            {
                chapterData.map((chapterDataObj) => {
                    return(
                    <div className="chapterDetailDiv" key={chapterDataObj.noOfVerses}>
                        <div className="cahpterBreifInfo">
                            <h1 className="chapterNumHeading">{chapterDataObj.surahNumber}</h1>
                            <div className="surahTypeView"><img class="surahTypeImgView" src={makkahIcon}></img></div>
                            <span className="versesCount">{chapterDataObj.noOfVerses}verses</span>
                        </div>
                        <div className="chapterDetailInfo">
                            <h1 className="surahNameTranslationHeading">{chapterDataObj.chpaterNameTranslation}</h1>
                            <h2 className="surahNameHeading">{chapterDataObj.chpaterName}</h2>
                            <div className="paraAndNoteDiv">
                                <span className="paraAndNoteCount">{chapterDataObj.noOfParagraphs} Paragraph</span>
                                <span className="paraAndNoteCount">{chapterDataObj.noOfNotes} Notes</span>
                            </div>
                        </div>
                    </div>
                )})
            }
        </section>
    )
}

export default Chapters