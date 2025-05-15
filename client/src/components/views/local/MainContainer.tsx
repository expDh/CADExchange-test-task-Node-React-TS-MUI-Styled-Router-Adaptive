import css from '../../../styles/styles.ts'
import {Link} from "react-router-dom";


const MainContainer = () => {
    const {MainContainer, MainVideo, MainCard,MainSend,ButtonUI} = css

    return (
        <MainContainer>
            <MainVideo.Section>
                <MainVideo.TextContainer>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
                        aliquid assumenda at, atque consequatur cupiditate dicta distinctio dolorum eius esse eveniet
                        facere libero magnam modi molestiae, nesciunt obcaecati officiis placeat quaerat, quas qui
                        quibusdam quo rem totam ut voluptatem!</p>
                </MainVideo.TextContainer>
                <MainVideo.VideoContainer>
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </MainVideo.VideoContainer>
            </MainVideo.Section>
            <MainCard.Section>
                <h1>Also very important title</h1>
                <MainCard.CardSection>
                    <MainCard.CardContainer>
                        <h2>Title</h2>
                        <MainCard.ItemContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            blanditiis delectus dolorem exercitationem fuga molestias nemo perferendis repellat tempora
                            tempore!</MainCard.ItemContainer>
                    </MainCard.CardContainer>
                    <MainCard.CardContainer>
                        <h2>Title</h2>
                        <MainCard.ItemContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            blanditiis delectus dolorem exercitationem fuga molestias nemo perferendis repellat tempora
                            tempore!</MainCard.ItemContainer>
                    </MainCard.CardContainer>
                    <MainCard.CardContainer>
                        <h2>Title</h2>
                        <MainCard.ItemContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            blanditiis delectus dolorem exercitationem fuga molestias nemo perferendis repellat tempora
                            tempore!</MainCard.ItemContainer>
                    </MainCard.CardContainer>
                    <MainCard.CardContainer>
                        <h2>Title</h2>
                        <MainCard.ItemContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            blanditiis delectus dolorem exercitationem fuga molestias nemo perferendis repellat tempora
                            tempore!</MainCard.ItemContainer>
                    </MainCard.CardContainer>
                    <MainCard.CardContainer>
                        <h2>Title</h2>
                        <MainCard.ItemContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            blanditiis delectus dolorem exercitationem fuga molestias nemo perferendis repellat tempora
                            tempore!</MainCard.ItemContainer>
                    </MainCard.CardContainer>
                    <MainCard.CardContainer>
                        <h2>Title</h2>
                        <MainCard.ItemContainer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                            blanditiis delectus dolorem exercitationem fuga molestias nemo perferendis repellat tempora
                            tempore!</MainCard.ItemContainer>
                    </MainCard.CardContainer>
                </MainCard.CardSection>
                <Link to='/contact' ><ButtonUI>Contact us</ButtonUI></Link>
            </MainCard.Section>


            <MainSend.Section>
                <h1>Less important title</h1>
                <Link to='/contact' ><ButtonUI>Contact us</ButtonUI></Link>
            </MainSend.Section>

        </MainContainer>
    );
};

export default MainContainer;