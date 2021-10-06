import './Chapters.css';

import makkahIcon from '../images/icons/kaaba-mecca.png'

const Chapters = () => {
    return(
    <section>
        <div class="chapterDetailDiv">
            <div class="cahpterBreifInfo">
                <h1 class="chapterNumHeading">1</h1>
                <div class="surahTypeView"><img class="surahTypeImgView" src={makkahIcon}></img></div>
                <span class="versesCount">7 verses</span>
            </div>
            <div class="chapterDetailInfo">
                <h1 class="surahNameTranslationHeading">The Opening</h1>
                <h2 class="surahNameHeading">Al-Fatihah</h2>
                <div class="paraAndNoteDiv">
                    <span class="paraAndNoteCount">1 Paragraph</span>
                    <span class="paraAndNoteCount">0 Notes</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Chapters