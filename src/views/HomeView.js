import "../App.css";
import Members from "../components/Members";

const HomeView = () => {
  return (
    <div className="section1">
      <div>
        <h3>Our Mission</h3>
        <p>
          Our mission is to bring about proactive efforts in starting,
          maintaining, and protecting the community green spaces of South
          Florida. We wanted to inspire individuals and communities to
          contribute, no matter how small the sapling may be, to their
          neighborhood flora. In doing so, we want to bring awareness to not
          only the community’ need for lush, beautiful urban foliage but also to
          the wider and more systemic challenges that our environment faces—as
          well as the very real threat of climate change. We hope this project
          can be starting point for anyone who wants a greener world, one plant
          at a time.
        </p>
      </div>

      <div>
        <h3>Our Team</h3>
        <p>
          We are a team of developers from Ironhack, an immersive technology
          bootcamp in Miami, Florida. We specialize in Full-Stack Web
          Development, ideating solutions to problems with an emphasis on
          industry standard web development frameworks and tools. Want to learn
          more? Feel free to reach out us!
        </p>
      </div>
      <div>
        <Members name="Andriw" image="R1324_FEA_Tekashi69_B3.jpeg" />
      </div>
    </div>
  );
};

export default HomeView;
