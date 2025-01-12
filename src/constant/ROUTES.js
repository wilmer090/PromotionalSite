import About from "../pages/About/About"
import HomePage from "../pages/home/HomePage"
import NoPageFound from "../pages/NoPageFound/NoPageFound"
import OurPeople from "../pages/ourpeople/OurPeople"
import OurPeopleDetails from "../pages/ourpeople/OurPeopleDetails"
import Services from "../pages/Services/Services"

export const PageRoutes = [
    {id:1, path: '/' , element: <HomePage />},
    {id:2, path: '/services' , element: <Services />},
    {id:3, path: '/our-people' , element: <OurPeople />},
    {id:4, path: '/our-people/:id' , element: <OurPeopleDetails />},
    {id:5, path: '/about-us' , element: <About />},
    {id:6, path: '*' , element: <NoPageFound />},
  ]