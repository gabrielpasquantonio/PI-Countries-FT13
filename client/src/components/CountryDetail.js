import { useDispatch, useSelector } from "react-redux";
import { getCountry, clearUser } from "../redux/actions";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StarRating from "./starRating";
import "../App.css";
import FavoriteContext from "../context/favoritesContext";
import Footer from "./Footer";

function CountryDetail() {
  const { favoriteCountry, updateFavoriteCountry } =
    useContext(FavoriteContext);
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryName);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountry(id));
    return () => {
      dispatch(clearUser());
    };
  }, [dispatch, id]);

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoriteCountry(id);
  };

  if (countryDetail === null) {
    return <Div>Country not found</Div>;
  } else if (countryDetail === undefined) {
    return <Div>Loading...</Div>;
  } else {
    return (
      <Container>
        <Top>
          <First>
            <NavLink exact to="/home">
              <ArrowBackIosIcon fontSize="large" />
            </NavLink>

            <ButtonDiv>
              <Button onClick={clickHeart}>
                <Favorite>
                  {favoriteCountry && favoriteCountry.includes(countryDetail.id)
                    ? redHeart
                    : blackHeart}
                </Favorite>
              </Button>
            </ButtonDiv>
          </First>
        </Top>
        <Card>
          <Wrap>
            <img alt={countryDetail.name} src={countryDetail.flag} />
          </Wrap>
          <Bottom>
            <B1>
              <H2>About</H2>
            </B1>
            <Second>
              <Name>
                <H1> {countryDetail.name}</H1>{" "}
              </Name>
              <Id>#{countryDetail.id}</Id>
            </Second>

            <Second>
              <Name>
                <H1>Region:</H1>
              </Name>{" "}
              <Name>
                <H1> {countryDetail.region}</H1>
              </Name>
            </Second>
            <Second>
              <H1>Population:</H1> <H1>{countryDetail.population}</H1>
            </Second>
            <Second>
              <Name>
                <H1>Sub-Region:</H1>{" "}
              </Name>
              <Name>
                <H1>{countryDetail.subregion}</H1>
              </Name>
            </Second>
            <Second>
              <H1>Area:</H1>
              <H1> {countryDetail.area} km²</H1>
            </Second>
            <Last>
              <Name>
                <H1>Capital:</H1>
              </Name>
              <Name>
                {" "}
                <H1> {countryDetail.capital}</H1>
              </Name>
            </Last>

            <B1>
              <H2>Touristic Activities</H2>
            </B1>
            {countryDetail.activities.length > 0 ? (
              countryDetail.activities.map((stat, idx) => {
                return (
                  <BottomCard className={stat.season}>
                    <Activity>
                      <Name key={idx}>
                        <H3> {stat.name}</H3>
                      </Name>
                    </Activity>
                    <Difficulty>
                      <H3>Difficulty:</H3>
                      <StarRating props={stat.difficulty} />
                    </Difficulty>
                    <Difficulty>
                      <H3>Duration:</H3>
                      <H3>
                        {" "}
                        {stat.duration}
                        {stat.duration === 1 ? " Hour" : " Hours"}
                      </H3>
                    </Difficulty>
                  </BottomCard>
                );
              })
            ) : (
              <Alert className="alert">
                <NavLink exact to="/create">
                  <H1Alert>
                    {countryDetail.name} still doesn't has any Touristic
                    Activity created, fell free to add one by clicking here
                  </H1Alert>
                </NavLink>
              </Alert>
            )}
          </Bottom>
        </Card>
        <Footer />
      </Container>
    );
  }
}

const H1Alert = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 20px;
  color: #10121a;
  margin-left: 5px;
  display: relative;
  align-items: center;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 15px;
    margin-left: 3px;
    padding: 2%;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 20px;
    margin-left: 3px;
  }
`;

const Alert = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  color: #10121a;
  height: 200px;
  background-size: 100% 200px;
`;

const Div = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  @media (min-width: 890px) and (max-width: 1100px) {
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: 1101px) and (max-width: 1450px) {
    width: 60%;
    margin-left: 20%;
  }
  @media (min-width: 1451px) and (max-width: 2050px) {
    width: 30%;
    margin-left: 20%;
  }
  @media (min-width: 2051px) and (max-width: 4050px) {
    width: 40%;
    margin-left: 25%;
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 100px;
  padding: 0 calc(3.5vw + 5px);
`;

//first section
const Top = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 20px;
`;
const First = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 6px;
  @media (max-width: 768px) {
    font-size: 3px;
    padding: 2px;
  }
`;
const ButtonDiv = styled.div`
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Favorite = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 2px !important;
  }
`;

//second section
const Name = styled.div``;
const Activity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

const Second = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  text-transform: capitalize;
  padding-right: 2%;
  padding-left: 2%;
`;
const Last = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  text-transform: capitalize;
  padding-right: 2%;
  padding-left: 2%;
  margin-bottom: 4%;
`;
const Id = styled.h1`
  color: var(--font-light-color);
  margin-bottom: 0;
  margin-top: 0;
  font-size: 20px;
  margin-right: 5px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 3px;
    font-size: 15px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 3px;
    font-size: 20px;
  }
`;
const H1 = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 20px;
  color: var(--font-light-color);
  margin-left: 5px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 15px;
    margin-left: 3px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 20px;
    margin-left: 3px;
  }
`;
const Difficulty = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1%;
  padding-left: 1%;
  @media (max-width: 868px) {
    padding-right: 1%;
    padding-left: 1%;
  }
`;
const H3 = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 20px;
  color: #090b13;
  margin-left: 1%;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 15px;
    margin-left: 3px;
  }
  @media (min-width: 868px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 20px;
    margin-left: 3px;
  }
`;
const B1 = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;

  padding-top: 2%;
`;
const H2 = styled.h2`
  @media (max-width: 868px) {
    font-size: 20px;
  }
  font-size: 30px;
`;
const Bottom = styled.div`
  border: 2px solid;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: block;
  height: auto;
`;

const BottomCard = styled.div`
  border-radius: 40px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 5px solid rgba(249, 249, 249, 0.1);
  padding: 3%;
  margin: 3%;
`;
export default CountryDetail;
