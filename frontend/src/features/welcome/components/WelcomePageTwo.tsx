// component
import WelcomeNavbar from "./WelcomeNavbar";
import NFTCard from "./NFTCard";
// css
import styles from "../Welcome.module.css";
// img
import white_cloud from "../../../assets/welcome/page1_cloud1.svg";
import yellow_cloud from "../../../assets/welcome/page1_cloud2.svg";
import pink_cloud from "../../../assets/welcome/page2_cloud.svg";
import dog from "../../../assets/nft-img/1.png";
import cat from "../../../assets/nft-img/2.png";
import giraffe from "../../../assets/nft-img/3.png";
import lion from "../../../assets/nft-img/4.png";
import rabbit from "../../../assets/nft-img/5.png";
import sheep from "../../../assets/nft-img/6.png";
import airplane from "../../../assets/welcome/airplane.svg";

const WelcomePageTwo = () => {
  return (
    <div className={styles.MotionArea}>
      <div className={`${styles.WelcomeBackground} ${styles.one}`}></div>
      <div
        className={`${styles.WelcomeBackground} ${styles.two} ${styles.active}`}
      ></div>
      <div className={`${styles.WelcomeBackground} ${styles.three}`}></div>
      <div className={`${styles.WelcomeBackground} ${styles.four}`}></div>
      <div className={`${styles.WelcomeBackground} ${styles.five}`}></div>
      <div className={`${styles.WelcomeBackground} ${styles.six}`}></div>

      <WelcomeNavbar />

      <img className={styles.page1_cloud1} src={white_cloud} alt="" />
      <img className={styles.page1_cloud2} src={yellow_cloud} alt="" />
      <img className={styles.page2_cloud} src={pink_cloud} alt="" />

      <h1 className={styles.WelcomeTitleText}>나만의 NFT를 만들어보세요!</h1>
      <h4 className={styles.WelcomeDescriptionText}>
        게임을 통해 그림을 그린 뒤 내가 그린 그림 NFT화가 가능해요!
      </h4>

      <div className={styles.NFTCardSlider}>
        <div className={styles.NFTCardRotate}>
          <NFTCard
            img={dog}
            name="Dog"
            answer="Dog"
            creater="피자먹는 방태"
            solver="치킨먹는 방태"
          />
          <NFTCard
            img={cat}
            name="Cat"
            answer="Cat"
            creater="피자먹는 고양이"
            solver="치킨먹는 고양이"
          />
          <NFTCard
            img={giraffe}
            name="Giraffe"
            answer="Giraffe"
            creater="피자먹는 기린"
            solver="치킨먹는 기린"
          />
          <NFTCard
            img={lion}
            name="Lion"
            answer="Lion"
            creater="피자먹는 라이언"
            solver="치킨먹는 라이언"
          />
          <NFTCard
            img={rabbit}
            name="Rabbit"
            answer="Rabbit"
            creater="피자먹는 토끼"
            solver="치킨먹는 토끼"
          />
          <NFTCard
            img={sheep}
            name="Sheep"
            answer="Sheep"
            creater="피자먹는 양"
            solver="치킨먹는 양"
          />
        </div>
      </div>

      <img className={airplane} src={airplane} alt="" />
    </div>
  );
};

export default WelcomePageTwo;