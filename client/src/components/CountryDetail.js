import { useDispatch, useSelector } from "react-redux";
import { getCountry, clearUser } from "../redux/actions"
import { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StarRating from "./starRating";
import "../App.css";
import FavoriteContext from "../context/favoritesContext";


 function  CountryDetail() {
  const {favoriteCountry,updateFavoriteCountry}=useContext(FavoriteContext);
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryName);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountry(id));
    return () => {
      dispatch(clearUser());
    };
  }, [dispatch, id]);


console.log(favoriteCountry)

console.log(countryDetail)
  
  const redHeart = "❤️";
  const blackHeart = "🖤";


//const heart =  favoriteCountry.includes(countryDetail.id) ? redHeart : blackHeart

const clickHeart = (e) =>{
    e.preventDefault();
    updateFavoriteCountry(id);
   
}

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

            <div>
              <Button onClick={clickHeart} >
                <Favorite>{favoriteCountry && favoriteCountry.includes(countryDetail.id) ? redHeart : blackHeart}</Favorite>
              </Button>
            </div>
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
                <H1>Name: {countryDetail.name}</H1>
              </Name>

              <Id>#{countryDetail.id}</Id>
            </Second>
            <Second>
              <Name>
                <H1>Region: {countryDetail.region}</H1>
              </Name>
              <Id>Population: {countryDetail.population}</Id>
            </Second>
            <Second>
              <Name>
                <H1>Sub-Region: {countryDetail.subregion}</H1>
              </Name>
            </Second>
            <Second>
              <Name>
                <H1>Capital: {countryDetail.capital}</H1>
              </Name>
              <Id>Area: {countryDetail.area} km²</Id>
            </Second>

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
                      {console.log(stat.difficulty)}
                    </Difficulty>
                    <Difficulty>
                      <H3>Duration:</H3>
                      <H3> {stat.duration} Days</H3>
                    </Difficulty>
                  </BottomCard>
                );
              })
            ) : (
              <NavLink exact to="/create">
                <H1>
                  {countryDetail.name} still doesn't has any Touristic Activity
                  created, fell free to add one by clicking here
                </H1>
              </NavLink>
            )}
          </Bottom>
        </Card>
      </Container>
    );
  }
}
const Background = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
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
`;

const BottomCard = styled.div`
  border-radius: 40px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 5px solid rgba(249, 249, 249, 0.1);
  padding: 20px;
  margin: 20px;
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
  padding: 10px;
`;
const Favorite = styled.div`
  padding: 10px;
`;

//second section
const Name = styled.div`
  display: block;
`;
const Activity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;
const Difficulty = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
`;
const Second = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  text-transform: capitalize;
  padding-right: 20px;
  padding-left: 20px;
`;
const Id = styled.h1`
  color: var(--font-light-color);
  margin-bottom: 0;
  margin-top: 0;
  font-size: 60px;
  margin-right: 30px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 3px;
    font-size: 20px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 3px;
    font-size: 40px;
  }
`;
const H1 = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 120px;
  color: var(--font-light-color);
  margin-left: 30px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 40px;
    margin-left: 3px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 40px;
    margin-left: 3px;
  }
`;
const H3 = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 120px;
  color: #090b13;
  margin-left: 30px;
  @media (max-width: 868px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 40px;
    margin-left: 3px;
  }
  @media (min-width: 899px) and (max-width: 2000px) {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 40px;
    margin-left: 3px;
  }
`;
const B1 = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: black;
  background-color: white;
`;
const H2 = styled.h2`
  @media (max-width: 868px) {
    font-size: 30px;
  }
  font-size: 40px;
`;
const Bottom = styled.div`
  border: 2px solid;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: block;
  height: auto;
`;
export default CountryDetail;
