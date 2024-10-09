import AccountRouter from "./AccountRouter";
import EventRouter from "./EventRouter";
import "./HomeRouter.css";

const HomeRouter = () => {
  return (
    <>
      <>
        <h1> unPlanned Adventure </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptas
          excepturi doloribus animi ullam nemo aperiam quod. Quam laboriosam,
          molestiae, velit eius aliquid dolor qui non, error voluptatibus
          dignissimos fugiat?
        </p>
        <button> Log In </button>
      </>
      <AccountRouter />
      <EventRouter />
    </>
  );
};

export default HomeRouter;
