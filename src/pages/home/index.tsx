import "./style.css";

const HomePage = () => {
  return (
    <div className="md:flex flex-col justify-center items-center w-full pb-10" style={{overflow:'-moz-hidden-unscrollable'}}>
      <div className="row md:flex justify-between items-center">
        <div className="col md:flex flex-col md:justify-center md:items-center md:px-10 sm:px-16 px-5">
          <h1 className="font-bold md:text-4xl text-3xl text-black-700">
            The people platform- where interests become friendships
          </h1>
          <p className="md:text-xl md:py-8 py-4">
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day-sign up to join the fun.
          </p>
        </div>
        <div className="col md:flex md:justify-center items-center">
          <img src="./images/img.png" alt="error" />
        </div>
      </div>

      <div className="md:flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-5xl text-black-700 md:px-0 sm:px-12 px-3">How Society works</h1>
        <p className="text-xl font-medium py-8  md:px-0 sm:px-12 px-3" style={{ maxWidth: "700px" }}>
          Meet new people who share your interests through online and in person
          events. It's free to create an acccount.
        </p>

        <div style={{width:'100vw'}} className="md:flex justify-between items-center">

          <div className="column flex flex-col justify-center items-center mx-10">
            <img src="./images/handsUp.svg.png" alt="img1.png" />
            <h1 className="font-bold text-2xl text-cyan-600">Join a group</h1>
            <p className="md:text-xl md:py-8 py-4">
              Do what you love, meet others who love it, find your community. The rest is history!
            </p>
          </div>

          <div className="column flex flex-col justify-center items-center mx-10">
            <img src="./images/ticket.svg.png" alt="img1.png" />
            <h1 className="font-bold text-2xl text-cyan-600">Find an event</h1>
            <p className="md:text-xl md:py-8 py-4">
              Events are happening on just about any topic you can think of , from online gaming and photography to yoga and hiking.
            </p>
          </div>

          <div className="column flex flex-col justify-center items-center mx-10">
            <img className="py-2" src="./images/joinGroup.svg.png" alt="img1.png" />
            <h1 className="font-bold text-2xl text-cyan-600">Start a group</h1>
            <p className="md:text-xl md:py-8 py-4">
              You don't have to be an expert to gather people together and explore shared interests.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;